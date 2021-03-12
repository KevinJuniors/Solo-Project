const VueLoaderPlugin = require("vue-loader/lib/plugin");

// Node가 제공하는 모듈으로서 디렉토리 입력 시 확장자 생략 가능
const path = require("path");

// Node에 module를 추가
module.exports = {
    /*
        development = 개발 모드
        production = 배포(상용) 모드 
        test = 테스트 모드
    */
    mode: "development",

    // eval = 개발, hidden-source-map = 배포
    devtool: "eval",

    resolve: {
        // extensions를 통해 .js, .vue 확장자를 가진 파일에 대한 처리를 담당
        extensions: [".js", ".vue"]
    },

    // 다 수의 JavaScript 파일을 패키지와 하여 하나의 JavaScript 파일로 통합
    entry: {
        // 해당 파일이 존재하는 현재 경로 : __dirname 을 통해 접근 가능
        app: path.join(__dirname, "index.js")
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    // "index.js"에 입력된 내용들이 "dist 폴더 내의 app.js 내에 포함되어 출력"
    output: {
        // js 파일 명을 "app.js"로 명시 ('[name].js' 로 대체 가능)
        filename: "app.js",
        // "app.js" 파일을 저장할 디렉토리 경로를 지정
        path: path.join(__dirname, "build")
    }
};