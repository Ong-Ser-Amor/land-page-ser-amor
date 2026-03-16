import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');

const imageJobs = [
  {
    input: 'public/carrossel/imagem1.png',
    output: 'public/carrossel/imagem1.webp',
    width: 960,
    quality: 76,
  },
  {
    input: 'public/carrossel/imagem2.png',
    output: 'public/carrossel/imagem2.webp',
    width: 960,
    quality: 74,
  },
  {
    input: 'public/carrossel/imagem3.png',
    output: 'public/carrossel/imagem3.webp',
    width: 960,
    quality: 74,
  },
  {
    input: 'public/carrossel/imagem4.jpeg',
    output: 'public/carrossel/imagem4.webp',
    width: 960,
    quality: 74,
  },
  {
    input: 'public/quem-somos/quem-somos.jpeg',
    output: 'public/quem-somos/quem-somos.webp',
    width: 720,
    quality: 74,
  },
];

for (const job of imageJobs) {
  const inputPath = resolve(rootDir, job.input);
  const outputPath = resolve(rootDir, job.output);

  await mkdir(dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(outputPath);

  console.log(`Generated ${job.output}`);
}