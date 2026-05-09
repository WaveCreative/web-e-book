import path from 'path';
import { fileURLToPath } from 'url';
import SVGR from '@svgr/webpack';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Webpack Configuration
export default {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        // Transpile JavaScript files using Babel
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // Handle SVG files with multiple loaders
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
          },
          {
            loader: 'svg-react-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    name: 'removeViewBox',
                  },
                ],
              },
            },
          },
          {
            loader: SVGR,
            options: {
              svgo: {
                plugins: [
                  {
                    name: 'removeViewBox',
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};