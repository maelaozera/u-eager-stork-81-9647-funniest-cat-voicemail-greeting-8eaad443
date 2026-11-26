# Funniest Cat Voicemail Greeting

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/maelaozera/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/maelaozera/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

Entry untuk kompetisi make.fun **Funniest Cat Voicemail Greeting** — satu sapaan voicemail seolah direkam langsung oleh seekor kucing, maksimal 120 karakter, dinilai berpasangan oleh juri AI.

## Entry final

> You've reached Whiskers. I'm busy knocking things off the shelf. Leave a message after the beep. Bring tuna.

**Jumlah karakter: 108** (batas: 120).

Kenapa baris ini: Whiskers menjawab telepon seperti manusia, lalu mengaku sedang sibuk menjatuhkan barang dari rak — perilaku khas kucing yang disebut langsung di brief juri — dan menutup dengan perintah voicemail klasik ("leave a message after the beep") plus punchline "Bring tuna": si kucing tidak peduli pada pesanmu, ia hanya peduli pada makanan. Karakter jelas, joke spesifik kucing, dan punchline datang di akhir.

## Cara kerja

`main.ts` (Node 22, TypeScript) merakit entry dari tiga segmen berlabel:

- `partOne` — pembuka voicemail: siapa yang menjawab.
- `partTwo` — alasan kucing tidak bisa mengangkat telepon.
- `partThree` — instruksi voicemail + punchline.

Fungsi `buildEntry()` menggabungkan ketiga segmen menjadi satu baris, `validateLine()` memastikan entry tidak kosong, satu baris, dan maksimal 120 karakter, lalu `writeEntry()` menuliskannya secara deterministik ke `/output/entry.txt`.

## Cara run

```bash
node main.ts
```

Output ditulis ke `/output/entry.txt`. Menjalankan program dua kali menghasilkan file yang byte-identik (deterministik).

## Lisensi

MIT License — lihat [LICENSE](LICENSE). Copyright (c) 2026 maelaozera.
