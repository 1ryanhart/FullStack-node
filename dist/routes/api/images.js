"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images = express_1.default.Router();
images.get('/', (req, res) => {
    let file = req.query.file;
    let height = req.query.height;
    let width = req.query.width;
    res.send(`api link working, with the following params:\n\nfile:${file}\nheight:${height}\nwidth:${width} `);
});
exports.default = images;
