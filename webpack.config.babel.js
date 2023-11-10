import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    return {
        mode: 'development',
        // devtool: 'source-map',
        target: 'node',
        entry: {
            main: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname),
            filename: 'index.js',
            // clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.[tj]sx?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
            ]
        },
    }; // function
};
