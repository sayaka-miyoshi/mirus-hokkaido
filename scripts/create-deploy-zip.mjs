/**
 * Cross-platform ZIP creator for Netlify (always uses forward slashes).
 * Usage: node scripts/create-deploy-zip.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const archiver = require("archiver");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const deployDir = path.join(root, "netlify-deploy");
const zipPath = path.join(root, "MIRUS-netlify-deploy.zip");

if (!fs.existsSync(deployDir)) {
  console.error("netlify-deploy/ not found. Run create-netlify-deploy.ps1 first.");
  process.exit(1);
}

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const output = fs.createWriteStream(zipPath);
const archive = archiver("zip", { zlib: { level: 9 } });

archive.on("error", (err) => {
  throw err;
});

await new Promise((resolve, reject) => {
  output.on("close", resolve);
  output.on("error", reject);
  archive.pipe(output);
  archive.directory(deployDir, false);
  archive.finalize();
});

const buf = fs.readFileSync(zipPath);
const text = buf.toString("binary");

if (text.includes("css\\style.css")) {
  console.error("Validation failed: backslash path in ZIP");
  process.exit(1);
}
if (!text.includes("css/style.css")) {
  console.error("Validation failed: css/style.css not found in ZIP");
  process.exit(1);
}

console.log(`ZIP created: ${zipPath} (${archive.pointer()} bytes)`);
console.log("Validated: forward-slash paths only");
