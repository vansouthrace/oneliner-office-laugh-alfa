// Entry for "Make the AI Judge Laugh" (u-alfasurya91-make-the-ai-judge-laugh-6ed40225).
// One office-life joke, under 200 characters: the raise that came back as a pizza party.
import * as fs from "node:fs";

const entry = "I asked for a raise and got a pizza party, which is the corporate way of saying your rent is now pepperoni.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Entry written to /output/entry.txt (${entry.length} chars, limit 200).`);
