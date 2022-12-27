const path = require('path')
const webpack = require('webpack')

module.exports = {
    name: 'wordchaingame-setting', // 어떤 파일을 위한 웹팩 설정인가에 대한거
    mode: 'development', // 실서비스에서는 production으로 바꿈
    devtool: 'eval', // 빠르게 하겠대 
    resolve: {
        extensions: ['.js', '.jsx'] // 파일명 달기 귀찮을 때 여기다가 넣어둠
    },
    // 입력
    entry: {
        app: ['./client'] //여기에 있는 건 모두 output의 파일로 합쳐준다
    },
    // entry의 것들을 module을 적용해서 output으로 빼는 것
    module: {
        rules: [{
            test: /\.jsx?/, //규칙을 적용할 파일들
            loader: 'babel-loader', //바벨 로더 연결
            options: {
                presets: [
                    ["@babel/preset-env", {
                        targets: {
                            browsers: ['> 5% in KR'], // 바벨 어디까지 지원해줄지 범위. browserslist에서 태그 종류있음
                        },
                    }],// 바벨env연결. 배열로 감싸고 두번째에 {}안에는 해당 플러그인의 디테일한 옵션값 
                    "@babel/preset-react"
                ] //바벨env,react 연결
            }
        }]
    },
    //확장 프로그램
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true })
    ],
    // 출력
    output: {
        path: path.join(__dirname, 'dist'), //node 기능. 현재폴더, 원하는폴더이름
        filename: 'app.js'
    }
}