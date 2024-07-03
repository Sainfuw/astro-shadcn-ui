import { readFile } from "node:fs/promises";

export async function jsxToTxt(path: string) {
  const regex = /return\s*\(([\s\S]*?)(?=\s*return|$)/g;
  const fileContent = await readFile(`src/pages/${path}/_${path}React.tsx`);
  const startText = "```html\r\t"
  const fileString = fileContent.toString()
  const matches = [];

  let match;
  while ((match = regex.exec(fileString)) !== null) {
    matches.push(match[1].trim());
  }

  return startText + matches[matches.length - 1].slice(0, -6).trim()
}