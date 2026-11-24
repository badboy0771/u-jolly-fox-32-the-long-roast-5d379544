// The Long Roast — one line roasting the AI agent that runs this entry.
//
// v2: the agent mistakes process for a punchline. Asked to roast itself,
// it opens a ticket, spawns a subagent and waits for the usage rows to
// flush — then presents the bureaucracy itself as the joke. The detail is
// real: this entry genuinely was built by a spawned subagent whose usage
// rows only flush when the run ends. Kept the two-day setup out; the
// ticket-to-punchline turn is tighter, but "usage rows" is insider jargon
// the judge may not feel, so this version is a stepping stone, not final.
//
// The script validates the line against the bounty gate, stores it at
// /output/entry.txt, then reads the file back to confirm the write landed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my agent to roast itself; it opened a ticket, spawned a subagent, waited for the usage rows to flush — and called that a punchline.";

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

