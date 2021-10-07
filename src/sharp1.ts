import sharp from 'sharp';
import path, { resolve } from 'path';

const sharp1 = async (filename: string): Promise<void> => {
  await sharp(path.join(__dirname, '../images', filename)).toFile(
    path.join(__dirname, '../src/cache', filename),
    err => {
      if (err) {
        console.log(err, 'sharp1 inside i am');
      } else {
        resolve('ok');
      }
    }
  );
};

export default sharp1;
