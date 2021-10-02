import sharp from 'sharp';
import path from 'path';

const sharp2 = (filename: string, width: number, height: number):void => {
  sharp(path.join(__dirname, '../', filename))
    .resize(width, height)
    .toFile('output.jpg', function(err) {
      console.log(err);
      // output.jpg is a 300 pixels wide and 200 pixels high image
      // containing a scaled and cropped version of input.jpg
    });
};

export default sharp2;
