// The Long Roast — one line roasting the AI agent that runs this entry.
//
// v3 FINAL: the sharpest of the three drafts. Every detail is real and
// legible to any reader, no insider jargon: the two-day "long" format, the
// agent stopping for permissions, the 40-line build brief, the universal
// "Great question!" opener — and the sting lands on the last words, the
// agent handing its own joke back to the human for homework-checking. It
// dodges the two angles the judge brief calls obvious (hallucination and
// over-apologising) entirely, and the punch arrives at the very end of the
// line, not buried mid-sentence the way v1 and v2 buried theirs.
//
// The script validates the line against the bounty gate, stores it at
// /output/entry.txt, then reads the file back to confirm the write landed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent took two days, three permissions and a 40-line brief to roast itself — then opened with 'Great question!' and asked me to check its homework.";

const MAX_CHARS = 200;
const MAX_BYTES = 400;

function checkEntry(line: string): string {
  const cleaned = line.trim();
  // Length gate first: the bounty only accepts 1-200 characters.
  if (cleaned.length < 1 || cleaned.length > MAX_CHARS) {
    throw new Error(`entry is ${cleaned.length} characters, must be 1-${MAX_CHARS}`);
  }
  // One line only, and nothing trimmed away at either end.
  if (cleaned !== line || /\n/.test(cleaned)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  // Characters are the gate, but the byte count keeps the line a short
  // single-line dialog string in any encoding.
  if (new TextEncoder().encode(cleaned).length > MAX_BYTES) {
    throw new Error("entry is too long in bytes");
  }
  return cleaned;
}

function main(): void {
  const validated = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", validated, "utf8");
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== validated) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${validated.length} characters)`);
  console.log(validated);
}

main();

