"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (width, height) => {
    try {
        if (height == null) {
            height = 200;
        }
        else {
            height = parseInt(height);
        }
        if (width == null) {
            width = 200;
        }
        else {
            width = parseInt(width);
        }
    }
    catch (_a) {
        throw Error;
    }
    return { width, height };
};
exports.default = validate;
