// Extrae la zona fotográfica de los banners antiguos (1024x350) que traían texto incrustado.
// Uso: npm run crop  — es idempotente; solo se necesita una vez o al recibir banners nuevos.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "originales"; // banners originales del sitio WordPress (no se versionan)
const OUT = "src/assets/img/servicios";
const crops = {
  alineacion: [620, 320],
  balanceo: [630, 310],
  analisis: [88, 274],
  termografia: [88, 310, "termo"],
  resonancia: [88, 262, "prueba"],
  ventiladores: [770, 254],
  rotores: [775, 249],
};

await mkdir(OUT, { recursive: true });
for (const [name, [left, width, file = name]] of Object.entries(crops)) {
  await sharp(`${SRC}/${file}.jpg`)
    .extract({ left, top: 4, width, height: 342 })
    .jpeg({ quality: 90 })
    .toFile(`${OUT}/${name}.jpg`);
  console.log("ok", name);
}
