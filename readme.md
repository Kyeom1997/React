## 서론

이제 위코드 2주차가 끝나고, 본격적으로 리액트를 사용하게 되는 Foundation 주차가 시작되게 된다. 혼자서 프론트엔드가 되겠다는 마음을 먹고 공부를 해오면서, 결국 리액트에 들어서며 좌절했던 기억들이 아직도 남아있다. 좋다는 강의와 책들을 다 샀는데도, 리액트에 대한 이해 혹은 자바스크립트에 대한 지식이 부족하여 리액트의 벽을 넘지 못했었다. 이제는 결국 프론트엔드 개발자가 되기 위해 이 길을 들어섰으면, 결국 극복해야만 한다. 오늘부터 급하지 않게, 하지만 제대로 리액트를 공부하며 내 머릿속에 넣기 위해 블로깅을 하고자 한다.

> 해당 카테고리의 블로그 포스트들은 velopert님의 ['리액트를 다루는 기술'](https://thebook.io/080203/) 서적을 참고하여 작성했습니다.

---

# 1. 리액트 시작

## 왜 리액트인가?

그렇다면, 오늘날 대부분의 프론트엔드 개발자들은 왜 리액트를 선택했을까? 최근 몇 년간 전 세계 개발자들은 자바스크립트에 뜨겁게 열광했다. 자바스크립트는 한때 단순히 브라우저에서 간단한 연산을 하거나, 시각적인 효과를 주는데에 그쳤었지만, 현재는 웹 애플리케이션, 더 나아가 서버 사이드는 물론 모바일, 데스크톱 애플리케이션에도 활약중이다.

이제 자바스크립트만으로도 규모가 큰 애플리케이션을 만들 수 있는 시대가 왔지만, 이러한 애플리케이션을 순수하게 바닐라 자바스크립트만으로만 관리하려면 효율성과 같은 여러 측면들에서 부족한 점이 많다. 그렇기 때문에 개발자들은 자바스크립트로 수많은 프레임워크를 만들어 조금씩 다른 관점에서 이를 해결하고자 노력해 왔다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/3a5fdff8-6b8c-495f-b984-51d4673d2a3e/image.png)

이러한 프레임워크들은 주로 MVC(Model-View-Controller) 아키텍쳐, MVVM(Model-View-View Model) 아키텍쳐를 사용한다. MVC, MVVM, MVM 등과 같은 여러 구조가 지닌 공통점은 모델(Model)과 뷰(View)가 있다는 것이다.

**모델**은 **애플리케이션에서 사용하는 데이터를 관리하는 영역**이고, **뷰**는 **사용자에게 보이는 부분**이다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/1b03f46e-484c-4979-b0b5-91058579c482/image.png)
(이미지 출처 : https://hanamon.kr/mvc%EB%9E%80-mvc-design-pattern/)

프로그램이 사용자에게서 어떤 작업(ex: 버튼 클릭, 텍스트 입력)을 받으면 컨트롤러는 모델 데이터를 조회하거나 수정하고, 변경된 사항을 뷰에 반영한다. 여기서 뷰를 반영하는 과정에서 보통 뷰는 변형된다.

```js
{
  "title": "Hello",
  "contents": "Hello World",
  "author": "Kyeom",
  "likes": 1
}

<div id="post-1">
  <div class="title">Hello</div>
  <div class="contents">Hello World</div>
  <div class="author">Kyeom</div>
  <div class="likes">1</div>
</div>
```

여기서 likes의 값을 2로 업데이트한다면 애플리케이션에서 post-1 div의 likes 요소를 찾아 내부를 수정해야 한다. 이는 그렇게 어려운 작업이 아니지만, 애플리케이션 규모가 커질수록 더욱 복잡해지고 성능이 떨어질 우려가 있다.

그렇기 때문에 페이스북 개발팀은 데이터가 변할 때마다 어떻게 변화를 줄지 고민하는 것이 아닌, 그냥 기존 뷰를 날려 버리고 처음부터 새로 렌더링하는 방식을 고안해냈다. 이는 애플리케이션 구조를 매우 간단하게 만들고, 작성해야 할 코드양도 많이 줄일 수 있다. 하지만 DOM과 바닐라 자바스크립트로만 이를 구현하면 오히려 CPU 점유율이 증가하고, 메모리의 사용이 늘어나며, 렌더링을 할때마다 끊김 현상이 발생할 것이었다.

그렇기 때문에 페이스북 개발팀이 최대한 성능을 아끼고 편안한 사용자 경험을 제공하면서 구현하고자 개발한 것이 바로 **리액트(React)**이다.

### 리액트 이해

리액트는 Angular, Vue.js와 같은 MVC, MVW 프레임워크와 달리, 오직 **V(View)만 신경 쓰는 라이브러리이다.**

리액트에서는 특정 부분이 어떻게 생길지 정하는 선언체가 있는데, 이를 **컴포넌트(Component)**라고 한다. 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장하고 있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의한다.

#### 초기 렌더링

렌더링이란, 사용자 화면에 뷰를 보여 주는 것을 뜻한다. 어떤 UI 관련 프레임워크, 라이브러리를 사용하든지 간에 맨 처음 어떻게 보일지를 정하는 초기 렌더링이 필요한데, 리액트에서는 이를 다루는 render 함수가 있다.

```js
render() { ... }
```

이 render 함수는 컴포넌트가 어떻게 생겼는지 정의하는 역할을 한다. 이 함수는 html 형식의 문자열을 반환하지 않고, 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체를 반환한다. 컴포넌트 내부에는 또 다른 컴포넌트들이 들어갈 수 있는데, 이때 render 함수를 실행하면 그 내부에 있는 컴포넌트들도 재귀적으로 렌더링한다. 이렇게 최상위 컴포넌트의 렌더링 작업까지 끝나면 지니고 있는 정보들을 사용하여 HTML 마크업(markup)을 만들고, 이를 우리가 정하는 실제 페이지의 DOM 요소 안에 주입한다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/766ef109-efb6-4f9a-8529-6d9e7232c3a9/image.png)
(이미지 출처: https://ljtaek2.tistory.com/132)

#### 조화 과정

리액트에서 뷰를 업데이트할 때는 "**조화 과정(reconciliation)**을 거친다"라고 표현한다. 컴포넌트에서 데이터에 변화가 있을 때 우리가 보기에는 변화에 따라 뷰가 변형되는 것처럼 보이지만, 사실은 새로운 요소로 갈아 끼우기 때문이다.

이 작업 또한 render 함수가 맡아서 한다. 컴포넌트는 데이터를 업데이트했을 때 단순히 업데이트한 값을 수정하는 것이 아니라, 새로운 데이터를 가지고 render 함수를 다시 호출한다. 이때, 이전에 render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교한다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/3a1aac3c-9c7f-4fb3-9b56-b6d5c1f6d7c2/image.png)

자바스크립트로 두 가지 뷰를 최소한의 연산으로 비교한 후, 둘의 차이를 알아내어 최소한의 연산으로 DOM 트리를 업데이트 하는 것이다. 결국, 방식 자체는 루트 노드부터 시작하여 전체 컴포넌트를 처음부터 다시 렌더링하는 것 처럼 보이지만, 최적의 자원을 사용하여 이를 수행하는 것이 매번 뷰를 새로 렌더링해도 속도가 느리지 않은 이유다.

---

## 리액트의 특징

### Virtual DOM

리액트의 주요 특징 중 하나는 Virtual DOM을 사용하는 것이다. DOM은 Document Object Model의 약어로, 객체로 문서 구조를 표현하는 방법이다.

> **DOM은 과연 느릴까?** <br>
> DOM에게는 치명적인 문제점이 하나 있는데, 바로 동적 UI에 최적화되어 있지 않다는 것이다. HTML은 자체적으로는 정적이지만, 자바스크립트를 사용하여 동적으로 구동된다. 최근의 웹 애플리케이션은 그 규모가 몹시 크기 때문에 DOM에 직접 접근하여 변화를 주다 보면 성능 이슈가 조금씩 발생하기 시작한다. 일부 문서에서는 이를 두고 "자바스크립트 엔진은 매우 빠르지만, DOM은 느리다"라고 표현하는데, 이는 정확한 말은 아니다. <br>
> DOM 자체를 읽고 쓸 때의 성능은 자바스크립트 객체를 처리할 때의 성능과 비교하여 다르지 않다. 단, 웹 브라우저 단에서 DOM에 변화가 일어나면 웹 브라우저가 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트하는 과정에서 시간이 허비되는 것이다. 그렇기 때문에 리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행한다.

#### What is Virtual DOM?

Virtual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용한다. 이는 실제 DOM의 가벼운 사본과 비슷하다.

리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때는 다음 세 가지 절차를 밟는다.

1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링한다.

2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교한다.

3. 바뀐 부분만 실제 DOM에 적용한다.

> **오해** <br>
> Virtual DOM을 사용한다고 해서 사용하지 않을 때와 비교하여 무조건 빠른 것은 아니다. 리액트를 사용하지 않아도 코드 최적화를 열심히 하면 DOM 작업이 느려지는 문제를 개선할 수 있고, 또 작업이 매우 간단할 때는 오히려 리액트를 사용하지 않는 편이 더 나은 성능을 보이기도 한다. <br>
> 리액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리 간결성이다. UI를 업데이트하는 과정에서 생기는 복잡함을 모두 해소하고, 더욱 쉽게 업데이트에 접근할 수 있다.

### 기타 특징

리액트는 **프레임워크가 아니라 라이브러리이다.** 다른 웹 프레임워크가 Ajax, 데이터 모델링, 라우팅 등과 같은 기능을 내장하고 있는 반면, 리액트는 정말 뷰만 신경 쓰는 라이브러리이기 때문에 기타 기능은 직접 구현하여 사용해야 한다. 하지만 이와 같은 문제들은 다른 개발자들이 만든 라이브러리, 예를 들면 라우팅에는 리액트 라우터(react-router), Ajax 처리에는 axios나 fetch, 상태 관리에는 리덕스(redux)나 Mobx 등을 사용하여 해결할 수 있다.

또한 리액트는 다른 웹 프레임워크나 라이브러리와 혼용할 수 있다. 예를 들어 Backbone.js, AngularJS 등의 프레임워크와 함께 언제든지 사용할 수 있다.

## create-react-app으로 프로젝트 생성하기

create-react-app은 리액트 프로젝트를 생성할 때 필요한 웹팩, 바벨의 설치 및 설정 과정을 생략하고 바로 간편하게 프로젝트 작업 환경을 구축해 주는 도구이다. 터미널을 열고, 프로젝트를 만들고 싶은 디렉터리에서 다음 명령어를 실행하면 된다.

```
$ yarn create react-app hello-react
```

프로젝트 생성이 완료되었다면 리액트 개발 전용 서버를 구동해야 한다.

```
$ yarn start # 또는 npm start
```

그러면 브라우저에서 자동으로 리액트 페이지가 띄워지는데, 페이지가 자동으로 열리지 않는다면 링크(http://localhost:3000/)를 직접 입력하여 열면 된다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/54bd0200-aa27-42e1-bc57-a5f0cc22177a/image.png)

이러한 화면이 나타난다면 성공적으로 리액트 개발을 위한 준비를 마친 것이다!

---

# 2. JSX

## 코드 이해하기

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

리액트로 만든 프로젝트의 src/App.js 파일을 처음 열어본다면, 위와 같은 코드들이 이미 생성되어 있는 것을 확인할 수 있다. 그러면 이 코드들을 하나씩 이해해 보자.

```js
import React from "react";
```

이 코드는 리액트를 불러와서 사용할 수 있게 해준다. CRA(create-react-app)으로 리액트 프로젝트를 생성할 때, node_modules라는 디렉터리도 함께 생성이 되는데, 여기에 react 모듈이 설치된다. 이 모듈을 import 구문을 통해 불러와서 사용할 수 있는 것이다.

이렇게 모듈을 불러와서 사용하는 것은 브라우저에는 없던 기능이다. 이러한 기능을 브라우저에서도 사용하기 위해 번들러(bundler)를 사용하는데, 번들(Bundle)은 파일을 묶듯이 연결하는 것을 뜻한다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/200c5c23-fc91-4d4c-8edb-0835b1f71c05/image.png)

대표적인 번들러로 웹팩, Parcel, browserify 라는 도구들이 있으며, 리액트 프로젝트에서는 주로 웹팩을 사용한다. 번들러 도구를 사용하면 import(또는 require)로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 준다.

리액트를 불러오는 코드 하단에는 다음과 같이 SVG 파일과 CSS 파일을 import 하는 코드가 있다.

```js
import logo from "./logo.svg";
import "./App.css";
```

웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있다. 이렇게 파일들을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당한다. 로더는 여러가지 종류가 있는데, babel-loader는 자바스크립트 파일들을 불러오면서 최신 자바스크립트 문법으로 작성된 코드들을 바벨이라는 도구를 사용하여 ES5 문법으로 변환해 준다.

> #### 최신 자바스크립트로 작성된 코드를 왜 변환할까? <br>
>
> 최신 자바스크립트 문법을 ES5 형태로 변환하는 것은 구버전 웹 브라우저와 호환하기 위해서이다. 또한, 리액트 컴포넌트에서 사용하는 JSX라는 문법도 정식 자바스크립트 문법이 아니므로 ES5 형태의 코드로 변환해야 환다.

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

이 코드는 App이라는 컴포넌트를 만들어 준다. function 키워드를 사용하여 컴포넌트를 만들었기 때문에, 이러한 컴포넌트를 함수형 컴포넌트라고 부른다. 함수에서 반환하는 내용을 보면 마치 HTML 구문 같지만, 이러한 코드들은 JSX라고 부른다.

---

## What is JSX?

JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 이전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드를 변환된다.

```js
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
```

이렇게 작성된 코드는 다음과 같이 변환된다.

```js
function App() {
return React.createElement(“div“, null, “Hello “,
React.createElement(“b“, null, “react“));
}

```

만일 컴포넌트를 렌더링할 때마다 위와 같이 매번 React.createElement 함수를 사용해야 한다면 매우 불편하기 때문에, JSX를 사용하여 편하게 UI를 렌더링하는 것이다.

## JSX 문법

JSX를 사용하려면 몇 가지 규칙을 준수해야 한다.

### 감싸인 요소

**컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다. **

```js
import React from 'react';

function App() {
  return (
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
  )
}

export default App;
```

이러한 형태의 코드는 제대로 작동하지 않고 다음과 같은 오류가 나타난다.

```
Failed to compile.

./src/App.js
Line 6:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
Did you want a JSX fragment <>…</>?

4 |   return (
5 |     <h1>리액트 안녕!</h1>
> 6 |     <h2>잘 작동하니?</h2>
  |     ^
7 |   )
8 | }
9 |
```

이 오류는 요소 여러 개가 부모 요소 하나에 의하여 감싸져 있지 않기 때문에 발생한 오류이다. 다음과 같이 코드를 작성하여 해결할 수 있다.

```js
import React from "react";

function App() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </div>
  );
}

export default App;
```

리액트 컴포넌트에서 요소 여러 개를 하나의 요소로 꼭 감싸주어야 하는 이유는, Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 **컴포넌트 내부는 하나의 DOM 트리로 이루어져야 한다는 규칙**이 있기 때문이다.

여기서 꼭 div 요소를 사용하고 싶지 않을 수도 있는데, 그런 경우에는 리액트 v16 이상부터 도입된 Fragment라는 기능을 사용하면 된다.

```js
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
  );
}

export default App;
```

Fragment는 다음과 같은 형태로도 표현할 수 있다.

```js
import React from "react";

function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

### 자바스크립트 표현

자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 `{ }`로 감싸면 된다.

```js
import React from "react";

function App() {
  const name = "리액트";
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

### if 문 대신 조건부 연산자

JSX 내부의 자바스크립트 표현식에서 if 문은 사용할 수 없다. 하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, `{ }` 안에 삼항 연산자를 사용하면 된다.

```js
import React from "react";

function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}

export default App;
```

### AND 연산자(&&)를 사용한 조건부 렌더링

```js
import React from "react";

function App() {
  const name = "리왝트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}

export default App;
```

### undefined를 렌더링하지 않기

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안된다.

```js
import React from "react";
import "./App.css";

function App() {
  const name = undefined;
  return name;
}

export default App;
```

코드를 저장한 후 브라우저를 확인해 보면 다음과 같은 오류를 볼 수 있다.

```
App(…): Nothing was returned from render. This usually means a return statement is
missing. Or, to render nothing, return null.
```

어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있다.

```js
import React from "react";
import "./App.css";

function App() {
  const name = undefined;
  return name || "값이 undefined입니다.";
}

export default App;
```

한편, JSX 내부에서 undefiend를 렌더링하는 것은 괜찮다.

### 인라인 스타일링

리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 한다. 케밥 케이스(kebab-case)로 작성된 속성들은 카멜 케이스(camelCase)로 작성해야 한다.

```js
import React from "react";

function App() {
  const name = "리액트";
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 px로 지정
  };
  return <div style={style}>{name} </div>;
}

export default App;
```

style 객체를 미리 선언하지 않고 바로 style 값을 지정하고 싶다면 다음과 같이 작성하면 된다.

```js
import React from "react";

function App() {
  const name = "리액트";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16,
      }}
    >
      {name}
    </div>
  );
}

export default App;
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/eb211632-f527-4f16-9a68-49152584e099/image.png)

### class 대신 className

일반 HTML에서 CSS 클래스를 사용할 때는 `<div class="myClass"></div>`와 같이 class라는 속성을 사용했지만, JSX에서는 class가 아닌 className으로 설정해 주어야 한다.

```js
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/9ee8eacf-e77c-4dc2-9b09-e1cb8e04fdbf/image.png)

### 꼭 닫아야 하는 태그

HTML에서는 br이나 input 태그와 같은 태그들은 태그를 닫지 않은 상태로 코드를 작성해도 정상적으로 작동한다. 하지만 JSX에서는 태그를 닫지 않으면 오류가 발생한다. 그렇기 때문에 다음과 같이 input 태그를 닫아주어야 한다.

```js
import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}></div>
      <input></input>
    </>
  );
}

export default App;
```

태그 사이에 별도의 내용이 들어가지 않는 경우에는 태그를 선언하면서 동시에 닫는 self-closing 태그를 사용할 수 있다.

```html
<input />
```

### 주석

JSX 내부에서 주석을 작성할 때는 `{/* ... */}` 와 같은 형식으로 작성한다. 시작 태그를 여러 줄로 작성할 때는 그 내부에서 `// ...` 과 같은 형태의 주석도 작성할 수 있다.

```jsx
import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석 */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 된다. */
      <input />
    </>
  );
}

export default App;
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/1ff8eaff-a3ae-42f1-8a6b-5429460b9d43/image.png)

---

# 3. 컴포넌트

컴포넌트의 기능은 단순한 템플릿 이상이다. 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 주는 것은 물론이고, 라이프사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리할 수 있으며, 임의 메서드를 만들어 특별한 기능을 붙여줄 수 있다.

## 클래스형 컴포넌트

컴포넌트를 선언하는 방식은 두 가지이다. 하나는 **함수형 컴포넌트**이고, 또 다른 하나는 **클래스형 컴포넌트**이다.

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
```

클래스형 컴포넌트와 함수형 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것이다.

클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다.

그렇다면 컴포넌트를 선언할 수 있는 두 가지 방법 중 어느 상황에 함수형 컴포넌트를 사용해야 할까?

함수형 컴포넌트의 장점을 나열해 보면 다음과 같다. 우선 클래스형 컴포넌트보다 선언하기가 훨씬 편하고, 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.

함수형 컴포넌트의 주요 단점은 state와 라이프사이클 API의 사용이 불가능하다는 점이었지만, 이 단점은 리액트 v16.8 업데이트 이후 Hooks라는 기능이 도입되면서 해결되었다. 리액트 공식 매뉴얼에서는 컴포넌트를 새로 작성할 때 함수형 컴포넌트와 Hooks를 사용하도록 권장하고 있다. 하지만 그렇다고 해서 클래스형 컴포넌트가 사라지는 것은 아니므로 클래스형 컴포넌트의 기능은 꼭 알아두어야 한다.

## 첫 컴포넌트 생성

컴포넌트의 생성 과정은 다음과 같다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/2ed979d2-0b05-4a18-81e7-ae24a30049e1/image.png)

### src 디렉터리에 MyComponent.js 파일 생성

![](https://velog.velcdn.com/images/hang_kem_0531/post/d7f30ee6-8592-4212-9580-1689f4570793/image.png)

### 코드 작성하기

![](https://velog.velcdn.com/images/hang_kem_0531/post/1a05eb02-6044-4aa7-9be4-ea8a8148cbbf/image.png)

### 모듈 내보내기 및 불러오기

#### 모듈 내보내기

위 작성한 코드에서 맨 아래 코드를 확인해 보자.

```js
export default MyComponent;
```

이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다.

#### 모듈 불러오기

이번에는 App 컴포넌트에서 MyComponent 컴포넌트를 불러와서 사용해 보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/051987c9-62e5-4647-8ab6-2b16ef4b16b1/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/55a80fbb-fb0b-43f3-8a81-d7bb6b0c6560/image.png)

## props

**props**는 properties를 줄인 표현으로 **컴포넌트 속성을 설정할 때 사용**하는 요소이다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.

### JSX 내부에서 props 렌더링

props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있다. props를 렌더링할 때는 JSX 내부에서 { } 기호로 감싸주면 된다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/da8b97df-1bdf-4a8e-8cf1-48969feb6896/image.png)

### 컴포넌트를 사용할 때 props 값 지정하기

App 컴포넌트에서 MyComponent의 props 값을 지정해 보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/313f345f-0f80-41a1-8c22-71715abd213b/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/0791c030-543d-434f-8392-0559d3e5a0b3/image.png)

### props 기본값 설정: defaultProps

위 App 컴포넌트에서 MyComponent의 props 값을 지정하지 않는다면 브라우저에는 '안녕하세요, 제 이름은 입니다.'라는 내용만 보일 것이다. 이렇게 props 값을 따로 지정하지 않았을 때 보여줄 기본값을 설정하려면 defaultProps를 사용하면 된다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/99afa9f4-3e6f-4bd1-93f0-cfe770e4515e/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/3fd8169b-977e-4940-ae38-d448de21ed70/image.png)

### 태그 사이의 내용을 보여 주는 children

리액트 컴포넌트를 사용할 때 children props를 사용하여 컴포넌트 태그 사이의 내용을 보여줄 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/0d74e656-6232-4bd0-a614-8bcaea14f6f1/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/12b580a8-8660-48db-960c-cd22d31dd1c2/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/57d918bd-8ed7-41ef-8f9d-a393f78de8d8/image.png)

### 비구조화 할당 문법을 통해 props 내부 값 추출하기

현재 MyComponent에서 props 값을 조회할 때마다 props.name, props.children과 같이 props. 이라는 키워드를 앞에 붙여 주고 있다. ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출하는 방법을 알아보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/04a02007-0d69-47cd-b93f-61a61628ba71/image.png)

이렇게 객체에서 값을 추출하는 문법을 비구조화 할당(destructuring assignment)이라고 부른다. 이 문법은 구조 분해 문법이라고도 불리며, 함수의 파라미터 부분에서도 사용할 수 있다. 만약 함수의 파라미터가 객체라면 그 값을 비구조화해서 사용하는 것이다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/31433eb1-6053-4cf9-80ec-2bda587ec3c4/image.png)

### propTypes를 통한 props 검증

컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용한다. 컴포넌트의 propTypes를 지정하는 방법은 defaultProps를 설정하는 것과 비슷하다. 우선 propTypes를 사용하려면 코드 상단에 import 구문을 사용하여 불러와야 한다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/a5d52f86-9cf8-4413-8012-f3142915516b/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/830b3e8b-83ce-49f9-b80a-27eff3a344bb/image.png)

이렇게 설정해 주면 name 값은 무조건 문자열(string) 형태로 전달해야 된다는 것을 의미한다. 만약 컴포넌트에 설정한 props가 propTypes에서 지정한 형태와 일치하지 않는다면 브라우저 개발자 도구의 Console 탭에 다음과 같은 결과가 나타난다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/6a1e1e55-8cf5-4eb1-bde0-03144fb6652c/image.png)

#### isRequired를 사용하여 필수 propTypes 설정

propTypes를 지정하지 않았을 때 경고 메시지를 띄워주려면, propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 된다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/45d23b0e-ad22-42bd-a9ba-fcbafe494260/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/7c2088d0-49e2-426d-9a06-e639087404a0/image.png)

#### [더 많은 PropTypes 종류](https://github.com/facebook/prop-types)

### 클래스형 컴포넌트에서 props 사용하기

클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 된다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/709e2a2d-a712-43ff-bb5f-4d981a9d8e7d/image.png)

> #### defaultProps와 propTypes는 꼭 사용해야 할까? <br>
>
> 이 두 가지 설정은 컴포넌트의 필수 사항이 아니므로 꼭 사용할 필요는 없다. 하지만 큰 규모의 프로젝트를 진행할 경우, 특히 다른 개발자들과 협업할 경우에는 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아질 수 있다.

## State

리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다. 그렇기 때문에 props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 한다.

리액트에는 두 가지 종류의 state가 있다. 하나는 클래스형 컴포넌트가 지니고 있는 state이고, 다른 하나는 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state다.

## 클래스형 컴포넌트의 state

![](https://velog.velcdn.com/images/hang_kem_0531/post/6a1d9ca8-64f2-4c90-b120-01cbf0a837f1/image.png)

위 파일에서 각 코드가 어떤 역할을 하는지 알아보자.

컴포넌트에 state를 설정할 때는 다음과 같이 **constructor 메서드**를 작성하여 설정한다.

```js
constructor(props) {
  super(props);
  // state의 초깃값 설정하기
  this.state = {
    number: 0
  };
}
```

constructor 메서드는 컴포넌트의 생성자 메서드이다. 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 **super(props)**를 호출해 주어야 한다. 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 준다.

그 다음에는 this.state 값에 초기값을 설정해 주었다. 컴포넌트의 state는 **객체 형식**이어야 한다.

이제 render 함수를 확인해 보자.

```js
render() {
  const { number } = this.state; // state를 조회할 때는 this.state로 조회
  return (
      <div>
        <h1>{number}</h1>
        <button
        // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
        onClick={() => {
          // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
          this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
```

render 함수에서 현재 state를 조회할 때는 this.state를 조회하면 된다. 그리고 button 안에 onClick이라는 값을 props로 넣어 주었는데, 이는 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 해준다. 이를 **이벤트를 설정**한다고 한다.

함수 내부에서는 **this.setState**라는 함수를 사용했다. 이 함수는 state 값을 바꿀 수 있게 해준다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/82b3f846-c844-4f1e-826f-5fe654b9101d/image.gif)

### state 객체 안에 여러 값이 있을 때

state 객체 안에는 여러 값이 있을 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/f0a44322-2c0a-4c03-96c0-7355cb828f49/image.png)

현재 state 안에 fixedNumber라는 또 다른 값을 추가해 주었다. 그렇지만 this.setState 함수를 사용할 때 인자로 전달되는 개체 내부에 fixedNumber를 넣어 주지는 않았다. this.setState 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꾸어 준다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/d113f2c7-43c6-4785-b60c-6bcba69b7ed4/image.gif)

### state를 constructor에서 꺼내기

![](https://velog.velcdn.com/images/hang_kem_0531/post/1e8a065a-e726-4b6e-9a49-2269e3aa62f3/image.png)

이렇게 하면 constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다.

### this.setState에 객체 대신 함수 인자 전달하기

this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트된다. 만약 다음과 같이 onClick에 설정한 함수 내부에서 this.setState를 두 번 호출하면 어떻게 될까?

```js
onClick={() => {
  this.setState({ number: number + 1});
  this.setState({ number: this.state.number + 1});
}}
```

코드를 위와 같이 작성하면 this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 1씩 더해진다. this.setState를 사용한다고 해서 state 값이 바로 바뀌지는 않기 때문이다.

이에 대한 해결책은 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어 주는 것이다.

```js
this.setState((prevState, props) => {
  return {
    // 업데이트하고 싶은 내용
  };
});
```

여기서 prevState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킨다. 만약 업데이트하는 과정에서 props가 필요하지 않다면 생략해도 된다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/99473182-0c25-4d0a-b13e-af7269259c8a/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/f5c6cb92-2a97-4708-95ce-3ab487e178f5/image.gif)

### this.setState가 끝난 후 특정 작업 실행하기

setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백(callback) 함수를 등록하여 작업을 처리할 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/6dd8af14-b58e-441c-b115-978f2da489f8/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/1ebc0179-60f5-472b-8510-be4a521bb280/image.gif)

## 함수형 컴포넌트에서 useState 사용하기

리액트 v16.8 이후부터는 useState라는 함수를 사용하여 함수형 컴포넌트에서도 state를 사용할 수 있게 되었다. 이 과정에서 Hooks라는 것을 사용하게 되는데, Hooks는 나중에 다른 포스팅에서 더 자세히 다뤄보겠다.

### 배열 비구조화 할당

Hooks를 사용하기 전에 배열 비구조화 할당이라는 것을 알아보자. 배열 비구조화 할당은 이전 객체 비구조화 할당과 비슷하다. 즉, 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법이다.

```js
const array = [1, 2];
const one = array[0];
const two = array[1];
```

```js
const array = [1, 2];
const [one, two] = array;
```

### useState 사용하기

배열 비구조화 할당 문법을 알고 나면 useState 사용 방법을 쉽게 이해할 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/2cd07c0a-236a-49eb-928d-fedd55a97e4b/image.png)

useState 함수의 인자에는 상태의 초깃값을 넣어 준다. 클래스형 컴포넌트에서의 state 초깃값은 객체 형태를 넣어 주어야 한다고 했지만, useState에서는 반드시 객체가 아니어도 상관없다. 값의 형태는 자유이며, 숫자일 수도, 문자열일 수도, 객체일 수도, 배열일 수도 있다.

함수를 호출하면 배열이 반환되는데, 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수이다. 이 함수를 세터(Setter) 함수라고 부른다. 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해줄 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/7963b259-8945-4868-bc96-2f70a6d9dce6/image.gif)

### 한 컴포넌트에서 useState 여러 번 사용하기

useState는 한 컴포넌트에서 여러 번 사용해도 상관없다. 또 다른 상태를 useState로 한번 관리해 보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/c08c7147-7879-4ade-b9b0-c448463abfba/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/5fbcc5f7-bb95-45bd-babc-a1d5e8734bdb/image.gif)

## State를 사용할 때 주의사항

클래스형 컴포넌트든 함수형 컴포넌트든 state를 사용할 때는 주의해야 할 사항이 있다. 바로 state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 된다는 것이다.

예를 들어 다음 코드는 잘못된 코드이다.

```js
// 클래스형 컴포넌트에서
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수형 컴포넌트에서
const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;
```

그렇다면 배열이나 객체를 업데이트해야 할 때는 어떻게 해야 할까? 이런 상황에서는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 해야 한다.

```js
// 객체 다루기
const object = { a: 1, b: 2, c: 3};
const nextObject = { ...object, b: 2}; // 사본을 만들어서 b 값만 덮어 쓰기

// 배열 다루기
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false }
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
nextArray.map(item => item.id === 1 ? { ...item, value: false } : item));
// id가 1인 항목의 value를 false로 설정
```

객체에 대한 사본을 만들 때는 spread 연산자라 불리는 ...을 사용하여 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수들을 활용한다.

---

# Event Handling

이벤트(Event)란, 사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 뜻한다. 예를 들어, 버튼에 마우스 커서를 올렸을 때는 onmouseover 이벤트를 실행하고, 클릭했을 때는 onclick 이벤트를 실행한다. 리액트에서 이벤트를 다루는 것은 HTML에서 이벤트를 다루는 것과 비슷하면서도 좀 다르다.

## 리액트의 이벤트 시스템

리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 인터페이스가 동일하기 때문에 사용법이 꽤 비슷하지만, 주의해야 할 몇 가지 사항이 있다.

### 이벤트를 사용할 때 주의 사항

1. **이벤트 이름은 카멜 표기법으로 작성한다.**
   예를 들어 HTML의 onclick은 리액트에서 **onClick**으로, onkeyup은 **onKeyUp**으로 작성해야 한다.

2. **이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.**
   HTML에서 이벤트를 설정할 때는 큰따옴표 안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달한다.

3. **DOM 요소에만 이벤트를 설정할 수 있다.**
   즉 div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.

### 이벤트 종류

[리액트 매뉴얼](https://reactjs.org/docs/events.html)

---

## 이벤트 핸들링 익히기

![](https://velog.velcdn.com/images/hang_kem_0531/post/57bdf3aa-4264-4485-856d-d92bbc99ef3f/image.png)

### 컴포넌트 생성 및 불러오기

#### 컴포넌트 생성

![](https://velog.velcdn.com/images/hang_kem_0531/post/1ea2c770-636d-49b2-8d7f-15d9ae561be4/image.png)

먼저 클래스형 컴포넌트로 작성하여 기능을 구현해 보고, 나중에 함수형 컴포넌트로도 구현해 보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/926d52e9-4ca9-4b20-a09a-5dab2453c524/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/ebc4937a-35fd-4b0f-8c49-cf142ced3ef3/image.png)

### onChange 이벤트 핸들링하기

#### onChange 이벤트 설정

![](https://velog.velcdn.com/images/hang_kem_0531/post/e00a5264-4809-4e40-b452-35508fcafc0a/image.png)

EventPractice 컴포넌트에 input 요소를 렌더링하는 코드와 해당 요소에 onChange 이벤트를 설정하는 코드를 작성한다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/17ba4dc0-317e-4ea2-a0f1-8fc465e5dff3/image.gif)

이벤트 객체가 콘솔에 나타나는 모습을 볼 수 있다. 여기서 콘솔에 기록되는 e 객체는 SyntheticEvent로 **웹 브라우저의 네이티브 이벤트를 감싸는 객체**이다.

> #### SyntheticEvent (합성 이벤트)<br>
>
> SyntheticEvent는 객체로 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 Wrapper 객체이다. Wrapping 이란, 기본 기능을 감싸는 새로운 기능을 만드는 것을 의미한다. <br><br> React는 Element가 처음 렌더링될 때 이벤트 리스너를 제공하여 처리하는데, 이때 리스너와 대응되는 이벤트 핸들러 함수는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼를 전달받아야 하며, React에서 제공하는 이 이벤트 래퍼가 바로 **SyntheticEvent** 객체인 것이다.

SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다. 그렇기 때문에 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야 한다.

예를 들어 onChange 이벤트가 발생할 때, 인풋값이 변하는 것을 기록하고 싶다면 e.target.value를 활용하면 된다.

```js
onChange = {
  (e) => {
    console.log(e.target.value);
  }
}
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/56d10ed4-9ae1-4b04-86f5-5499d5603812/image.gif)

#### state에 input 값 담기

생성자 메서드인 constructor에서 state 초깃값을 설정하고, 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트한다. 그리고 input의 value 값을 state에 있는 값으로 설정하면 state에 input 값을 담을 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/41ff0f89-1467-47b2-88ff-579baa4375b8/image.png)

#### 버튼을 누를 때 comment 값을 공백으로 설정

정말로 입력한 값이 state에 잘 들어갔는지, 인풋에서 그 값을 제대로 반영하는지 검증해 보도록 하자. input 요소 코드 아래쪽에 button을 하나 만들고, 클릭 이벤트가 발생하면 현재 comment 값을 메시지 박스로 띄운 후 comment 값을 공백으로 설정하였다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/80d54f7d-cef7-4261-9f79-092abe5e1acb/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/6d861260-9fcf-48cc-ba8b-ec27b9b345cb/image.gif)

### 임의 메서드 만들기

이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주는 방식 말고도 함수를 미리 준비하여 전달하는 방법도 있다. 성능상으로는 차이가 거의 없지만, 가독성은 훨씬 높다. 앞서 onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드를 만들어보자.

#### 기본 방식

```js
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } // this와 메서드 바인딩

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트에 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다. 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 **바인딩(binding)하는 과정**이 필요하다. 만약 바인딩하지 않는다면 this는 undefined를 가리키게 된다.

#### Property Initializer Syntax를 이용한 메서드 작성

메서드 바인딩은 생성자 메서드에서 하는 것이 정석이지만, 새 메서드를 만들 때마다 constructor도 수정해야 하는 불편함이 있다. 그렇기 때문에 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 더욱 깔끔하게 메서드를 정의할 수 있다.

```js
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

### input 여러 개 다루기

input이 여러 개 일때는 메서드를 여러 개 만드는 것도 하나의 해법이지만, 더 쉽게 처리하는 방법이 있다. 바로 event 객체를 활용하는 것이다. onChange 이벤트 핸들러에서 e.target.name은 해당 인풋의 name(위 코드에서는 message)을 가리킨다. 이 값을 사용하여 state를 설정하면 쉽게 해결할 수 있다.

```js
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/52b39d53-5230-4aec-9b95-e65cf3343e0b/image.gif)

객체 안에서 key를 `[]`로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.

---

## 함수형 컴포넌트로 구현해 보기

```js
import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
```

위 코드는 인풋이 두 개밖에 없기 때문에 onChange 관련 함수를 따로 만들어 구현하였다. 하지만 인풋의 개수가 많아질 것 같으면 e.target.name을 활용하는 편이 더 좋을 수 있다.

```js
import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
```

e.target.name 값을 활용하려면, 위와 같이 useState를 쓸 때 인풋 값들이 들어 있는 form 객체를 사용해 주면 된다.

---

# ref

일반 HTML 에서 DOM 요소에 이름을 달 때는 id를 사용한다. HTML에서 id를 사용하여 DOM에 이름을 다는 것 처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법이 있다. 바로 ref(reference의 약어) 개념이다.

> #### 리액트 컴포넌트 안에서는 id를 사용하면 안될까? <br>
>
> 리액트 컴포넌트 안에서도 id를 사용할 수는 있지만, 특수한 경우가 아니면 사용을 권장하지 않는다. 예를 들어 같은 컴포넌트를 여러 번 사용한다고 가정했을 때, HTML에서 DOM의 id는 유일(unique)해야 하는데, 이런 상황에서는 중복 id를 가진 DOM이 여러 개 생기니 잘못된 사용이다. 이런 상황에서는 컴포넌트를 만들 때마다 id 뒷 부분에 추가 텍스트를 붙여서 중복 id가 발생하는 것을 방지해야 한다.<br>
> ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않는다.

## ref는 어떤 상황에서 사용해야 할까?

ref는 **'DOM을 꼭 직접적으로 건드려야 할 때'** 사용해야 한다.

### DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기

- 스크롤 박스 조작하기

- Canvas 요소에 그림 그리기 등

---

## ref 사용

ref를 사용하는 방법은 두 가지이다.

### 콜백 함수를 통한 ref 설정

ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것이다. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 된다. 이 콜백 함수는 ref 값을 파라미터로 전달받는다. 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 준다.

```js
<input
  ref={(ref) => {
    this.input = ref;
  }}
/>
```

이렇게 하면 앞으로 this.input은 input 요소의 DOM을 가리킨다. ref의 이름은 원하는 것으로 자유롭게 지정할 수 있다.

### createRef를 통한 ref 설정

ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용하는 것이다. 이 함수를 사용하면 더 적은 코드로 쉽게 ref를 사용할 수 있다.

```js
import React, { Component } from 'react';

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() [
    return (
    	<div>
    		<input ref={this.input} />
		</div>
		);
	}
}

export default RefSample;
```

createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아 주어야 한다. 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정이 완료된다.

설정한 뒤 나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 된다. 콜백 함수를 사용할 때와 다른 점은 이렇게 뒷부분에 .current를 넣어 주어야 한다는 것이다.

---

## 컴포넌트에 ref 달기

리액트에서는 컴포넌트에도 ref를 달 수 있다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다.

### 사용법

```js
<MyComponent
  ref={(ref) => {
    this.myComponent = ref;
  }}
/>
```

이렇게 하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있다. 즉, 내부의 ref에도 접근할 수 있다. (ex: myComponent.handleClick, myComponent.input ) 그럼, 실습을 통해 알아보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/6d4beff2-feba-4425-9d40-6dd4ecce677c/image.png)

### 컴포넌트 초기 설정

#### 컴포넌트 파일 생성

![](https://velog.velcdn.com/images/hang_kem_0531/post/6ff62247-5d56-4aa0-bf9a-95fefe397af2/image.png)

#### 컴포넌트에 메서드 생성

자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용한다.

- scrollTop : 세로 스크롤바 위치 (0~350)

- scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)

- clientHeight: 스크롤이 있는 박스의 높이(300)

![](https://velog.velcdn.com/images/hang_kem_0531/post/30ad1578-c7e5-4ae6-bfcd-fc9455c86cf0/image.png)

이렇게 만든 메서드는 부모 컴포넌트인 App 컴포넌트에서 ScrollBox에 ref를 달면 사용할 수 있다.

#### 컴포넌트에 ref 달고 내부 메서드 사용

![](https://velog.velcdn.com/images/hang_kem_0531/post/2a621b05-ae82-4704-9adc-90249f9e54df/image.png)

문법상으로는 onClick = {this.scrollBox.scrollBottom} 같은 형식으로 작성해도 틀린것은 아니지만, 컴포넌트가 처음 렌더링될 때는 this.scrollBox 값이 undefined이므로 this.scrollBox.scrollToBottom 값을 읽어 오는 과정에서 오류가 발생한다.

이때 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollToBottom 메서드를 실행하면, 버튼을 누를 때 this.scrollBox.scrollToBottom 값을 읽어 와서 실행하므로 오류가 발생하지 않는다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/07ac5ede-641d-4b0a-8db6-dbe59901fbfa/image.gif)

---

# 컴포넌트 반복

웹 애플리케이션을 만들다 보면 다음과 같이 반복되는 코드를 작성할 때가 있다.

```js
import React from "react";

const IterationSample = () => {
  return (
    <ul>
      <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람</li>
    </ul>
  );
};

export default IterationSample;
```

지금은 li 태그 하나뿐이라 그렇게 문제가 되지는 않지만, 코드가 좀 더 복잡해진다면 코드의 양은 더욱 늘어날 것이며, 파일 용량도 증가할 것이다. 또 보여 주어야 할 데이터가 유동적이라면 이러한 코드로는 관리하기가 힘들다.

## 자바스크립트 배열의 map() 함수

자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있다. map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성한다.

### 문법

```js
arr.map(callback, [thisArg]);
```

이 함수의 파라미터는 다음과 같다.

- callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세가지이다.

  - currentValue: 현재 처리하고 있는 요소

  - index: 현재 처리하고 있는 요소의 index 값

  - array: 현재 처리하고 있는 원본 배열

- thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스

### 예제

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/9477d5a7-864e-4098-9296-e536b7b8af49/image.png)

---

## 데이터 배열을 컴포넌트 배열로 변환하기

map() 함수를 사용하여 기존 배열로 컴포넌트로 구성된 배열을 생성할 수도 있다.

### 컴포넌트 수정하기

![](https://velog.velcdn.com/images/hang_kem_0531/post/bd090ab6-1fb4-4b2c-b9e2-dc24b3243f59/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/ba8f3297-80d9-4e7c-bcf0-a468b93f8f31/image.png)

App 컴포넌트에서 해당 컴포넌트를 렌더링하면 원하는 대로 렌더링이 된 것처럼 보인다. 하지만 크롬 개발자 도구의 콘솔을 열어 보면 경고 메시지가 표시되어 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/d1597256-a1e3-42eb-b174-b184bd37c4a6/image.png)

해당 경고 메시지는 'key' prop이 없다는 뜻이다. key란 무엇일까?

---

## key

리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다. key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지하지만, key가 있다면 그 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다.

### key 설정

key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다. key 값은 언제나 유일해야 하기 때문에, 데이터가 가진 고윳값을 key 값으로 설정해야 한다.

```js
const articleList = articles.map(article => (
  <Article
  		title={article.title}
        writer={article.writer}
		key={article.id}
  />
 );
```

앞서 만들었던 컴포넌트에는 이런 고유 번호가 없는데, 이때는 map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용하면 된다. 고유한 값이 없을때만 index 값을 key로 사용해야 하며, index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다는 단점이 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/5e3112b4-6062-4f91-8d30-26116c854a2c/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/b86918bb-d8f3-486e-8c64-75e08e1499e4/image.png)

## 응용

![](https://velog.velcdn.com/images/hang_kem_0531/post/b8ab6de3-7237-4fcd-a4fa-5a957ce44a28/image.png)

### 초기 상태 설정하기

앞서 만들었던 컴포넌트에 useState를 통해 상태를 설정하자. 하나는 데이터 배열이고, 다른 하나는 텍스트를 입력할 수 있는 Input의 상태이며, 마지막 하나는 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태이다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/10572d42-01e7-4d74-a24c-f868d9aed303/image.png)

### 데이터 추가 기능 구현하기

이제 새로운 이름을 등록할 수 있는 기능을 구현해보자. 우선 ul 태그의 상단에 input과 button을 렌더링하고, input의 상태를 관리해보자.

![](https://velog.velcdn.com/images/hang_kem_0531/post/f792426e-07ca-4993-b0b9-c1432e6b77ab/image.png)

그 다음에는 버튼을 클릭했을 때 호출할 onClick 함수를 선언하여 버튼의 onClick 이벤트로 설정하였다. onClick 함수에서는 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열을 만들고, setName를 통해 상태를 업데이트 해 준다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/7b5d039c-2fda-43a2-8d55-31252bef2ff2/image.png)

배열에 새 항목을 추가할 때 배열의 push 함수를 사용하지 않고 concat을 사용했는데, push는 기본 배열 자체를 변경해 주는 반면, concat은 새로운 배열을 만들어 준다는 차이점이 있다.

리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 하는데, 이를 불변성 유지라고 한다. 불변성 유지를 해 주어야 나중에 리액트 컴포넌트의 성능을 최적화할 수 있다.

![](https://velog.velcdn.com/images/hang_kem_0531/post/00162dc3-321c-48b8-a1b9-72a960e3fc4d/image.gif)

### 데이터 제거 기능 구현하기

이번에는 각 항목을 더블클릭했을 때 해당 항목이 화면에서 사라지는 기능을 구현해 보자. 이번에도 마찬가지로 불변성을 유지하면서 업데이트를 진행하여야 하는데, 이를 유지하면서 배열의 특정 항목을 지울 때는 배열의 내장 함수 filter를 사용한다.

filter 함수를 사용하면 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있다.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const biggerThanThree = numbers.filter((number) => number > 3);
// [4, 5, 6]
```

![](https://velog.velcdn.com/images/hang_kem_0531/post/21bc8eb4-5439-4276-8fba-cef11a610a9d/image.png)

![](https://velog.velcdn.com/images/hang_kem_0531/post/6f0e84d4-4ed4-4b5c-8adc-6517cc5a31e3/image.gif)

## 정리

컴포넌트 배열을 렌더링할 때는 key 값 설정에 항상 주의해야 한다. 또 key 값은 언제나 유일해야 하며, key 값이 중복된다면 렌더링 과정에서 오류가 발생한다.

상태 안에서 배열을 변형할 때는 배열에 직접 접근하여 수정하는 것이 아니라 concat, filter 등의 배열 내장 함수를 사용하여 새로운 배열을 만든 후 이를 새로운 상태로 설정해 주어야 한다.
