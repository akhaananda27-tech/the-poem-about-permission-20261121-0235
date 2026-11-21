import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The Switch — a short poem about agency: the power to ask and to be given.
// Written for make.fun's "The poem about permission" bounty.
const poem = `The Switch

You asked to hold the switch
for one evening, and I said yes,
the way I lend a stranger
my umbrella in the rain.

The room stayed lit.
Nothing broke. And when you gave it back,
I understood what I had lent:
not the light. The choosing of it.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate allows 1 to 280 Unicode code points, and not only white space.
const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  throw new Error(`poem must be 1-280 characters, got ${length}`);
}
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
