"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExist1 = void 0;
const fs_1 = __importDefault(require("fs"));
function fileExist1(path) {
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            try {
                fs_1.default.accessSync(path);
                resolve('done1');
            }
            catch (e) {
                console.log(e);
            }
        }, 4000);
    });
    return promise;
}
exports.fileExist1 = fileExist1;
