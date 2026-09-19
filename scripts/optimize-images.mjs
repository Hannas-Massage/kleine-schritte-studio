import { basename } from 'node:path';
import sharp from 'sharp';

const widths = [640, 960, 1280];
const files = [
  'public/assets/hero-massage-FZs6C1Mn.jpg',
  'public/assets/massage-hands-giX2iwHR.jpg',
  'public/assets/story-ambiance-C8V-VdEu.jpg',
];

for (const src of files) {
  const image = sharp(src);
  const { width } = await image.metadata();
  const stem = src.replace(/\.jpg$/i, '');
  console.log(`${basename(src)} source width=${width ?? '?'}`);

  for (const w of widths) {
    await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(`${stem}-${w}.webp`);
    await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 45 })
      .toFile(`${stem}-${w}.avif`);
  }
}
