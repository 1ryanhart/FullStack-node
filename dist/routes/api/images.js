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
const express_1 = __importDefault(require("express"));
const process_1 = __importDefault(require("../../util/process"));
const validate_1 = __importDefault(require("../../util/validate"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const images = express_1.default.Router();
const pathFind = path_1.default.resolve(__dirname, '../../assets');
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.query.file;
    const height = req.query.height;
    const width = req.query.width;
    try {
        const inPath = path_1.default.normalize(`${pathFind}/full/${file}.jpg`);
        const validated = (0, validate_1.default)(width, height);
        if (!fs_1.default.existsSync(`${pathFind}/thumb/`)) {
            fs_1.default.mkdirSync(`${pathFind}/thumb/`);
        }
        const outPath = path_1.default.normalize(`${pathFind}/thumb/${file}${validated.width}x${validated.height}_thumb.jpg`);
        if (!fs_1.default.existsSync(inPath)) {
            res.status(404).send(`File not found at directory ${inPath}`);
        }
        if (!fs_1.default.existsSync(outPath)) {
            try {
                yield (0, process_1.default)(validated.width, validated.height, inPath, outPath);
            }
            catch (_a) {
                res.status(400).send('error processing immage.');
            }
        }
        res.status(200).sendFile(`${outPath}`);
    }
    catch (_b) {
        res.status(400).send('error');
    }
}));
exports.default = images;
