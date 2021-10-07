import { rejects } from 'assert';
import fs from 'fs';
export function fileExist1(path: string) {

    var promise = new Promise(function(resolve, reject) {

        setTimeout(function() {

        try{

         fs.accessSync(path);

         resolve('done1')

         }

        catch(e){
         
            console.log(e);
           
        }

        },4000);

    });

    return promise;

}
