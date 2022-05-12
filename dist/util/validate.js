"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (width, height) => {
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
    return { width, height };
};
exports.default = validate;
