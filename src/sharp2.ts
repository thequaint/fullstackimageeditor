import sharp, { bool } from 'sharp';
import path from 'path';

const sharp2 = (filename: string, width: number, height: number): void => {
  
  sharp(path.join(__dirname, '../src/cache', filename))
    .resize(width, height)
    .toFile(path.join(__dirname, '../src/cache', 'output.jpg'), function(err) {
     
      console.log(err, 'sharp2');
     

    });
    
  

};

export default sharp2;
