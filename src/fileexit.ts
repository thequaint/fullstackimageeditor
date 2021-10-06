import fs from 'fs';
export function fileExist(path: string): boolean {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}