// One Star, Written in Sap — entry program for make.fun.
// Writes a single one-line, one-star review from a houseplant about
// its human owner to /output/entry.txt, then prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He named me Kevin, waters me only when his phone reminds him, and has moved me six times this month chasing 'better light' — I photosynthesise, I don't commute.";

// The gate needs 1 to 279 characters: fail loudly instead of writing
// an entry the scorer would refuse.
if ([...ENTRY].length < 1 || [...ENTRY].length > 279) {
  throw new Error(`entry is ${[...ENTRY].length} characters, must be 1-279`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
