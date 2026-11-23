import { writeFileSync, mkdirSync } from 'fs';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const joke = 'The agent found the bug: the feature we were demoing. Then it fixed the bug.';

writeFileSync(outputFile, joke, 'utf-8');
console.log(`Entry written to ${outputFile}`);