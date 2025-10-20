import { describe, it, expect } from 'vitest';
import fs from 'node:fs';

// Minimal smoke: ensure we have an OpenAPI contract present.
// In real CI, import from @org/contracts or a submodule path.

describe('openapi contract', () => {
  it('exists and looks like OpenAPI 3', () => {
    const path = 'contracts/openapi.yaml'; // adjust if using @org/contracts
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
    if (exists) {
      const spec = fs.readFileSync(path, 'utf8');
      expect(spec).toMatch(/openapi:\s*3/);
      expect(spec).toMatch(/paths:/);
      expect(spec).toMatch(/components:/);
    }
  });
});
