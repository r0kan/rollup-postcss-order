
// [libs]
const fs = require('fs');

// [plugins]
const postcssPlugin = require('rollup-plugin-postcss');

module.exports = {
    input: './src/index.js',
    output: {
        dir: 'dist',
        name: 'bundle',
        entryFileNames: '[name].es.js',
        format: 'es',
        exports: 'named',
    },
    plugins: [
        postcssPlugin({
            extract: true,
            plugins: [],
        })
    ],
};

