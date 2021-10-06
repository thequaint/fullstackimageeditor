"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const sharp2 = (filename, width, height) => {
    (0, sharp_1.default)(path_1.default.join(__dirname, '../src/cache', filename))
        .resize(width, height)
        .toFile(path_1.default.join(__dirname, '../src/cache', 'output.jpg'), function (err) {
        console.log(err, 'sharp2');
    });
};
exports.default = sharp2;
