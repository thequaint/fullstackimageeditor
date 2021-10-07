import fs from 'fs';
export function fileExist1(path: string): Promise<unknown> {
  const promise = new Promise(function(resolve) {
    setTimeout(function() {
      try {
        fs.accessSync(path);

        resolve('done1');
      } catch (e) {
        console.log(e);
      }
    }, 4000);
  });

  return promise;
}
