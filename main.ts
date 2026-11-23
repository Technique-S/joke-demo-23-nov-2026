import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const joke = "The agent fixed the demo crash by commenting out the feature we were demoing";

writeFileSync(outputFile, joke, 'utf-8');
console.log(`Wrote joke to ${outputFile}`);