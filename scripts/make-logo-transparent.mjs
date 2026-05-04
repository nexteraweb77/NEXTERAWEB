/**
 * Removes grey stone background from logo PNGs (cyan line art on charcoal).
 * On first use per file, copies the source to *-original-backup.png; re-runs read the backup.
 *
 * Run: node scripts/make-logo-transparent.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const JOBS = [
  { file: "logo.png", backup: "logo-original-backup.png" },
  { file: "logo-navbar.png", backup: "logo-navbar-original-backup.png" },
];

/** @param {number} r @param {number} g @param {number} b */
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      default:
        h = ((r - g) / d + 4) / 6;
    }
  }
  return { h: h * 360, s, l };
}

function dilateMax3(mask, width, height) {
  const out = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let v = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx,
            ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          v |= mask[ny * width + nx];
        }
      }
      out[y * width + x] = v;
    }
  }
  return out;
}

/** Cyan / ice-blue ink (not charcoal, not white speckle). */
function isLineInk(h, s, l) {
  if (l > 0.93 && s < 0.14) return false;
  if (s < 0.055) return false;
  if (h < 150 || h > 250) return false;
  if (l < 0.28) return false;
  return true;
}

function sourcePath(file, backup) {
  const input = path.join(PUBLIC, file);
  const back = path.join(PUBLIC, backup);
  if (fs.existsSync(back)) return back;
  fs.copyFileSync(input, back);
  console.log(`Backed up original to public/${backup}`);
  return input;
}

/**
 * @param {string} file
 * @param {string} backup
 */
async function processOne(file, backup) {
  const src = sourcePath(file, backup);
  const outPath = path.join(PUBLIC, file);

  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  if (channels !== 4) throw new Error("Expected RGBA");

  const hslAt = (i) => rgbToHsl(data[i], data[i + 1], data[i + 2]);

  const seed = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      if (data[i + 3] < 40) continue;
      const { h, s, l } = hslAt(i);
      if (s > 0.09 && h >= 158 && h <= 242 && l > 0.32) seed[y * width + x] = 1;
    }
  }

  let hull = seed;
  for (let k = 0; k < 3; k++) hull = dilateMax3(hull, width, height);

  const out = Buffer.from(data);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const i = idx * 4;
      const aIn = data[i + 3];
      const { h, s, l } = hslAt(i);

      if (aIn < 8) {
        out[i + 3] = 0;
        continue;
      }

      if (!hull[idx]) {
        out[i + 3] = 0;
        continue;
      }

      if (!isLineInk(h, s, l)) {
        out[i + 3] = 0;
        continue;
      }

      const a = Math.round(aIn * (seed[idx] ? 1 : 0.88));
      out[i + 3] = Math.min(255, a);
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(outPath);

  console.log(`Wrote public/${file}`);
}

async function main() {
  for (const { file, backup } of JOBS) {
    if (!fs.existsSync(path.join(PUBLIC, file))) {
      console.warn(`Skip missing public/${file}`);
      continue;
    }
    await processOne(file, backup);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
