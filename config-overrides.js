const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
    }),
    addLessLoader(),
    addPostcssPlugins([
        require('postcss-px-to-viewport')({
            viewportWidth: 750,
            propList: ['*'],
            selectorBlackList: ['weui', 'van'] // 要忽略的选择器
        }),
        require('autoprefixer')({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']
        })
    ]),
);
