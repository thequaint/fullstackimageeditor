import fs from 'fs';
import path from 'path';

export function fileExist1(filename: string): Promise<unknown> {
  const promise = new Promise(function(resolve) {
    const path1 = path.join(__dirname, '../src/cache', filename);
    setTimeout(function() {
      try {
        fs.accessSync(path1);

        resolve('done1');
      } catch (e) {
        console.log(e);
      }
    }, 4000);
  });

  return promise;
}
