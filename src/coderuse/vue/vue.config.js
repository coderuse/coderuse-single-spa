// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.plugins.delete('hmr');
    },
    devServer: {
        hot: false,
        liveReload: false
    }
}