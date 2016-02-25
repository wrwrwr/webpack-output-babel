import path from 'path';
import webpack from 'webpack';

import OutputBabelPlugin from '../main';


describe("OutputBabelPlugin", () => {
    let fixtures = path.join(__dirname, 'fixtures');

    it("should run Babel transforms after bundling", done => {
        webpack({
            context: fixtures,
            entry: './input',
            output: {
                path: fixtures,
                filename: 'output.js'
            },
            plugins: [
                new OutputBabelPlugin({
                    plugins: [
                        'transform-minify-booleans',
                        'transform-strict-mode'
                    ]
                })
            ]
        }, (err, stats) => {
            (!err).should.be.true();
            stats.hasErrors().should.be.false();
            stats.hasWarnings().should.be.false();
            let code = stats.compilation.assets['output.js'].source();
            code.should.match(/^"use strict";/);  // Before the prologue.
            code.should.not.match(/true|false/);  // Also within the prologue.
            done();
        });
    });
});
