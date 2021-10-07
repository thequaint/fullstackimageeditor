"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memory_cache_1 = __importDefault(require("memory-cache"));
const sharp2_1 = __importDefault(require("./sharp2"));
const path_1 = __importDefault(require("path"));
const sharp1_1 = __importDefault(require("./sharp1"));
const fs_1 = __importDefault(require("fs"));
const imageroute = express_1.default.Router();
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
    if (memory_cache_1.default.get(filename)) {
        (0, sharp2_1.default)(filename, width, height);
        res.setTimeout(5000, () => {
            console.log('timeout in progress in cache');
            res.sendFile(path_1.default.join(__dirname, '../src/cache', 'output.jpg'));
        });
    }
    else {
        fs_1.default.access(path_1.default.join(__dirname, '../images', filename), err => {
            if (err) {
                res.send('File Not exist');
                return;
            }
        });
        console.log('0');
        (0, sharp1_1.default)(filename);
        setTimeout(function () {
            console.log('1');
            (0, sharp2_1.default)(filename, width, height);
            console.log('2');
        }, 5000);
        memory_cache_1.default.put(filename, path_1.default.join(__dirname, '../src/cache', filename));
        res.setTimeout(7000, () => {
            console.log('timeout in progress in original 2');
            res.sendFile(path_1.default.join(__dirname, '../src/cache', 'output.jpg'));
        });
    }
});
exports.default = imageroute;
