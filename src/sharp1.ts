import sharp from 'sharp';
import path from 'path';

const sharp1 = async (filename: string): Promise<unknown> => {
  return new Promise(resolve => {
    return sharp(path.join(__dirname, '../images', filename)).toFile(
      path.join(__dirname, '../src/cache', filename),
      err => {
        if (err != null) {
          console.log(err);
          resolve(false);
        }
        return resolve(true);
      }
    );
  });
};

export default sharp1;
