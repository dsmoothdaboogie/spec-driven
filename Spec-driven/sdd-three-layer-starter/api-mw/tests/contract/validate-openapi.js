import fs from 'node:fs';

const path = 'contracts/openapi.yaml'; // adjust to node_modules/@org/contracts/... if packaged
if (!fs.existsSync(path)) {
  console.warn('NOTE: contracts/openapi.yaml not found — configure contract distribution.');
  process.exit(0);
}
const content = fs.readFileSync(path, 'utf8');
if (!/openapi:\s*3/.test(content)) {
  console.error('OpenAPI must be 3.x');
  process.exit(1);
}
