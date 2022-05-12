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
const process_1 = __importDefault(require("../util/process"));
const validate_1 = __importDefault(require("../util/validate"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const routes_1 = __importDefault(require("../routes"));
describe('Tests for validate function', () => {
    it('should default to 200x200 if no values given', () => {
        expect((0, validate_1.default)(null, null)).toEqual({ 'width': 200, 'height': 200 });
    });
    it('should parse strings to numbers', () => {
        expect((0, validate_1.default)(null, '450')).toEqual({ 'width': 200, 'height': 450 });
    });
});
describe('Tests for process function', () => {
    it('should create file if it doesnt exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const pathFind = path_1.default.resolve(__dirname, '../../src/assets');
        const inPath = path_1.default.normalize(`${pathFind}/full/fjord.jpg`);
        const outPath = path_1.default.normalize(`${pathFind}/thumb/fjord123x123_thumb.jpg`);
        if (fs_1.default.existsSync(outPath)) {
            fs_1.default.unlinkSync(outPath);
        }
        yield (0, process_1.default)(123, 123, inPath, outPath);
        expect(fs_1.default.existsSync(outPath)).toBeTruthy();
    }));
});
describe('Test for api endpoint', () => {
    it('should return 200 status', () => {
        routes_1.default.get('/api/images?file=fjord&width=323&height=222', (req, res) => {
            expect(res.status).toEqual(200);
        });
    });
    it('should return 404 error status', () => {
        routes_1.default.get('/api/images?file=nothere&width=323&height=222', (req, res) => {
            expect(res.status).toEqual(404);
        });
    });
});
