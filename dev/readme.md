## webpack 실행환경 세팅

여기서부터는 CDN이 아닌 node와 npm을 이용하여 react를 설치해서 사용한다. 각 게임은 이제 gameComponent 안에 넣고 실행할 것이다. 

- webpack을 설치한다(여러 js들을 하나의 js로 합쳐주는 것)
- dev Server를 통한 핫 리로딩 설정(앱 처음부터 다시 시작하는게 아닌 변경부분만 리렌더링)

- 추가되는 파일
1. index.html
단 하나의 HTML 파일

2. client.jsx
만들어진 js 파일들을 html DOM에 붙이는 작업하는 곳.

3. wordChainGame.jsx
컴포넌트들 중 하나. 이런 애들이 여럿 만들어져서 client.jsx에 모여 실행된다

4. webpack.config.js
HTML 파일 내의 script는 하나만 존재하는데, 위의 작성된 모든 js 파일들을 하나로 만들어주는 곳이다.


