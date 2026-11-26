// Funniest Cat Voicemail Greeting — u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
// Program Node 22 TypeScript ini merakit satu sapaan voicemail seolah direkam
// kucing bernama Whiskers, lalu menuliskannya ke /output/entry.txt.
// Entry: satu baris, maksimal 120 karakter, sesuai gate kompetisi.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_LENGTH = 120;
const OUTPUT_PATH = "/output/entry.txt";

// Segmen 1: pembuka voicemail klasik — siapa yang menjawab telepon.
const partOne = "You've reached Whiskers.";

// Segmen 2: alasan kucing tidak bisa mengangkat telepon — perilaku khas kucing.
const partTwo = "I'm busy knocking things off the shelf.";

// Segmen 3: instruksi voicemail + punchline terakhir khas kucing.
// "Bring tuna" adalah punchline: kucing tidak peduli pada pesanmu,
// ia hanya peduli pada makanan — karakter kucing yang jelas dan lucu.
const partThree = "Leave a message after the beep. Bring tuna.";

// Menghitung panjang entry dalam karakter (bukan byte) karena gate
// kompetisi mengukur 1–120 karakter teks UTF-8.
function countCharacters(line: string): number {
  return [...line].length;
}

// Merakit ketiga segmen menjadi satu baris entry.
function buildEntry(): string {
  return [partOne, partTwo, partThree].join(" ");
}

// Memvalidasi satu baris entry: tidak kosong, satu baris, maks 120 karakter.
function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Entry tidak boleh kosong atau hanya spasi.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry harus satu baris.");
  }
  if (countCharacters(line) > MAX_LENGTH) {
    throw new Error(
      `Entry ${countCharacters(line)} karakter, melebihi batas ${MAX_LENGTH} karakter.`,
    );
  }
}

// Menulis entry yang sudah divalidasi ke /output/entry.txt.
function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

const entry = buildEntry();
validateLine(entry);
writeEntry(entry);
console.log(`Entry ditulis ke ${OUTPUT_PATH} (${entry.length} karakter).`);
