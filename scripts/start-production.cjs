/**
 * Pornește Next în producție pe portul din env PORT (Hostinger etc.), altfel 3000.
 * Evită `${PORT:-3000}` în package.json (pe Windows fără sh nu se expandează).
 */
const { spawn, spawnSync } = require("child_process");
const path = require("path");

const root = path.join(__dirname, "..");
const patch = path.join(__dirname, "patch-next-network-host.cjs");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");

const r = spawnSync(process.execPath, [patch], { stdio: "inherit", cwd: root });
if (r.status !== 0) process.exit(r.status ?? 1);

const port = process.env.PORT || "3000";
const child = spawn(
  process.execPath,
  [nextBin, "start", "-H", "0.0.0.0", "-p", port],
  { stdio: "inherit", cwd: root, env: process.env },
);

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
