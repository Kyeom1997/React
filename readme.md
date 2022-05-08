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
