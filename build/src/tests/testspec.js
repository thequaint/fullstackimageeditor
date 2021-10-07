"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const sharp1_1 = __importDefault(require("../sharp1"));
const path_1 = __importDefault(require("path"));
const fileexit_1 = require("../fileexit");
describe('Test endpoint responses', () => {
    it('gets the api endpoint', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(__1.default);
        const response = yield request.get('/images/sant.jpg/900/900');
        expect(response.status).toBe(200);
        done();
    }));
    it('get function to genrate image chaeck', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, sharp1_1.default)('ice.jpg');
        const b = path_1.default.join(__dirname, '../images/sant.jpg');
        const c = (0, fileexit_1.fileExist)(b);
        console.log(c);
        expect(c).toBe(true);
    }));
});
