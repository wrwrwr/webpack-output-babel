import {transform} from 'babel-core';
import {RawSource} from 'webpack-sources';


/**
 * Applies Babel transforms to output chunks.
 */
export default class OutputBabelPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        let options = this.options;
        compiler.plugin('compilation', compilation => {
            compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
                for (let chunk of chunks) {
                    for (let file of chunk.files) {
                        let source = compilation.assets[file].source();
                        let transformed = transform(source, options).code;
                        compilation.assets[file] = new RawSource(transformed);
                    }
                }
                callback();
            });
        });
    }
}
