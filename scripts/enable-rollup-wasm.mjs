import { cp, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const wasmPackageDist = resolve(projectRoot, 'node_modules', '@rollup', 'wasm-node', 'dist');

const targetRollupDists = [
  resolve(projectRoot, 'node_modules', 'vite', 'node_modules', 'rollup', 'dist'),
  resolve(projectRoot, 'node_modules', '@angular', 'build', 'node_modules', 'vite', 'node_modules', 'rollup', 'dist'),
];

async function patchRollupDist(targetDist) {
  if (!existsSync(targetDist) || !existsSync(wasmPackageDist)) {
    return;
  }

  const sourceNativeJs = resolve(wasmPackageDist, 'native.js');
  const targetNativeJs = resolve(targetDist, 'native.js');
  const sourceWasmDir = resolve(wasmPackageDist, 'wasm-node');
  const targetWasmDir = resolve(targetDist, 'wasm-node');

  if (!existsSync(targetNativeJs)) {
    return;
  }

  const currentContent = await readFile(targetNativeJs, 'utf8');

  if (!currentContent.includes('bindings_wasm.js')) {
    const wasmContent = await readFile(sourceNativeJs, 'utf8');
    await writeFile(targetNativeJs, wasmContent, 'utf8');
  }

  await cp(sourceWasmDir, targetWasmDir, { recursive: true, force: true });
  console.log(`Enabled Rollup WASM fallback in ${dirname(targetNativeJs)}`);
}

for (const targetDist of targetRollupDists) {
  await patchRollupDist(targetDist);
}