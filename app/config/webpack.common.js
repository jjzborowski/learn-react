const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ '@svgr/webpack' ],
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     include: [ path.join(__dirname, 'src/images') ],
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 outputPath: 'images',
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ],
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader' }, // creates style nodes from JS strings
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]',
                            },
                        },
                    }, // translates CSS into CommonJS
                    { loader: 'sass-loader' }, // compiles Sass to CSS
                ],
            },
            {
                test: /\.(png|gif|jpg|cur)$/i,
                loader: 'url-loader',
                options: { limit: 8192 },
            },
            {
                test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff2',
                },
            },
            {
                test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                },
            },
            {
                test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    },
};
