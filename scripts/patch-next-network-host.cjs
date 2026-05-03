/**
 * Pe unele Mac-uri, Node `os.networkInterfaces()` aruncă (uv_interface_addresses).
 * Next.js apelează asta la pornirea dev serverului → crash. Patch idempotent după `npm install`.
 */
const fs = require("fs");
const path = require("path");

const target = path.join(
  __dirname,
  "..",
  "node_modules",
  "next",
  "dist",
  "lib",
  "get-network-host.js",
);

if (!fs.existsSync(target)) {
  console.warn("[patch-next-network-host] next nu e instalat încă. Sari peste.");
  process.exit(0);
}

let s = fs.readFileSync(target, "utf8");

if (s.includes("NEXTERAWEB_NETWORK_HOST_SAFE")) {
  process.exit(0);
}

const oldBlock =
  "function getNetworkHosts(family) {\n    const interfaces = _os.default.networkInterfaces();\n    const hosts = [];";

const newBlock = `function getNetworkHosts(family) {
    // NEXTERAWEB_NETWORK_HOST_SAFE
    let interfaces;
    try {
        interfaces = _os.default.networkInterfaces();
    } catch {
        return family === "IPv4" ? [
            "127.0.0.1"
        ] : [];
    }
    if (!interfaces) {
        return family === "IPv4" ? [
            "127.0.0.1"
        ] : [];
    }
    const hosts = [];`;

if (!s.includes(oldBlock)) {
  console.warn(
    "[patch-next-network-host] Fișierul Next.js diferă de așteptat (deja patch-at sau versiune nouă). Sari peste.",
  );
  process.exit(0);
}

s = s.replace(oldBlock, newBlock);

const beforeReturn =
  "        });\n    });\n    return hosts;\n}\nfunction getNetworkHost(family)";
const afterReturn =
  "        });\n    });\n    if (!hosts.length && family === \"IPv4\") {\n        hosts.push(\"127.0.0.1\");\n    }\n    return hosts;\n}\nfunction getNetworkHost(family)";

if (s.includes(beforeReturn) && !s.includes("if (!hosts.length && family === \"IPv4\")")) {
  s = s.replace(beforeReturn, afterReturn);
}

fs.writeFileSync(target, s);
console.log("[patch-next-network-host] OK — Next.js poate porni pe Mac-ul tău.");
