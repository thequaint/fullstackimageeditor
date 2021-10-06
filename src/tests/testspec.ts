
import supertest from 'supertest';

import app from '..';

import sharp1 from '../sharp1';

import fs from 'fs';

import path from 'path';
import { fileExist } from '../fileexit';


describe('Test endpoint responses', () => {

  


  it('gets the api endpoint', async (done) => {
    
    const request = supertest(app);

    const response = await request.get('/images/sant.jpg/900/900');
    
    expect(response.status).toBe(200);

    done()

  });


  it('get function to genrate image chaeck',async ()  =>{
    
   
    
      
      sharp1('ice.jpg');
      
      
     
      const b= path.join(__dirname, '../images/sant.jpg');
      
      const c= fileExist(b);
      console.log(c);
      expect(c).toBe(true);
    
      
      
        
    })

  
  

  
  

  
});




