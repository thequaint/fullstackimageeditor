import express from 'express';
import cache from 'memory-cache';
import sharp2 from './sharp2';
import path from 'path';
import sharp1 from './sharp1';
import fs from 'fs';

const imageroute = express.Router();

imageroute.get('/:filename/:width/:height', (req, res) => {
  const filename = req.params.filename;
  const width = +req.params.width;
  const height = +req.params.height;
  console.log(width, height);

  if (isNaN(height) || height < 0) {
    res.send('Only provide positive number for height');
    return;
  }
  if (isNaN(width) || width < 0) {
    res.send('Only provide positive number for width');
    return;
  }

  if (cache.get(filename)) {
    sharp2(filename, width, height);

    res.setTimeout(5000, () => {
      console.log('timeout in progress in cache');

      res.sendFile(path.join(__dirname, '../src/cache', 'output.jpg'));
    });
  } else {
    fs.access(path.join(__dirname, '../images', filename), err => {
      if (err) {

        res.send('File Not exist,Enter correct file name');
        return;
      }
    });
    console.log('0');
    sharp1(filename);
    setTimeout(function() {
      console.log('1');
      sharp2(filename, width, height);
      console.log('2');
    }, 5000);

    cache.put(filename, path.join(__dirname, '../src/cache', filename));
    res.setTimeout(7000, () => {
      console.log('timeout in progress in original 2');
      res.sendFile(path.join(__dirname, '../src/cache', 'output.jpg'));
    });
  }
});

export default imageroute;
