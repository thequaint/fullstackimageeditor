import sharp from 'sharp';
import path from 'path';

const sharp2 = async (
  filename: string,
  width: number,
  height: number
): Promise<unknown> => {
  return new Promise(resolve => {
    return sharp(path.join(__dirname, '../src/cache', filename))
      .resize(width, height)
      .toFile(path.join(__dirname, '../src/cache', 'output.jpg'), function(
        err
      ) {
        if (err != null) {
          console.log(err);
          resolve(false);
        }
        return resolve(true);
      });
  });
};

export default sharp2;
