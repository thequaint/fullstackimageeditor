"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var sharp2 = function (filename, width, height) {
    (0, sharp_1.default)(path_1.default.join(__dirname, "../", filename))
        .resize(width, height)
        .toFile("output.jpg", function (err) {
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
    });
};
exports.default = sharp2;
