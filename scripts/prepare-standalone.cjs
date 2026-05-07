/**
 * După `next build` cu `output: "standalone"`, Next lasă în `.next/standalone` un server minimal.
 * Trebuie copiate `public/` și `.next/static/` lângă acel server — altfel lipsesc CSS/JS/fonturi în producție.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const standalone = path.join(root, ".next", "standalone");
const serverJs = path.join(standalone, "server.js");

if (!fs.existsSync(serverJs)) {
  console.warn("[prepare-standalone] Nu există .next/standalone/server.js — sari peste.");
  process.exit(0);
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

const destPublic = path.join(standalone, "public");
const destStaticDir = path.join(standalone, ".next", "static");
const srcPublic = path.join(root, "public");
const srcStatic = path.join(root, ".next", "static");

rmrf(destPublic);
rmrf(destStaticDir);
fs.mkdirSync(path.dirname(destStaticDir), { recursive: true });

fs.cpSync(srcPublic, destPublic, { recursive: true });
fs.cpSync(srcStatic, destStaticDir, { recursive: true });

console.log("[prepare-standalone] OK — public + .next/static copiate în standalone.");
