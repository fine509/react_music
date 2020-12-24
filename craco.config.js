const path = require('path')
const resolve = dir=>path.resolve(__dirname,dir)
module.exports={
    webpack:{
        alias:{
            "@":resolve("src"),//@就是src
            "components":resolve("src/components"),
            "assets":resolve("src/assets"),
            "common":resolve("src/common"),
            "router":resolve("src/router"),
            "services":resolve("src/services"),
            "store":resolve("src/store"),
            "utils":resolve("src/utils"),
            "views":resolve("src/views")
        }
    }
}