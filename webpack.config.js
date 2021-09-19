const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


const ruleForHTML = {
    test: /\.html$/i,
    use: ['html-loader']
}

const ruleForCSS = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
}

const ruleForSVG = {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
}

const rules = [ruleForCSS, ruleForSVG,ruleForHTML]
module.exports = (env, argv) => {

    const {mode} = argv;
    const isProduction = mode === 'production';
    return{
        // entry: '.src/index.js',
        output: {
            filename: isProduction ? '[name].[contenthash].js': 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {rules},
        plugins: [
            new HtmlWebpackPlugin({filename: 'index.html',template: 'src/index.html'}),
            new HtmlWebpackPlugin({filename: 'contact.html',template: 'src/contact.html'})
        ]
    }
}