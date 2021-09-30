import sharp from "sharp";
import path  from "path";
const sharp1=(filename:string)=>{

    sharp(path.join(__dirname,"../images",filename))
          
          .toFile(filename, function(err) {
            // output.jpg is a 300 pixels wide and 200 pixels high image
            // containing a scaled and cropped version of input.jpg
          });
}

export default sharp1;