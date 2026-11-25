// The 3 AM Excuse: a hardware wallet refuses to sign at 3 AM —
// its seed phrase is asleep, and it talks in its sleep.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "It's 3 AM. My seed phrase is asleep and it talks in its sleep — last night it said 'not this one.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
