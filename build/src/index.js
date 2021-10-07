"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageroutes_1 = __importDefault(require("./imageroutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/images', imageroutes_1.default);
var server = app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
