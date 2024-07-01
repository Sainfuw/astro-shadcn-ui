import { readFile } from "node:fs/promises";

export async function jsxToTxt(path: string) {
  const fileContent = await readFile(`src/pages/${path}/_${path}React.tsx`);
  return "\t" + fileContent
    .toString()
    .match(/return\s*\(([\s\S]+)\)/)[1]
    .trim();
}