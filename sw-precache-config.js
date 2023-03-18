module.exports = {
    staticFileGlobs: [
        './',
        './images/**.*',
        './index.js',
        './index.css',
        './index.html',
        '.font/*.ttf'
    ],
    runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'fastest'
    }],
    swFile: 'service-worker.js'
};