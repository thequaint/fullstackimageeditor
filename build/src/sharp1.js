"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const sharp1 = (filename) => {
    (0, sharp_1.default)(path_1.default.join(__dirname, '../images', filename))
        .toFile(path_1.default.join(__dirname, '../src/cache', filename), (err) => {
        if (err) {
            console.log(err, "sharp1 inside i am");
        }
    });
};
exports.default = sharp1;
