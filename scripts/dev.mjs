import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Launch the workspace directly so Node is the only runtime required by the dev script.
const directory = fileURLToPath(new URL('../apps/web/', import.meta.url));
const entry = fileURLToPath(
  new URL('../apps/web/node_modules/next/dist/bin/next', import.meta.url),
);
const args = process.argv.slice(2).filter((value) => value !== '--strictPort');
const child = spawn(
  process.execPath,
  [entry, 'dev', ...args.map((value) => (value === '--host' ? '--hostname' : value))],
  {
    cwd: directory,
    stdio: 'inherit',
  },
);

child.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on('exit', (code) => {
  process.exitCode = code ?? 0;
});
process.on('SIGINT', () => child.kill('SIGINT'));
process.on('SIGTERM', () => child.kill('SIGTERM'));
