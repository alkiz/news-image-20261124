// News image entry for make.fun news-image-20261124 (Node 22, standard library only).
// The entry's image is entry.png beside this file; the program copies it to
// /output/entry.png. The image sums up the world news of Tuesday 24 November 2026:
// Israeli strikes kill Hamas security chief Naeem Abu Nahel in Gaza, a Russian
// strike hits flats in Zaporizhzhia, Iran claims three tankers hit mines in the
// Strait of Hormuz, NATO vows to defend space, Malaysia sends 6,800 Myanmar
// nationals back, and US states sue SpaceX over Grok images.
// The copy is deterministic: the same bytes come out on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
