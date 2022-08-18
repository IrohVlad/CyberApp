import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const __dirname = path.resolve();

export default {
    mode: 'development',
    entry: ["@babel/polyfill",'./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000
    },
    module: {
        
        // rules: [
        //     {
        //         test: /\.js|js$/,
        //         exclude: /node_modules/,
        //         use: {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: ['@babel/preset-env'],
        //             }
        //         }
        //     }
        // ],
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                  }
                }
              }
        ]
    }
}