# TreeShaking

Tree Shaking: 用来去掉没有引用的内容，只支持EsModule的引入方式

配置方式：mode为development时是默认不带tree shaking的
通过添加optimization:{usedExports: true}的配置项来加上，
同时需要在package.json里添加"sideEffects":false的配置项，
sideEffects的值还可以为数组，表示不需要被tree shaking掉的内容，
比如css，并没有导出任何内容，可能就会被tree shaking掉出现问题，这时可以设置为["*.css"]