"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var memory_cache_1 = __importDefault(require("memory-cache"));
var sharp2_1 = __importDefault(require("./sharp2"));
var path_1 = __importDefault(require("path"));
var sharp1_1 = __importDefault(require("./sharp1"));
var imageroute = express_1.default.Router();
imageroute.get("/:filename/:width/:height", function (req, res) {
    var filename = req.params.filename;
    var width = +req.params.width;
    var height = +req.params.height;
    if (memory_cache_1.default.get(filename)) {
        (0, sharp2_1.default)(filename, width, height);
        res.setTimeout(5000, function () {
            console.log("timeout in progress in cache");
            res.sendFile(path_1.default.join(__dirname, "../", "output.jpg"));
        });
    }
    else {
        (0, sharp1_1.default)(filename);
        setTimeout(function () { (0, sharp2_1.default)(filename, width, height); }, 3000);
        memory_cache_1.default.put(filename, path_1.default.join(__dirname, "../", filename));
        res.setTimeout(7000, function () {
            console.log("timeout in progress in original 2");
            res.sendFile(path_1.default.join(__dirname, "../", "output.jpg"));
        });
    }
});
exports.default = imageroute;
