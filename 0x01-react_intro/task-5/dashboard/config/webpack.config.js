const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                },
            },
            {
                loader: 'image-webpack-loader',
                options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65,
                },
                optipng: {
                    enabled: true,
                },
                pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4,
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 75,
                },
                },
            },
            ],
        },
        {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader',
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../dist/index.html'),
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
    },
    mode: 'development',
};
