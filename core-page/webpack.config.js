import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development', // or 'production'
    entry: './src/main.jsx',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Process JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/, // Handle font files
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]', // Output font files to /dist/fonts/
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css'], // Allows imports without file extensions
    }
};