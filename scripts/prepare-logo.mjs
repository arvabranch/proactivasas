// Convierte el logo oficial (fondo blanco) en PNG transparente y recortado.
// Uso: node scripts/prepare-logo.mjs [entrada] — por defecto originales/logo-original.png
import sharp from "sharp";

const input = process.argv[2] ?? "originales/logo-original.png";
const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const out = Buffer.alloc(W * H * 4);

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 3;
    const o = (y * W + x) * 4;
    let [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    // Triángulo decorativo de la esquina superior izquierda (no es parte del logo)
    if (x / 100 + y / 64 < 1) [r, g, b] = [255, 255, 255];
    // "Color a alfa" contra blanco: conserva los bordes suavizados sin halo blanco
    const a = Math.max(255 - r, 255 - g, 255 - b) / 255;
    if (a < 0.02) continue;
    out[o] = Math.round((r - 255 * (1 - a)) / a);
    out[o + 1] = Math.round((g - 255 * (1 - a)) / a);
    out[o + 2] = Math.round((b - 255 * (1 - a)) / a);
    out[o + 3] = Math.round(a * 255);
  }
}

await sharp(out, { raw: { width: W, height: H, channels: 4 } })
  .trim()
  .png({ compressionLevel: 9 })
  .toFile("src/assets/brand/logo-proactiva.png");
const meta = await sharp("src/assets/brand/logo-proactiva.png").metadata();
console.log("logo listo:", meta.width, "x", meta.height);
