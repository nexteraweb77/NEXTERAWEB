/**
 * Pornește Next în producție pe portul din env PORT (Hostinger etc.), altfel 3000.
 * Cu `output: "standalone"`, folosește `.next/standalone/server.js` (include corect static + public după prepare-standalone).
 */
const { spawn, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const patch = path.join(__dirname, "patch-next-network-host.cjs");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const standaloneDir = path.join(root, ".next", "standalone");
const standaloneServer = path.join(standaloneDir, "server.js");

const r = spawnSync(process.execPath, [patch], { stdio: "inherit", cwd: root });
if (r.status !== 0) process.exit(r.status ?? 1);

const port = process.env.PORT || "3000";
/**
 * Pe Linux, shell-ul setează adesea HOSTNAME=numele mașinii.
 * Next standalone citește HOSTNAME pentru bind; dacă rămâne acolo,
 * serverul nu ascultă pe toate interfețele → lipsă CSS/asset-uri prin proxy.
 * Forțăm ascultarea pe toate interfețele (necesar pentru Hostinger etc.).
 */
const env = {
  ...process.env,
  PORT: port,
  HOSTNAME: "0.0.0.0",
};

const useStandalone = fs.existsSync(standaloneServer);

const child = useStandalone
  ? spawn(process.execPath, [standaloneServer], {
      stdio: "inherit",
      cwd: standaloneDir,
      env,
    })
  : spawn(process.execPath, [nextBin, "start", "-H", "0.0.0.0", "-p", port], {
      stdio: "inherit",
      cwd: root,
      env,
    });

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
