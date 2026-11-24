// One office joke, written to /output/entry.txt.
// Deterministic: a fixed string, no network, no randomness, no clock,
// no input of any kind. Node 22 runs this TypeScript as-is.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a concrete office scene (the office printer) with the payoff
// in the last few words — the machine "responds" to having no paper by
// printing forty pages about having no paper.
const joke =
  "The office printer ran out of paper and responded by printing a 40-page error report explaining, in great detail, that it was out of paper.";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
