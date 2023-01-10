"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegBuilder = void 0;
class FfmpegBuilder {
    constructor() {
        this.options = new Map();
        this.options.set('-c:v', 'libx264');
    }
    input(path) {
        this.inputPath = path;
        return this;
    }
    resolution(width, height) {
        this.options.set('-s', `${width}x${height}`);
        return this;
    }
    output(outputPath) {
        if (!this.inputPath)
            throw new Error('Не задан параметр input');
        const res = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            res.push(key);
            res.push(value);
        });
        res.push(outputPath);
        return res;
    }
}
exports.FfmpegBuilder = FfmpegBuilder;
