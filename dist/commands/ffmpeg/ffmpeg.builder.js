"use strict";
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
        res.push(this.inputPath + outputPath);
        return res.join(' ');
    }
}
const service = new FfmpegBuilder();
console.log(service.input('/').resolution(1920, 1080).output('res.mp4'));
