module.exports={
    plugins:{
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth:375,
            viewportHeight:667,
            uniPrecision:5,
            viewportUnit:'vw',
            // selectorBlackList:['ignore','tab-bar','tab-bar-item'],
            minPixelValueL:1,         
            mediaQuety:false
        }
    }
}