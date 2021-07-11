# 리액트 개념 정리 (리액트를 다루는 기술)

<br>

# 목차

- [1장. 리액트 시작](#1장.-리액트-시작)

<br>

# 1장. 리액트 시작

<br>

## 1.1 왜 리액트인가?

최근 몇 년간 전 세계 개발자는 자바스크립트에 뜨겁게 열광하고 있습니다. 한때 자바스크립트는 웹 브라우저에서 간단한 연산을 하거나 시각적인 효과를 주는 단순한 스크립트 언어에 불과했지만, 현재는 웹 애플리케이션에서 가장 핵심적인 역할을 합니다. 더 나아가 영역을 확장하여 서버 사이드는 물론 모바일, 데스크톱 애플리케이션에서도 엄청나게 활약합니다.
<br><br>
이제 자바스크립트 만으로도 규모가 큰 애플리케이션을 만들 수 있는 시대가 왔습니다. 대규모 애플리케이션 중 프런트엔드 사이드에서 돌아가는 애플리케이션 구조를 관리하려면 어떻게 해야 할까요? 솔직히 이런 애플리케이션을 특별한 도구 없이 순수하게 자바스크립트로만 관리하려면 골치 아프겠죠? 지금까지 수많은 프레임워크가 조금씩 다른 관점에서 이를 해결하려고 노력해 왔습니다. Angular, Backbone.js, Derby.js, Ember.js, Knockback.js, Sammy.js, PureMVC, Vue.js 등이 말이죠.
<br><br>
이 프레임워크들은 주로 MVC(Model-View-Controller) 아키텍쳐, MVVM(Model-View-View Model) 아키텍쳐를 사용합니다. 이와 같은 구조가 지닌 공통점은 모델(Model)과 뷰(View)가 있다는 것인데요. 모델은 애플리케이션에서 사용하는 데이터를 관리하는 영역이고, 뷰는 사용자에게 보이는 부분입니다. 프로그램이 사용자에게서 어떤 작업(ex) 버튼 클릭, 텍스트 입력 등)을 받으면 컨트롤러는 모델 데이터를 조회하거나 수정하고, 변경된 사항을 뷰에 반영합니다.

![](https://thebook.io/img/080203/035.jpg)

반영하는 과정에서 보통 뷰를 변형(mutate)하지요. 예를 들어 다음 JSON 객체 값을 사용하는 뷰가 있다고 합시다.

```js
{
    "title": "Hello",
    "contents": "Hello World",
    "author": "kyeom",
    "likes": 1
}

<div id="post-1">
    <div class="title">Hello</div>
    <div class="contents">Hello World</div>
    <div class="author">kyeom</div>
    <div class="likes">1</div>
</div>

```

likes 값을 2로 업데이트 한다면 애플리케이션에서 post-1의 likes 요소를 찾아 내부를 수정해야겠지요? 업데이트 하는 항목에 따라 어떤 부분을 찾아서 변경할지 규칙을 정하는 작업은 간단하지만, 애플리케이션 규모가 크면 상당히 복잡해지고 제대로 관리하지 않으면 성능도 떨어질 수 있습니다.
<br><br>
페이스북 개발 팀은 이를 해결하려고 하나의 아이디어를 고안해 냈는데, 어떤 데이터가 변할 때마다 어떤 변화를 줄지 고민하는 것이 아니라 그냥 기존 뷰를 날려 버리고 처음부터 새로 렌더링하는 방식입니다. 그런데 이것이 과연 가능할까요? 웹 브라우저에서 이 방식대로 하면 CPU 점유율도 크게 증가할텐데요. DOM은 느리니까요. 메모리도 많이 사용할 것이고요. 그리고 사용자가 인풋 박스에 텍스트를 입력할 때 기존에 렌더링 된 것은 사라지고, 새로 렌더링 하면 끊김 현상이 발생할 것입니다.
<br><br>
페이스북 개발 팀이 앞서 설명한 방식으로 최대한 성능을 아끼고 편안한 사용자 경험(user experiece)을 제공하면서 구현하고자 개발한 것이 바로 리액트(React) 입니다.

<br><br>

### 1.1.1 리액트 이해

리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는 데 사용합니다. 구조가 MVC, MVW 등인 프레임워크와 달리, <b> 오직 V(View)만 신경 쓰는 라이브러리입니다.</b>
<br><br>
리액트 프로젝트에서 특정 부분이 어떻게 생길지 정하는 선언체가 있는데, 이를 컴포넌트(Component)라고 합니다. 컴포넌트는 다른 프레임워크에서 사용자 인터페이스를 다룰 때 사용하는 템플릿과는 다른 개념입니다. 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장하고 있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의합니다.
<br><br>
사용자 화면에 뷰를 보여 주는 것을 렌더링이라고 합니다. 리액트 라이브러리는 뷰를 어떻게 렌더링하길래 데이터가 변할 때마다 새롭게 리렌더링하면서 성능을 아끼고, 최적의 사용자 경험을 제공할 수 있을까요? 이 비밀을 파악하려면 리액트 컴포넌트가 최초로 실행한 '초기 렌더링'과 컴포넌트의 데이터 변경으로 다시 실행되는 '리렌더링' 개념을 이해해야 합니다.

<br>

#### 1.1.1.1 초기 렌더링

어떤 UI 관련 프레임워크, 라이브러리를 사용하든지 간에 맨 처음 어떻게 보일지를 정하는 초기 렌더링이 필요합니다. 리액트에서는 이를 다루는 render 함수가 있습니다.

```js
render() {...}
```

이 함수는 컴포넌트가 어떻게 생겼는지 정의하는 역할을 합니다. 이 함수는 html 형식의 문자열을 반환하지 않고, 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체를 반환합니다. 컴포넌트 내부에는 또 다른 컴포넌트들이 들어갈 수 있습니다. 이때 render 함수를 실행하면 그 내부에 있는 컴포넌트들도 재귀적으로 렌더링합니다. 이렇게 최상위 컴포넌트의 렌더링 작업이 끝나면 지니고 있는 정보들을 사용하여 HTML 마크업(markup)을 만들고, 이를 우리가 정하는 실제 페이지의 DOM 요소 안에 주입합니다.<br><br>

> <br>마크업(Markup) 언어란? <br> "마크(Mark)"로 둘러쌓인 언어. "태그(Tag)"로 둘러 쌓였다고도 표현함. 문서의 골격에 해당하는 부분을 작성하는데 사용함.<br><br>

<br><br>
![image](https://user-images.githubusercontent.com/78855917/124511515-4944fb80-de11-11eb-9443-38f4314c922d.png)

컴포넌트를 실제 페이지에 렌더링할 때는 분리된 두 가지 절차를 따르는데요. 먼저 문자열 형태의 HTML 코드를 생성한 후 특정 DOM에 해당 내용을 주입하면 이벤트가 적용됩니다.

#### 1.1.1.2 조화 과정

리액트 라이브러리에서 중요한 부분인 업데이트를 어떻게 진행하는지 한번 알아봅시다. 우선 리액트에서 뷰를 업데이트할 때는 "조화 과정(reconciliation)을 거친다" 라고 하는 것이 더 정확한 표현입니다. 컴포넌트에서 데이터에 변화가 있을 때 우리가 보기에는 변화에 따라 뷰가 변형되는 것처럼 보이지만, 사실은 새로운 요소로 갈아 끼우기 때문입니다.
<br><br>
이 작업 또한 render 함수가 맡아서 합니다. render 함수는 뷰가 어떻게 생겼고 어떻게 작동하는지 객체를 반환했다고 했었죠? 컴포넌트는 데이터를 업데이트 했을 때 단순히 업데이트 한 값을 수정하는 것이 아니라, 새로운 데이터를 가지고 render 함수를 또 다시 호출합니다. 그러면 그 데이터를 지닌 뷰를 생성해 내겠죠?
<br><br>
하지만 이때 render 함수가 반환하는 결과를 곧바로 DOM에 반영하지 않고, 이전에 render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교합니다.
<br><br>
![image](https://user-images.githubusercontent.com/78855917/124511873-13544700-de12-11eb-9531-fc95fbe2742a.png)
<br><br>
자바스크립트를 사용하여 두 가지 뷰를 최소한의 연산으로 비교한 후, 둘의 차이를 알아내 최소한의 연산으로 DOM 트리를 업데이트하는 것이죠.
<br>

---

<br>

## 1.2 리액트의 특징

<br>

### 1.2.1 Virtual DOM

리액트의 주요 특징 중 하나는 Virtual DOM을 사용하는 것입니다.
<br>

#### 1.2.1.1 DOM이란?

Virtual DOM을 알아보기 전에, 먼저 DOM이 무엇인지부터 제대로 짚고 넘어갑시다. DOM은 Document Object Model의 약어입니다. 즉, 객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성합니다.
<br><br>
웹 브라우저는 DOM을 활용하여 객체에 자바스크립트와 CSS를 적용하지요. DOM은 트리 형태라서 특정 노드를 찾거나 수정하거나 제거하거나 원하는 곳에 삽입할 수 있습니다.
<br><br>
![image](https://user-images.githubusercontent.com/78855917/124512510-814d3e00-de13-11eb-90e3-8c6168de8e91.png)
<br><br>

- DOM은 과연 느릴까요? <br><br>
  요즘 DOM API를 수많은 플랫폼과 웹 브라우저에서 사용하는데, 이 DOM에는 치명적인 한 가지 문제점이 있습니다. 바로 동적 UI에 최적화되어 있지 않다는 것입니다. HTML은 자체적으로는 정적입니다. 자바스크립트를 사용하여 이를 동적으로 만들 수 있지요. <br><br>
  하지만 요즘 흔히 접하는 트위터나 페이스북과 같은 큰 규모의 웹 어플리케이션을 생각해보세요. 스크롤바를 내릴수록 수많은 데이터가 로딩되고, 각 데이터를 표현하는 요소 개수가 몇 백 개, 몇 천 개 단위로 많다면 이야기는 좀 달라집니다. 이렇게 규모가 큰 웹 애플리케이션에서 DOM에 직접 접근하여 변화를 주다 보면 성능 이슈가 조금씩 발생하기 시작합니다.
  <br><br>
  DOM 자체는 빠릅니다. DOM 자체를 읽고 쓸 때의 성능은 자바스크립트 객체를 처리할 때의 성능과 비교하여 다르지 않습니다. 단, 웹 브라우저 단에서 DOM에 변화가 일어나면 웹 브라우저가 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트합니다. 이 과정에서 시간이 허비되는 것입니다.
  <br><br>

- 해결법
  <br><br>
  이는 DOM을 최소한으로 조작하여 작업을 처리하는 방식으로 개선할 수 있습니다. 리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행합니다.

<br><br>

#### 1.2.1.2 Virtual DOM

Virtual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용합니다. 마치 실제 DOM의 가벼운 사본과 비슷하죠.
<br><br>
리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트 할 때는 다음 세 가지 절차를 밟습니다.
<br>

1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링합니다.
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교합니다.
3. 바뀐 부분만 실제 DOM에 적용합니다.

<br>

- 오해 <br><br>
  Virtual DOM을 사용한다고 해서 사용하지 않을 떄와 비교하여 무조건 빠른 것은 아닙니다.
  결국에는 적절한 곳에 사용해야 리액트가 가진 진가를 비로소 발휘할 수 있습니다. 리액트를 사용하지 않아도 코드 최적화를 열심히 하면 DOM 작업이 느려지는 문제를 개선할 수 있고, 또 작업이 매우 간단할 때는 오히려 리액트를 사용하지 않는 편이 더 나은 성능을 보이기도 합니다.
  <br><br>
  리액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리 간결성입니다. UI를 업데이트하는 과정에서 생기는 복잡함을 모두 해소하고, 더욱 쉽게 업데이트에 접근할 수 있습니다.

  <br>

### 1.2.2 기타 특징

리액트는 프레임워크가 아니라 라이브러리입니다. 다른 웹 프레임워크가 Ajax, 데이터 모델링, 라우팅과 같은 기능을 내장하고 있는 반면, 리액트는 기타 기능은 직접 구현하여 사용해야 합니다. 다른 개발자들이 만든 라이브러리, 즉 라우팅에는 리액트 라우터(react-router), Ajax 처리에는 axios나 fetch, 상태 관리에는 리덕스(redux)나 MobX를 사용하여 빈 자리를 채우면 됩니다. 해당 분야에서 마음에 드는 라이브러리를 사용하면 되니까 자신의 취향대로 스택을 설정할 수 있다는 장점이 있지만, 여러 라이브러리를 접해야 한다는 단점도 있습니다.
<br><br>
또 리액트는 다른 웹 프레임워크나 라이브러리와 혼용할 수도 있습니다. 예를 들어 Backbone.js, AngularJS 등의 프레임워크와 함께 언제든지 사용할 수 있습니다.
<br><br>

> <br>프레임워크와 라이브러리의 차이<br><br>1. 프레임워크 (Framework)<br>
> 프레임워크는 뼈대나 기반구조를 뜻하는데, Application 개발 시 필수적인 코드, 알고리즘, 데이터베이스 연동 등과 같은 기능들을 위해 어느정도 뼈대(구조)를 제공해주는 것입니다. 그러므로 그러한 뼈대 위에 프로그래머가 코드를 작성하여 Application을 완성시켜야 합니다. 어느정도 뼈대를 제공해 주기 때문에, 객체 지향 개발을 하면서 일관성 부족 등의 문제를 해결해 줍니다. <br><br>2. 라이브러리(Library)<br>Library는 특정 기능에 대한 도구 or 함수들을 모은 집합입니다. 즉, 프로그래머가 개발하는데 필요한 것들을 모아둔 것입니다.
> Library는 프로그래머라면 누구나 한번쯤은 써봤을 것이며, 스스로 써보지 않았다라고 생각하는 사람도 라이브러리가 무엇인지 몰라서 그렇게 얘기하는 것일 뿐, 자기도 모르게 써보았을 것입니다.<br><Br>3. Framework와 Library의 차이 - Inversion Of Control<br>Framework와 Library의 차이는 Flow(흐름)에 대한 제어 권한이 어디에 있느냐의 차이입니다. 프레임워크는 전체적인 흐름을 자체적으로 가지고 있으며, 프로그래머가 그 안에 필요한 코드를 작성하는 반면에 라이브러리는 사용자가 흐름에 대해 제어를 하며 필요한 상황에 가져다 쓰는 것입니다. <br><br>
> 이 내용을 한 문장으로 정리하자면 프레임워크에는 제어의 역전(Inversion Of Control)이 적용되어있다는 것입니다.
> <br>
>
> > 제어의 역전(Inversion Of Control)이란 어떠한 일을 하도록 만들어진 프레임워크에 제어의 권한을 넘김으로써 클라이언트 코드가 신경서야 할 것을 줄이는 전략입니다. 일반적으로 우리는 프로젝트를 생성하고 Main함수를 만들어서 시작지점을 형성합니다. 그리고 Main 함수에서 프로그램의 흐름을 정하는 것은 프로그래머의 몫으로 우리가 어떠한 순서를 부여하느냐에 따라서 흐름을 제어하는 것이 일반적인 사고입니다. <br>
> > 하지만 여기서 프레임워크는 일반적인 사고와 반대되는 모습을 보여주는데 실행의 흐름을 프레임워크 자체가 가지고 있어서 우리의 코드를 프레임워크안에 넣어서 개발을 진행해야 합니다. 실제로 Maven과 같은 프레임워크의 프로젝트를 생성해보면 어느정도 뼈대를 만들어서 그 안에 필요에 따라 우리의 코드를 넣습니다. 일반적으로 프로그래머가 가지고 있어야하는 제어의 권한을 프레임워크에게 주었기 때문에 우리는 이를 제어의 역전이라고 말합니다. <br><br> > > ![image](https://user-images.githubusercontent.com/78855917/124514008-038b3180-de17-11eb-931b-a3af897f40d2.png) > > <br><br>
> > 출처: https://mangkyu.tistory.com/4 [MangKyu's Diary] <br><br>

<br><br>

---

<br><br>

# 2장. JSX

<br>

## 2.1 코드 이해하기

<br>

```js
import React from "react";
```

이 코드는 리액트를 불러와서 사용할 수 있게 해줍니다. 리액트 프로젝트를 만들 때 node_modules라는 디렉터리도 함께 생성되는데요. 프로젝트 생성 과정에서 node_modules 디렉터리에 react 모듈이 설치됩니다. 그리고 이렇게 import 구문을 통해 리액트를 불러와서 사용할 수 있는 것이죠.
<br><br>
이렇게 모듈을 불러와서 사용하는 것은 사실 원래 브라우저에는 없던 기능입니다. 브라우저가 아닌 환경에서 자바스크립트를 실행할 수 있게 해주는 환경인 Node.js에서 지원하는 기능입니다. 이러한 기능을 브라우저에서도 사용하기 위해 번들러(bundler)를 사용합니다. 번들(bundle)은 묶는다는 뜻입니다. 즉, 파일을 묶듯이 연결하는 것이죠.
<br><br>
![image](https://user-images.githubusercontent.com/78855917/124629995-f0cb3800-debc-11eb-808c-b789f863b587.png)
<br><br>
대표적인 번들러로 웹팩, Parcel, browserify라는 도구들이 있으며, 각 도구마다 특성이 다릅니다. 리액트 프로젝트에서는 주로 웹팩을 사용하는 추세입니다. 편의성과 확장성이 다른 도구보다 뛰어나기 때문입니다. 번들러 도구를 사용하면 import(또는 require)로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 줍니다. 또 최적화 과정에서 여러 개의 파일로 분리될 수도 있습니다. 이 책의 프로젝트에서는 src/index.js를 시작으로 필요한 파일을 다 불러와서 번들링하게 됩니다.
<br><br>
리액트를 불러오는 코드 하단에는 다음과 같이 SVG 파일과 CSS 파일을 import하는 코드가 있습니다.

```js
import logo from "./logo.svg";
import "./App.css";
```

웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있습니다. 이렇게 파일들을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당합니다. 로더는 여러 가지 종류가 있습니다. 예를 들어 css-loader는 CSS 파일을, file-loader는 웹 폰트나 미디어 파일 등을 불러올 수 있게 해 줍니다. 그리고 babel-loader는 자바스크립트 파일들을 불러오면서 최신 자바스크립트 문법으로 작성된 코드를 바벨이라는 도구를 사용하여 ES5 문법으로 변환해 줍니다. 이는 구버전 웹 브라우저와 호환하기 위해서입니다. JSX라는 문법도 정식 자바스크립트 문법이 아니므로 ES5 형태의 코드로 변환해야 합니다.
<br><br>
웹팩의 로더는 원래 직접 설치하고 설정해야 하지만 리액트 프로젝트를 만들 때 사용했던 create-react-app이 번거로운 작업을 모두 대신해 주기 때문에 우리는 별도의 설정을 할 필요가 없습니다.

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

이 코드는 App이라는 컴포넌트를 만들어 줍니다. function 키워드를 사용하여 컴포넌트를 만들었지요? 이러한 컴포넌트를 함수형 컴포넌트라고 부릅니다. 프로젝트에서 컴포넌트를 렌더링하면(렌더링이란 '보여 준다'는 것을 의미합니다) 함수에서 반환하고 있는 내용을 나타냅니다. 이런 코드는 JSX라고 부릅니다.
<br><br>

---

## 2.2 JSX란?

<br>
JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼습니다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됩니다.

```js
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
```

이렇게 작성된 코드는 다음과 같이 변환됩니다.

```js
function App() {
  return React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("b", null, "react")
  );
}
```

만약 컴포넌트를 렌더링 할때마다 JSX 코드를 작성하는 것이 아니라 위 코드처럼 매번 React.createElement 함수를 사용해야 한다면 매우 불편하겠지요? JSX를 사용하면 매우 편하게 UI를 렌더링할 수 있습니다.
<br>
<br>

> <br>그러면 JSX도 자바스크립트 문법이라고 할 수 있을까요? <br><br>
> JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법이 아닙니다. 바벨에서는 여러 문법을 지원할 수 있도록 preset 및 plugin을 설정합니다. 바벨을 통해 개발자들이 임의로 만든 문법, 혹은 차기 자바스크립트의 문법들을 사용할 수 있습니다.<br><br>

<br>

---

## 2.3 JSX의 장점

<br>

### 2.3.1 보기 쉽고 익숙하다

<br>
일반 자바스크립트만 사용한 코드와 JSX로 작성한 코드를 한번 비교하면, JSX를 사용하는 편이 더 가독성이 높고 작성하기도 쉽다고 느껴집니다. 이것이 JSX를 사용하는 주된 이유입니다.

<br>
<br>

### 2.3.2 더욱 높은 활용도

<br>
JSX에서는 우리가 알고 있는 div나 span 같은 HTML 태그를 사용할 수 있을 뿐만 아니라, 앞으로 만들 컴포넌트도 JSX 안에서 작성할 수 있습니다. src/index.js 파일을 열어 보면 이 App 컴포넌트를 마치 HTML 태그 쓰듯이 그냥 작성합니다.
<br><br>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  document.getElementById('root')
);
```

<br>

> <br>ReactDOM.render는 무엇인가요?
> <br><br>
> 이 코드는 컴포넌트를 페이지에 렌더링 하는 역할을 하며, react-dom 모듈을 불러와 사용할 수 있습니다. 이 함수의 첫 번째 파라미터에는 페이지에 렌더링할 내용을 JSX 형태로 작성하고, 두 번째 파라미터에는 해당 JSX를 렌더링 할 document 내부 요소를 설정합니다.<br><br>

<br>

---

## 2.4 JSX 문법

<br>

### 2.4.1 감싸인 요소

<br>
컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 합니다.
<br><br>

```js
import React from 'react';

function App () {
  return (
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
  )
}

export default App;
```

이런 형태의 코드는 제대로 작동하지 않습니다.
<br><br>

```
Failed to compile.

./src/App.js
  Line 6: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
  Did you want a JSX fragment <>...</>?
```

요소 여러 개가 부모 요소 하나에 의하여 감싸져 있지 않기 때문에 오류가 발생했습니다. 이 오류는 다음과 같이 코드를 작성하여 해결할 수 있습니다.
<br><br>

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

<br>
리액트 컴포너틑에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 할까요? 그것은 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다. 그런데 여기서 꼭 div 요소를 사용하고 싶지 않을 수도 있습니다. 그런 경우에는 리액트 v16 이상부터 도입된 Fragment라는 기능을 사용하면 됩니다.
<br><br>

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

<br>

코드 상단 import 구문에서 react 모듈에 들어 있는 Fragment라는 컴포넌트를 추가로 불러옵니다. Fragment는 다음과 같은 형태로도 표현할 수 있습니다.
<br><br>

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

<br>

### 2.4.2 자바스크립트 표현

<br>
JSX 안에서는 자바스크립트 표현식을 쓸 수 있습니다. 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 됩니다.
<br><br>

```js
import React from 'react'l

function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

<br>

> <br>ES6의 const와 let
> <br><br>
> const는 ES6 문법에서 새로 도입되었으며 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용하는 키워드 입니다. let은 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드입니다.
> <br><br>
> ES6 이전에는 값을 담는 데 var 키워드를 사용했는데요. var 키워드는 scope(해당 값을 사용할 수 있는 코드 영역)가 함수 단위입니다.<br><br>

```js
function myFunction() {
  var a = "hello";
  if (true) {
    var a = "bye";
    console.log(a); // bye
  }
  console.log(a); // bye
}
myFunction();
```

> <br>if문 바깥에서 var 값을 hello로 선언하고, if 문 내부에서 bye로 설정했습니다. if 문 내부에서 새로 선언했음에도 if 문 밖에서 a를 조회하면 변경된 값이 나타납니다. 이런 결점을 해결해 주는 것이 바로 let과 const입니다.<br><br>

```js
function myFunction() {
  let a = 1;
  if (true) {
    let a = 2;
    console.log(a); // 2
  }
  console.log(a); // 1
}
myFunction();
```

> <br>let과 const는 scope가 함수 단위가 아닌 블록 단위이므로, if 문 내부에서 선언한 a 값은 if 문 밖의 a 값을 변경하지 않습니다.
> <br><br> let과 const를 사용할 때 같은 블록 내부에서 중복 선언이 불가능하다는 점에 주의하세요. <br><br>

```js
let a = 1;
let a = 2; // 오류 : Uncaught SyntaxError: Identifier 'a' has already been declared.
```

> <br> 그리고 const는 한번 선언하면 재설정할 수 없습니다.
> <br><br>

```js
const b = 1;
b = 2; // Uncaught TypeError: Assignment to constant variable.
```

> <br> let은 한번 선언한 후 값이 유동적으로 변할 수 있을 때만(ex: for 문) 사용하고, const는 한번 설정한 후 변할 일이 없는 값에 사용합니다. 편하게 생각하면 기본적으로 const를 사용하고, 해당 값을 바꾸어야 할 때는 let을 사용하면 되겠습니다.
> <br><br>

<br>

### 2.4.3 if 문 대신 조건부 연산자

<br>
JSX 내부의 자바스크리트 표현식에서 if 문을 사용할 수는 없습니다. 하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부 연산자를 사용하면 됩니다. 조건부 연산자의 또 다른 이름은 삼항 연산자입니다.
<br><br>

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

<br>
이렇게 코드를 작성한 후 저장하면 브라우저에서 '리액트입니다'라는 문구를 볼 수 있습니다. 하지만 name 값을 다른 값으로 바꾸면, '리액트가 아닙니다.'라는 문구가 나타날 것입니다.
<br><br>

### 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

<br>
개발하다 보면 특정 조건을 만족할 때 내용을 보여 주고, 만족하지 않을 때 아예 아무것도 렌더링 하지 않아야 하는 상황이 올 수 있습니다. && 연산자를 사용해서 조건부 렌더링을 할 수 있습니다.
<br><br>

```js
import React from "react";

function App() {
  const name = "뤼왝트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}

export default App;
```

<br>
&& 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문입니다. 하지만 falsey한 값인 0은 예외적으로 화면에 나타납니다.
<br><br>

> <br> JSX는 언제 괄호로 감싸야 하나요?
> <br><br>JSX를 여러 줄로 작성할 때 괄호로 감싸고, 한 줄로 표현할 수 있는 JSX는 감싸지 않습니다. JSX를 괄호로 감싸는 것은 필수 사항이 아닙니다. 감싸도 되고 감싸지 않아도 됩니다.
> <br><br>

<br>

### 2.4.5 undefined를 렌더링하지 않기

<br>
리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 됩니다. 예를 들어 다음과 같은 코드는 오류를 발생시킵니다.
<br><br>

```js
import React from "react";
import "./App.css";

function App() {
  const name = undefined;
  return name;
}

export default App;
```

<br>

코드를 저장한 후 브라우저를 확인해 보면 다음과 같은 오류를 볼 수 있습니다.

```
App(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
```

<br>

어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있습니다.
<br><br>

```js
import React from "react";
import "./App.css";

function App() {
  const name = undefined;
  return name || "값이 undefined입니다.";
}

export default App;
```

<br>

반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮스니다.
<br><br>

```js
import React from "react";
import "./App.css";

function App() {
  const name = undefined;
  return <div>{name}</div>;
}

export default App;
```

<br>

### 2.4.6 인라인 스타일링

<br>
리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 합니다. 스타일 이름 중에서 background-color 처럼 - 문자가 포함되는 이름이 있는데요. 이러한 이름은 - 문자를 없애고 카멜 표기법(camelCase)으로 작성해야 합니다. 따라서 background-color는 backgroundColor로 작성합니다.
<br><br>

```js
import React from "react";

function App() {
  const name = "리액트";
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 px로 지정됩니다.
  };
  return <div style={style}>{name} </div>;
}

export default App;
```

<br>
미리 선언하지 않고 바로 style 값을 지정하고 싶다면 다음과 같이 작성하면 됩니다.
<br><br>

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

<br>

### 2.4.7 class 대신 className

<br>
일반 HTML에서 CSS 클래스를 사용할 때는 class라는 속성을 설정합니다. 하지만 JSX에서는 class가 아닌 className으로 설정해 주어야 합니다.
<br><br>

```css
.react {
  background: aqua;
  color: black;
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
}
```

```js
import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;
```

<br>
JSX를 작성할 때 CSS 클래스를 설정하는 과정에서 className이 아닌 class 값을 설정해도 스타일이 적용되기는 합니다. 하지만 그렇게 사용하면 브라우저 개발자 도구의 Console 탭에 다음과 같은 경고가 나타납니다.
<br>

```
Warning: Invalid DOM Property `class`. Did you mean `className`?
    in div (at App.js:6)
    in APP (at src/index.js:7)
```

리액트 v16부터는 class를 className으로 변환시켜 주고 경고를 띄웁니다.
<br><br>

### 2.4.8 꼭 닫아야 하는 태그

<br>
JSX에서는 태그를 닫지 않으면 오류가 발생합니다.
<br><br>

```js
import React from 'react';
import './App.css';


function App() {
  const name = '리액트';
  return (
    <>
      <div className="react">{name}</div>
      <input>
    </>
  );
}



export default App;
```

<br>
코드를 저장하면 개발 서버가 실행 중인 터미널에서 다음과 같은 오류가 나타날 것입니다.
<br>

```
Failed to compile.


./src/App.js
Line 10:  Parsing error: Unterminated JSX contents
```

<br>
이 오류를 해결하려면 다음과 같이 input 태그를 닫아 주어야 합니다.
<br><br>

```js
import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input></input>
    </>
  );
}

export default App;
```

<br>

### 2.4.9 주석

<br>
JSX 안에서 주석을 작성하는 방법은 일반 자바스크립트에서 주석을 작성할 때와 조금 다릅니다.
<br><br>

```js
import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 / 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}

export default App;
```

<br>
JSX 내부에서 주석을 작성할 때는 {/*...*/}와 같은 형식으로 작성합니다. 이렇게 여러 줄로 작성할 수도 있습니다. 그리고 시작 태그를 여러 줄로 작성할 때는 그 내부에서 // ... 과 같은 형태의 주석도 작성할 수 있습니다. 만약 일반 자바스크립트에서 주석을 작성할 때처럼 아무 데나 주석을 작성하면 그 주석은 페이지에 고스란히 나타납니다.

---

<br>

# 3장. 컴포넌트

<br>

## 3.1 클래스형 컴포넌트

<br>

컴포넌트를 선언하는 방식은 두 가지입니다. 하나는 함수형 컴포넌트이고, 또 다른 하나는 클래스형 컴포넌트입니다.

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

<br>
클래스형 컴포넌트로 바뀌었지만 역할은 이전에 보았던 함수형 컴포넌트와 똑같습니다. 클래스형 컴포넌트와 함수형 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 이후 배울 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것입니다.
<br><br>

> <br>ES6의 클래스 문법
> <br><br>
> ES6 이전에는 자바스크립트에 클래스(class)가 없었습니다. 개념 자체는 있었지만, 그것을 구현하려면 class 대신에 prototype이라는 문법을 사용하여 다음과 같이 작업해야 했습니다.
> <br><br>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function () {
  console.log(this.name + ": 멍멍 ");
};
var dog = new Dog("검둥이");
dog.say(); // 검둥이: 멍멍
```

> <br>ES6 문법부터는 이것과 기능이 똑같은 코드를 class를 사용하여 다음과 같이 작성할 수 있습니다.
> <br><br>

```js
class Dog {
  constructor(
    name //  class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드
  ) {
    this.name = name;
  }
  say() {
    console.log(this.name + ": 멍멍");
  }
}

const dog = new Dog("흰둥이");
dog.say(); // 흰둥이: 멍멍
```

<br>

클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 합니다. <br>
컴포넌트를 선언할 수 있는 두 가지 방법 중 어느 상황에 함수형 컴포넌트를 사용해야 할까요?
<br><br>
함수형 컴포넌트의 장점을 나열해 보면 다음과 같습니다. 우선 클래스형 컴포넌트보다 선언하기가 훨씬 편합니다. 메모리 자원도 클래스형 컴포넌트보다 덜 사용합니다. 또한, 프로젝트를 완성하여 빌드한 후 배포할 때도 함수형 컴포넌트를 사용하는 것이 결과물의 파일 크기가 더 작습니다.
<br><br>
함수형 컴포넌트의 주요 단점은 state와 라이프사이클 API의 사용이 불가능하다는 점인데요. 이 단점은 리액트 v16.8 어데이트 이후 Hooks라는 기능이 도입되면서 해결되었습니다. 완전히 클래스형 컴포넌트와 똑같이 사용할 수 있는 것은 아니지만 조금 다른 방식으로 비슷한 작업을 할 수 있게 되었습니다.
<br><br>
리액트 공식 매뉴얼에서는 컴포넌트를 새로 작성할 때 함수형 컴포넌트와 Hooks를 사용하도록 권장하고 있습니다. 하지만 그렇다고 해서 클래스형 컴포넌트가 사라지는 것은 아니므로 클래스형 컴포넌트의 기능은 꼭 알아 두어야 합니다.

<br><br>

---

## 3.2 첫 컴포넌트 생성

<br>
첫 번째 컴포넌트를 만들어 봅시다. 먼저 함수형 컴포넌트로 작성하고, 나중에 클래스형 컴포넌트로도 작성해 보겠습니다.
<br><br>

```js
import React from "react";

const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};

export default MyComponent;
```

<br>
함수를 작성할 때 function 키워드를 사용하는 대신에 () => {}를 사용하여 함수를 만들어 주었습니다. 이는 ES6에 도입된 화살표 함수 문법입니다.
<br><br>

> <br>ES6의 화살표 함수
> <br><br> 화살표 함수(arrow function)는 ES6 문법에서 함수를 표현하는 새로운 방식입니다. 그렇다고 해서 기존 function을 이용한 함수 선언 방식을 아예 대체하지는 않습니다. 사용 용도가 조금 다릅니다. 이 문법은 주로 함수를 파라미터로 전달할 때 유용합니다. <br><br>

```js
setTimeout(function () {
  console.log("hello world");
}, 1000);

setTimeout(() => {
  console.log("hello world");
}, 1000);
```

> <br> 이 문법이 기존 function을 대체할 수 없는 것은 용도가 다르기 때문입니다. 무엇보다 서로 기리키고 있는 this 값이 다릅니다. 다음 코드를 한번 확인해 보세요. <br><br>

```js
function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: function () {
      console.log(this.name + ": 멍멍!");
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!

function WhiteDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: () => {
      console.log(this.name + ": 멍멍!");
    },
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이: 멍멍!
```

> <br>function( )을 사용했을 때는 검둥이가 나타나고, ( ) => 를 사용했을 때는 흰둥이가 나타납니다. 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.<br><br>

<br>

### 3.2.3 모듈 내보내기 및 불러오기

<br>

#### 3.2.3.1 모듈 내보내기(export)

<br>
방금 작성한 컴포넌트에서 맨 아래 코드를 확인해 보세요. 
<br><br>

```js
export default MyComponent;
```

<br>
이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정합니다.
<br><br>

#### 3.2.3.2 모듈 불러오기 (import)

<br>
이번에는 App 컴포넌트에서 MyComponent 컴포넌트를 불러와서 사용해 봅시다.
<br><br>

```js
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

export default App;
```

<br>
위 코드에서 import 구문을 사용하는 두 번째 줄은 우리가 만든 MyComponent 컴포넌트를 불러옵니다.
<br><br>

---

## 3.3 props

<br>
props는 porperties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현 상황에서는 App 컴포넌트가 부모 컴포넌트입니다)에서 설정할 수 있습니다.
<br><br>

### 3.3.1 JSX 내부에서 props 렌더링

<br>
우선 MyComponent 컴포넌트를 수정하여 해당 컴포넌트에서 name이라는 props를 렌더링하도록 설정해 봅시다. props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있습니다.
<br><br>

```js
import React from "react";

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

export default MyComponent;
```

<br>

### 3.3.2 컴포넌트를 사용할 때 props 값 지정하기

<br>
App 컴포넌트에서 MyComponent의 props 값을 지정해 보겠습니다. 
<br><br>

```js
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="React" />;
};

export default App;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/124785857-2ede5f80-df82-11eb-9cd5-f45e8c50a398.png)

<br>

### 3.3.3 props 기본값 설정: defaultProps

<br>

```js
(...)
  return <MyComponent />;
(...)
```

<br>
현재 name 값을 지정하지 않았기 때문에 브라우저에는 '안녕하세요, 제 이름은 입니다.'라는 내용이 보일 것입니다. 지금처럼 props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정하는 defaultProps에 대해 알아봅시다. 이 값을 설정하는 방법은 다음과 같습니다.
<br><br>

```js
import React from "react";

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/124786530-bdeb7780-df82-11eb-8074-c7f3a1068738.png)
<br>

### 3.3.4 태그 사이의 내용을 보여 주는 children

<br>
리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여 주는 props가 있는데요. 바로 children입니다.
<br><br>

```js
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>리액트</MyComponent>;
};

export default App;
```

<br>
위 코드에서 MyComponent 태그 사이에 작성한 리액트라는 문자열을 MyComponent 내부에서 보여 주려면 props.children 값을 보여 주어야 합니다.
<br><br>

```js
import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름 ",
};

export default MyComponent;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/124788281-2d159b80-df84-11eb-85b9-4563b32c759b.png)
<br>

### 3.3.5 비구조화 할당 문법을 통해 prop 내부 값 추출하기

<br>
현재 MyComponent에서 props 값을 조회할 때마다 props.name, props.children과 같이 props.이라는 키워드를 앞에 붙여 주고 있습니다. 이러한 작업을 더 편하게 하기 위해 ES6의 비구조화 할당 문법을 사용하여 내부 값을 바로 추출하는 방법을 알아보겠습니다.
<br><br>

```js
import React from "react";

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultPropps = {
  name: "기본 이름",
};

export default MyComponent;
```

<br>

이렇게 코드를 작성하면 name 값과 children 값을 더 짧은 코드로 사용할 수 있습니다. <br>
방금 사용한, 객체에서 값을 추출하는 문법을 비구조화 할당(destructuring assignment)이라고 부릅니다. 이 문법은 구조 분해 문법이라고도 불리며, 함수의 파라미터 부분에서도 사용할 수 있습니다. 만약 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것이죠.
<br><br>

```js
import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
```

<br>

### 3.3.6 propTypes를 통한 props 검증

<br>
컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때는 propType를 사용합니다. 컴포넌트의 propTypes를 지정하는 방법은 defaultProp을 설정하는 것과 비슷합니다. 우선 propTypes를 사용하려면 코드 상단에 import 구문을 사용하여 불러와야 합니다.
<br><br>

```js
import React from 'react';
import propTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  (...)

MyComponent.propTypes = {
  name: Proptypes.string
};

export default MyComponent;
```

<br>
이렇게 설정해 주면 name 값은 무조건 문자열(string) 형태로 전달해야 된다는 것을 의미합니다. 만약 컴포넌트에 설정한 props가 propTypes에서 지정한 형태와 일치하지 않는다면 브라우저 개발자 도구의 Console 탭에 다음과 같은 결과가 나타납니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/124791512-13c21e80-df87-11eb-8222-f51137f9b011.png)
<br>

값이 나타나기는 했지만, 콘솔에 경고 메시지를 출력하여 개발자에게 propTypes가 잘못되었다는 것을 알려 줍니다.
<br>

#### 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정

<br>
propTypes를 지정하지 않았을 때 경고 메시지를 띄워 주는 작업을 해 봅시다. propTypes를 지정할 때 뒤에 isRequired를 붙여 주면 됩니다. 이번에는 favoriteNumber라는 숫자를 필수 props로 지정해 보겠습니다.
<br><br>

```js
import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
```

<br>
코드를 저장하고 다시 개발자 도구의 Console을 확인해 보세요. 아직 favoriteNumber를 설정하지 않았기 때문에 다음과 같은 경고가 나타날 것입니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/124792292-d5792f00-df87-11eb-8b33-99fbad9d7645.png)

<br>

#### 3.3.6.2 더 많은 PropTypes 종류

<br>
PropTypes에서는 여러 가지 종류를 설정할 수 있습니다. 어떤 것이 있는지 짚고 넘어가 봅시다.<br><br>

> [더 많은 PropTypes 종류](https://thebook.io/080203/ch03/03/06/02/).

<br>

### 3.3.7 클래스형 컴포넌트에서 props 사용하기

<br>
클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 됩니다. 그리고 defaultProps와 propTypes는 똑같은 방식으로 설정할 수 있습니다.
<br><br>

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}



MyComponent.defaultProps = {
  name: '기본 이름'
};



MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};



export default MyComponent;

// defaultProps와 propTypes class 내부에서 지정하는 방법

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (…);
  }
}



export default MyComponent;
```

<br>

---

## 3.4 state

<br>
리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다. props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있습니다. props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 합니다.  <br><br>
리액트에서는 두 가지 종류의 state가 있습니다. 하나는 클래스형 컴포넌트가 지니고 있는 state이고, 다른 하나는 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state입니다.
<br><br>

### 3.4.1 클래스형 컴포넌트의 state

```js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.tate = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <button
          //onclick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onclick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

<br>

위 파일에서 각 코드가 어떤 역할을 하는지 알아보겠습니다.
<br><br>
컴포넌트에 state를 설정할 때는 다음과 같이 constructor 메서드를 작성하여 설정합니다.
<br><Br>

```js
constructor(props) {
  super(props);
  // state의 초깃값 설정하기
  this.tate = {
    number: 0
  };
}
```

<br>

이는 컴포넌트의 생성자 메서드인데요. 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 합니다. 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줍니다.
<br><br>
그 다음에는 this.state 값에 초깃값을 설정해 주었습니다. 컴포넌트의 state는 객체 형식이어야 합니다.
<br><br>

```js
render() {
  const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다.
  return (
    <div>
    <h1>{ number }</h1>
    <button
    //onclick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
    onclick={() => {
      //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
      this.setState({ number: number + 1 });
    }}
  >
    +1
    </button>
  </div>
  );
}
```

<br>
render 함수에서 현재 state를 조회할 때는 this.state를 조회하면 됩니다. 그리고 button 안에 onClick이라는 값을 props로 넣어 주었는데, 이는 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 해 줍니다. 이를 이벤트를 설정한다고 합니다.
<br><br>
이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용하여 넣어 주어야 합니다. 함수 내부에서는 this.setState라는 함수를 사용했는데요. 이 함수가 state 값을 바꿀 수 있게 해 줍니다. 
<br><br>

#### 3.4.1.1 state 객체 안에 여러 값이 있을 때

<br>
state 객체 안에는 여러 값이 있을 수 있습니다.
<br><br>

```js
(...)
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
(...)
```

<br>
현재 state 안에 fixedNumber라는 또 다른 값을 추가해 주었습니다. 버튼이 클릭될 때 fixedNumber 값은 그대로 두고 number 값만 바꿀 것인데요. 그렇다고 해서 this.setState 함수를 사용할 때 인자로 전달되는 개체 내부에 fixedNumber를 넣어 주지는 않았습니다. this.setState 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꾸어 줍니다.
<br><br>

#### 3.4.1.2 state를 constructor에서 꺼내기

<br>
앞에서 state의 초깃값을 지정하기 위해 constructor 메서드를 선언해 주었는데요. 또 다른 방식으로도 state의 초깃값을 지정해 줄 수 있습니다.
<br><br>

```js
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (...);
  }
}

export default Counter;
```

<br>
이렇게 하면 constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있습니다.
<br><br>

#### 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기

<br>
this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트됩니다. 만약 다음과 같이 onClick에 설정한 함수 내부에서 this.setState를 두 번 호출하면 어떻게 될까요?
<br><br>

```js
onClick={() => {
  // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
  this.setState({ number: number + 1 });
  this.setState({ number: this.state.number + 1 });
}}
```

<br>
코드를 위와 같이 작성하면 this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 1씩 더해집니다. this.setState를 사용한다고 해서 state 값이 바로 바뀌지는 않기 때문입니다. 이에 대한 해결책은 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어 주는 것입니다.
<br><br>

```js
this.setState((prevState, props)) => {
  return {
    //업데이트 하고 싶은 내용
  }
})
```

<br>
여기서 prevState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킵니다.
<br><br>

### 3.4.2 함수형 컴포넌트에서 useState 사용하기

<br>
리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 state를 사용할 수 없었습니다. 하지만 16.8 이후부터는 useState라는 함수를 사용하여 함수형 컴포넌트에서도 state를 사용할 수 있게 되었습니다. <br><br>

#### 3.4.2.1 배열 비구조화 할당

<br>
Hooks를 사용하기 전에 배열 비구조화 할당이라는 것을 알아봅시다. 배열 비구조화 할당은 이전에 배운 객체 비구조화 할당과 비슷합니다. 즉, 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해 주는 문법입니다.
<br><br>

```js
const array = [1, 2];
const one = array[0];
const tow = array[1];

// 배열 비구조화 할당 사용
const array = [1, 2];
const [one, two] = array;
```

<br>

#### 3.4.2.2 useState 사용하기

<br>
배열 비구조화 할당 문법을 알고 나면 useState 사용 방법을 쉽게 이해할 수 있습니다.
<br><br>

```js
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}></h1>
    </div>
  );
};

export default Say;
```

<br>
useState 함수의 인자에는 상태의 초깃값을 넣어 줍니다. 클래스형 컴포넌트에서의 state 초깃값은 객체 형태를 넣어 주어야 한다고 배웠는데요. useState에서는 반드시 객체가 아니어도 상관없습니다. 값의 형태는 자유입니다. 숫자일 수도, 문자열일 수도, 객체일 수도, 배열일 수도 있습니다.<br><br>
함수를 호출하면 배열이 반환되는데요. 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수입니다. 이 함수를 세터(Setter) 함수라고 부릅니다. 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있습니다.
<br><br>

#### 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기

<br>
useState는 한 컴포넌트에서 여러 번 사용해도 상관없습니다.
<br><br>

```js
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
```

<br>

## 3.5 state를 사용할 때 주의 사항

<br>
클래스형 컴포넌트든 함수형 컴포넌트든 state를 사용할 때는 주의해야 할 사항이 있습니다. state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달 받은 세터 함수를 사용해야 합니다. 예를 들어 다음 코드는 잘못된 코드입니다.
<br><br>

```js
// 클래스형 컴포넌트에서...
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수형 컴포넌트에서..
const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;
```

<br>
그렇다면 배열이나 객체를 업데이트해야 할 때는 어떻게 해야 할까요? 이런 상황에서는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트합니다. 사본을 만들어서 업데이트하는 예시는 다음과 같습니다.
<br><br>

```js
// 객체 다루기
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기

// 배열 다루기
const array = [
{ id: 1, value: true },
{ id: 2, value: true },
{ id: 3, value: false }
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter(item => item.id != = 2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정
```

<br>
객체애 대한 사본을 만들 때는 spread 연산자라 불리는 ...을 사용하여 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수들을 활용합니다.
<br><br>

---

## 3.6 정리

<br>
props와 state는 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있지만, 그 역할은 매우 다릅니다. props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있습니다. <br><br>
props를 사용한다고 해서 값이 무조건 고정적이지는 않습니다. 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있습니다.
<br><br>

---

<br>

# 4장. 이벤트 핸들링

<br>
사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트 (event) 라고 합니다. 예를 들어 버튼에 마우스 커서를 올렸을 때는 onmouseover 이벤트를 실행하고, 클릭했을 때는 onclick 이벤트를 실행합니다. Form 요소는 값이 바뀔 때 onchange 이벤트를 실행하죠. 리액트에서 이벤트를 다룰 때는 HTML에서 DOM 요소에 이벤트를 설정하는 방법과 비슷하면서도 좀 다릅니다. 한번 알아볼까요?
<br><br>

## 4.1 리액트의 이벤트 시스템

<br>

리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 인터페이스가 동일하기 때문에 사용법이 꽤 비슷합니다. 3장에서 작성한 버튼 코드를 다시 한 번 살펴봅시다.
<br><br>

```js
import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      (...)
```

<br>
사용법은 일반 HTML에서 이벤트를 작성하는 것과 비슷한데, 주의해야 할 몇 가지 사항이 있습니다.
<br><br>

### 4.1.1 이벤트를 사용할 때 주의 사항

<br>

1. <b>이벤트 이름은 카멜 표기법으로 작성합니다. </b>
   <br>예를 들어 HTML의 onclick은 리액트에서는 onClick으로 작성해야 합니다. 또 onkeyup은 onKeyUp으로 작성합니다.

2. <b>이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다. </b>
   <Br>HTML에서 이벤트를 설정할 때는 큰따옴표 안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달합니다. 앞서 버튼 예제에서도 화살표 함수 문법으로 함수를 만들어 전달했지요? 이렇게 바로 만들어서 전달해도 되고, 렌더링 부분 외부에 미리 만들어서 전달해도 됩니다.

3. <b> DOM 요소에만 이벤트를 설정할 수 있습니다. </b>
   <br> 즉 div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다.
   <br>예를 들어 다음과 같이 MyComponent에 onClick 값을 설정한다면 MyComponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라, 그냥 이름이 onClick인 props를 MyComponent에게 전달해 줄 뿐입니다. 따라서 컴포넌트에 자체적으로 이벤트를 설정할 수는 없습니다. 하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있죠.
   <br>

```js
<MyComponent onClick={doSomething}/>
// 이름이 onClick인 props를 MyComponent에 전달

<div onClick={this.props.onClick}>
  {/*(...)*/}
</div>
//onClick 기능을 가진 props를 DOM 이벤트로 설정
```

<br>

### 4.1.2 이벤트 종류

<br>
리액트에서 지원하는 이벤트 종류는 다음과 같습니다.
<Br><br>

> [리액트 이벤트 종류](https://ko.reactjs.org/docs/events.html)

<br>

---

## 4.2 예제로 이벤트 핸들링 익히기

<br>
그럼 예제로 이벤트 핸들리을 익혀 보겠습니다. 앞으로 실습할 각 단계는 다음과 같습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125161781-46eef280-e1bf-11eb-98c0-2aaed8fd8adb.png)

<br>

### 4.2.1 컴포넌트 생성 및 불러오기

<br>

### 4.2.2 onChange 이벤트 핸들링하기

<br>

#### 4.2.2.1 onChange 이벤트 설정

<br>
해당 컴포넌트에 input 요소를 렌더링하는 코드와 해당 요소에 onChange 이벤트를 설정하는 코드를 작성합니다.

```js
import React, { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e); // console.log(e.target.value)
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
```

<br>
여기서 콘솔에 기록되는 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체입니다. 네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용하면 됩니다. SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없습니다. 만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야 합니다. 예를 들어 onChange 이벤트가 발생할 때, 앞으로 변할 인풋 값인 e.target.value를 콘솔에 기록해 보겠습니다.
<br><br>

```js
onChange = {
  (e) => {
    console.log(e.target.value);
  }
}
```

<br>

![image](https://user-images.githubusercontent.com/78855917/125162394-85d27780-e1c2-11eb-9e69-fe8961f5c2a4.png)

값이 바뀔 때마다 바뀌는 값을 콘솔에 기록합니다.
<br><br>

#### 4.2.2.2 state에 input 값 담기

<br>
이번에는 3장에서 배운 state에 input 값을 담아 보겠습니다. 3장에서 배운 대로 생성자 메서드인 constructor에서 state 초깃값을 설정하고, 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트해 봅시다. 그 다음에는 input의 value 값을 state에 있는 값으로 설정하세요.
<br><br>

```js
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
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
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
```

<br>

### 4.2.3 임의 메서드 만들기

<br>
4.1.1 절의 주의 사항에서 <b>"이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다."</b> 라고 배웠습니다. 그렇기에 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주었습니다. 이 방법 대신 함수를 미리 준비하여 전달하는 방법도 있습니다. 성능상으로는 차이가 거의 없지만, 가독성은 훨씬 높습니다. 앞서 onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드를 만들어 보겠습니다.
<br><br>

#### 4.2.3.1 기본 방식

<br>

```js
import React, { Component } from 'react';


class EventPractice extends Component {



state = {
    message: "
  }



constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }



handleClick() {
    alert(this.state.message);
    this.setState({
      message: ''
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

<br>
함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버립니다. 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩(binding)하는 작업이 필요합니다. 만약 바인딩하지 않는 경우라면 this가 undefined를 가리키게 됩니다. 현재 constructor 함수에서 함수를 바인딩하는 작업이 이루어지고 있습니다.
<br><br>

#### 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성

<br>
메서드 바인딩은 생성자 메서드에서 하는 것이 정석입니다. 하지만 이 작업을 불편하다고 느낄 수도 있습니다. 새 메서드를 만들 때마다 constructor도 수정해야 하기 때문입니다. 이 작업을 좀 더 간단하게 하는 방법이 있습니다. 바로 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것입니다.
<br><br>

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

<br>

### 4.2.4 input 여러 개 다루기

<br>
input이 여러 개일 때는 어떻게 작업할까요? 메서드를 여러 개 만들어야 할까요? 물론 그것도 하나의 해법이기는 합니다만, 더 쉽게 처리하는 방법이 있습니다. <br><br>
바로 event 객체를 활용하는 것입니다. e.target.name 값을 사용하면 됩니다. onChange 이벤트 핸들러에서 e.target.name은 해당 인풋의 name을 가리킵니다. 지금은 message겠죠? 이 값을 사용하여 state를 설정하면 쉽게 해결할 수 있습니다. 다음 코드에서는 render 함수에서 name 값이 username인 input을 렌더링해 주었고, state 쪽에도 username이라는 값을 추가해 주었습니다. 그리고 handleChange도 조금 변경해 주었습니다.
<br><br>

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

<br>
여기서는 다음 코드가 핵심입니다.
<br><br>

```js
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};
```

<br>
객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다. 예를 들어 다음과 같은 객체를 만들면
<br><br>

```js
const name = "variantKey";
const object = {
  [name]: "value",
};
```

<br>
결과는 다음과 같습니다.
<br><br>

```js
{
  'variantKey': 'value'
}
```

<br><br>

---

## 4.3 함수형 컴포넌트로 구현해 보기

<br>
방금 우리가 했던 작업을 함수형 컴포넌트로도 똑같이 구현할 수 있습니다. 
<br><br>

```js
import React, { useState } from 'react';


const EventPractice = () => {
  const [username, setUsername] = useState(");
  const [message, setMessage] = useState(");
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername(");
    setMessage(");
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
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

<br>
위 코드에서는 e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만들어 주었습니다. 인풋이 두 개밖에 없다면 이런 코드도 나쁘지는 않습니다. 하지만 인풋의 개수가 많아질 것 같으면 e.target.name을 활용하는 것이 더 좋을 수도 있습니다. 이번에는 useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣어 보겠습니다.
<br><br>

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
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
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

<br>
e.target.name 값을 활용하려면, 위와 같이 useState를 쓸 때 인풋 값들이 들어 있는 form 객체를 사용해 주면 됩니다.
<br><br>

---

<br>

# 5장. ref: DOM에 이름 달기

<br>
일반 HTML에서 DOM 요소에 이름을 달 때는 id를 사용합니다. 특정 DOM 요소에 어떤 작업을 해야 할 때 이렇게 요소에 id를 달면 CSS에서 특정 id에 특정 스타일을 적용하거나 자바스크립트에서 해당 id를 가진 요소를 찾아서 작업할 수 있겠죠. 이렇게 HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법이 있습니다. 바로 ref(reference의 줄임말) 개념입니다.
<br><br>

> <br>리액트 컴포넌트 안에서는 id를 사용하면 안 되나요?
> <br><br> 리액트 컴포넌트 안에서도 id를 사용할 수는 있습니다. 하지만 특수한 경우가 아니면 사용을 권장하지 않습니다. 예를 들어 같은 컴포넌트를 여러 번 사용한다고 가정해 보세요. HTML에서 DOM의 id는 유일(unique)해야 하는데, 이런 상황에서는 중복 id를 가진 DOM이 여러 개 생기니 잘못된 사용입니다. ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않습니다.
> <br><br>

<Br>

## 5.1 ref는 어떤 상황에서 사용해야 할까?

<br>
먼저 ref는 어떤 상황에 사용해야 하는지 제대로 짚고 넘어가 봅시다. 정답은 '<b>DOM을 꼭 직접적으로 건드려야 할 때</b>'입니다. 예를 들어 일반 순수 자바스크립트 및 jQuery로 만든 웹 사이트에서 input을 검증할 때는 다음과 같이 특정 id를 가진 input에 클래스를 설정해 주지요. 하지만 리액트에서 이런 작업은 굳이 DOM에 접근하지 않아도 state로 구현할 수 있습니다. 이 장에서는 클래스형 컴포넌트에서 ref를 사용하는 방법을 알아보겠습니다. 함수형 컴포넌트에서 ref를 사용하려면 Hooks를 사용해야 하기 때문에 8장에서 Hooks를 배우면서 알아볼 것입니다.
<br><br>

### 5.1.1 예제 컴포넌트 생성

<br>

```css
.success {
  background-color: lightgreen;
}
.failure {
  background-color: lightcoral;
}
```

```js
import React, { Component } from 'react';
import './ValidationSample.css';


class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }



handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }



handleButtonClick => () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
  }



render() {
    return (
      <div>
        <input
          type=“password“
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}



export default ValidationSample;
```

<br>
input에서는 onChange 이벤트가 발생하면 handleChange를 호출하여 state의 password 값을 업데이트하게 했습니다. button에서는 onCLick 이벤트가 발생하면 handleButtonClick을 호출하여 clicked 값을 참으로 설정했고, validated 값을 검증 결과로 설정했습니다. <br><Br>
input의 className 값은 버튼을 누르기 전에는 비어 있는 문자열을 전달하며, 버튼을 누른 후에는 검증 결과에 따라 success 값 또는 failure 값을 설정합니다. 그리고 이 값에 따라 input 색상이 초록색 또는 빨간색으로 나타납니다.
<br><br>

### 5.1.2 DOM을 꼭 사용해야 하는 상황

<br>
앞 예제에서는 state를 사용하여 우리에게 필요한 기능을 구현했지만, 가끔 state 만으로 해결할 수 없는 기능이 있습니다. 어떤 상황인지 알아볼까요?
<br><Br>

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

<br>
이때는 어쩔 수 없이 DOM에 직접적으로 접근해야 하는데, 이를 위해 바로 ref를 사용합니다.
<br><br>

---

## 5.2 ref 사용

<br> 이제 프로젝트에서 ref를 사용해 봅시다. ref를 사용하는 방법은 두 가지입니다.
<br><br>

### 5.2.1 콜백 함수를 통한 ref 설정

<br>
ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것입니다. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됩니다. 이 콜백 함수는 ref 값을 파라미터로 전달 받습니다. 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 줍니다.
<br><br>

```js
<input
  ref={(ref) => {
    this.input = ref;
  }}
/>
// 콜백 함수 사용 예시
```

<br>
이렇게 하면 앞으로 this.input의 input 요소의 DOM을 가리킵니다. ref의 이름은 원하는 것으로 자유롭게 지정할 수 있습니다. DOM 타입과 관계없이 this.superman = ref처럼 마음대로 지정합니다.
<br><br>

### 5.2.2 createRef를 통한 ref 설정

<br>
ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용하는 것입니다. 이 함수를 사용해서 만들면 더 적은 코드로 쉽게 사용할 수 있습니다. 이 기능은 리액트 v16.3부터 도입되었으며 이전 버전에서는 작동하지 않습니다.
<br><br>

```js
import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
```

<br>
createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아 주어야 합니다. 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정이 완료됩니다. <br><br>
설정한 뒤 나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 됩니다. 콜백 함수를 사용할 때와 다른 점은 이렇게 뒷부분에 .current를 넣어 주어야 한다는 것입니다.
<br><br>

---

## 5.3 컴포넌트에 ref 달기

<br>
리액트에서는 컴포넌트에도 ref를 달 수 있습니다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씁니다. 컴포넌트에 ref를 다는 방법은 DOM에 ref를 다는 방법과 똑같습니다.
<br><br>

### 5.3.1 사용법

<br>

```js
<MyComponent ref={(ref) => [(this.myComponent = ref)]} />
```

<br>
이렇게 하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있습니다. 즉 내부의 ref에도 접근할 수 있습니다. (예: myComponent.handleClick, myComponent.input 등)
<br><br>

### 5.3.2 컴포넌트 초기 설정

<br>
먼저 ScrollBox라는 컴포넌트 파일을 만들겠습니다. JSX의 인라인 스타일링 문법으로 스크롤 박스를 만들어 보세요. 그 다음에는 최상위 DOM에 ref를 달아 주세요.
<br><br>

```js
import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      heigth: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

<br>

#### 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링

<br>

### 5.3.3 컴포넌트에 메서드 생성

<br>
컴포넌트에 스크롤바를 맨 아래쪽으로 내리는 메서드를 만들겠습니다. 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용합니다.
<br><br>

- scrollTop: 세로 스크롤바 위치(0~350)
- scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)
- clientHeight: 스크롤이 있는 박스의 높이(300)

<br>

```js
import React, { Component } from 'react';

class ScrollBox extends Component {

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    (...)
  }
}

export default ScrollBox;
```

<br>
이렇게 만든 메서드는 부모 컴포넌트인 App 컴포넌트에서 ScrollBox에 ref를 달면 사용할 수 있습니다.
<br><br>

### 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용

<br>
그럼 App 컴포넌트에서 ScrollBox에 ref를 달고 버튼을 만들어 누르면. ScrollBox 컴포넌트의 scrollToBottom 메서드를 실행하도록 코드를 작성하겠습니다.
<br><br>

```js
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
```

<br>
여기서 주의할 점이 하나 있습니다. 문법상으로는 onClick = {this.scrollBox.scrollBottom} 같은 형식으로 작성해도 틀린 것은 아닙니다. 하지만 컴포넌트가 처음 렌더링될 때는 this.scrollBox 값이 undefined 이므로 this.scrollBox.scrollToBottom 값을 읽어 오는 과정에서 오류가 발생합니다. 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollToBottom 메서드를 실행하면, 버튼을 누를 때 (이미 한 번 렌더링을 해서 this.scrollBox를 설정한 시점) this.scrollBox.scrollToBottom 값을 읽어 와서 실행하므로 오류가 발생하지 않습니다.
<br><br>

---

<br>

## 5.4 정리

<br>
컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용합니다. 먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는 반드시 고려한 후에 활용해야 합니다. <br><br>
이 시점에서 오해할 수 있는 부분이 있는데, 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용하다면 이는 잘못 사용된 것입니다. 컴포넌트끼리 데이터를 교류할 때는 언제나 데이터를 부모 <-> 자식 흐름으로 교류해야 합니다.

<br><br>

---

<br>

# 6장. 컴포넌트 반복

<br>
웹 애플리케이션을 만들다 보면 다음과 같이 반복되는 코드를 작성할 때가 있습니다.
<br><br>

```html
<li>...</li>
```

<Br>
지금은 li 태그 하나 뿐이라 그렇게 문제가 되지는 않을 것 같습니다. 하지만 코드가 좀 더 복잡하다면 어떨까요? 코드양은 더더욱 늘어날 것이며, 파일 용량도 쓸데없이 증가하겠죠. 이는 낭비입니다. 또 보여 주어야 할 데이터가 유동적이라면 이런 코드로는 절대로 관리하지 못합니다. 이 장에서는 리액트 프로젝트에서 반복적인 내용을 효율적으로 보여 주고 관리하는 방법을 알아 보겠습니다.
<br><br>

---

<br>

## 6.1 자바스크립트 배열의 map() 함수

<br>

자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있습니다. map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성합니다.
<br><br>

### 6.1.1 문법

<br>

```js
arr.map(callback, [thisArg]);
```

<br>

이 함수의 파라미터는 다음과 같습니다.
<br>

- callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지입니다.

  - currentValue: 현재 처리하고 있는 요소
  - index : 현재 처리하고 있는 요소의 index 값
  - array : 현재 처리하고 있는 원본 배열
    <br><br>

- thisArg(선택 항목) : callback 함수 내부에서 사용할 this 레퍼런스
  <br><br>

### 6.1.2 예제

<br>
map 함수를 사용하여 배열 [1,2,3,4,5]의 각 요소를 제곱해서 새로운 배열을 생성하겠습니다.
<br><br>

```js
var numbers = [1, 2, 3, 4, 5];

var processed = numbers.map(function (num) {
  return num * num;
});

console.log(processed);
```

<br>

![image](https://user-images.githubusercontent.com/78855917/125201268-4763b800-e2a9-11eb-828c-b366b17b5783.png)

<br>

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);
// ES6 문법으로 작성, var => const, function(...){...} => 화살표 함수
```

<br>

---

<br>

## 6.2 데이터 배열을 컴포넌트 배열로 변환하기

<br>
6.1절에서는 기존 배열에 있는 값들을 제곱하여 새로운 배열을 생성했습니다. 똑같은 원리로 기존 배열로 컴포넌트로 구성된 배열을 생성할 수도 있답니다.
<br><br>

### 6.2.1 컴포넌트 수정하기

<br>

```js
import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

<br>
문자열로 구성된 배열을 선언합니다. 그 배열 값을 사용하여 JSX 코드로 된 배열을 새로 생성한 후 nameList에 담습니다. map 함수에서 JSX를 작성할 때는 앞서 다룬 예제처럼 DOM 요소를 작성해도 되고, 컴포넌트를 사용해도 됩니다.
<br><br>

### 6.2.2 App 컴포넌트에서 예제 컴포넌트 렌더링

<br>

![image](https://user-images.githubusercontent.com/78855917/125201448-2fd8ff00-e2aa-11eb-9e09-730a41e4e4da.png)

<br>
크롬 개발자 도구의 콘솔에서 "key" prop이 없다는 경고 메시지를 표시했습니다. key란 무엇일까요?
<br><br>

---

<br>

## 6.3 key

<br>
리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용합니다. 예를 들어 유동적인 데이터를 다룰 때는 원소를 새로 생성할 수도, 제거할 수도, 수정할 수도 있죠. key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지합니다. 하지만 key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있습니다.

<br><br>

### 6.3.1 key 설정

<br>
key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 됩니다. key 값은 언제나 유일해야 합니다. 따라서 데이터가 가진 고윳값을 key 값으로 설정해야 합니다. 예를 들어 다음과 같이 게시판의 게시물을 렌더링한다면 게시물 번호를 key 값으로 설정해야 합니다.
<br><br>

```js
const articleList = articles.map((article) => (
  <Article title={article.title} writer={article.writer} key={article.id} />
));
```

<br>
하지만 앞서 만들었던 예제 컴포넌트에는 이런 고유 번호가 없습니다. 이때는 map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용하면 됩니다. 
<br><br>

```js
import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
```

<br>
이제 개발자 도구에서 더 이상 경고 메시지를 표시하지 않습니다. 고유한 값이 없을 때만 index 값을 key로 사용해야 합니다. index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못합니다.
<br><br>

---

<br>

## 6.4 응용

<br>
지금까지 배운 개념을 응용하여 고정된 배열을 렌더링하는 것이 아닌, 동적인 배열을 렌더링하는 것을 구현해 보겠습니다. 그리고 index 값을 key로 사용하면 리렌더링이 비효율적이라고 배웠는데, 이러한 상황에 어떻게 고윳값을 만들 수 있는지도 알아보겠습니다.
<br><br>

### 6.4.1 초기 상태 설정하기

<br>
IterationSample 컴포넌트에서 useState를 사용하여 상태를 설정하겠습니다. 세 가지 상태를 사용할 텐데 하나는 데이터 배열이고, 다른 하나는 텍스트를 입력할 수 있는 input의 상태입니다. 그럼 마지막 하나는 무엇일까요? 그것은 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태입니다.
<br><br>

```js
import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람'}
    { id: 2, text: '얼음'}
    { id: 3, text: '눈'}
    { id: 4, text: '바람'}
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return <ul>{namesList}</ul>;
};

export default IterationSample;
```

<br>
이번에는 map 함수를 사용할 때 key 값을 index 대신 name.id 값으로 지정해 주었습니다.
<br><br>

### 6.4.2 데이터 추가 기능 구현하기

<br>
이제 새로운 이름을 등록할 수 있는 기능을 구현해 봅시다. 우선 ul 태그의 상단에 input과 button을 렌더링하고, input의 상태를 관리해 보세요.
<br><br>

```js
import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
```

<br>
그 다음에는 버튼을 클릭했을 때, 호출할 onClick 함수를 선언하여 버튼의 onClick 이벤트로 설정해 보세요. onClick 함수에서는 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열을 만들고, setNames를 통해 상태를 업데이트해 줍니다.
<br><br>

```js
import React, { useState } from 'react';


const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState(“);
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  };



const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};



export default IterationSample;
```

<br>
배열에 새 항목을 추가할 때 배열의 push 함수를 사용하지 않고 concat을 사용했는데요. push 함수는 기존 배열 자체를 변경해 주는 반면, concat은 새로운 배열을 만들어 준다는 차이점이 있습니다. <br><br>
리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 합니다. 이를 불변성 유지라고 하는데요. 불변성 유지를 해 주어야 나중에 리액트 컴포넌트의 성능을 최적화할 수 있습니다.
<br><br>
onClick 함수에서 새로운 항목을 추가할 때 객체의 id 값은 nextId를 사용하도록 하고, 클릭될 때 마다 값이 1씩 올라가도록 구현했습니다. 추가로 button이 클릭될 때 기존의 input 내용을 비우는 것도 구현해 주었습니다.
<br><br>

### 6.4.3 데이터 제거 기능 구현하기

<br>
이번에는 각 항목을 더블클릭했을 때 해당 항목이 화면에서 사라지는 기능을 구현해 보겠습니다. 이번에도 마찬가지로 불변성을 유지하면서 업데이트해 주어야 합니다. 불변성을 유지하면서 배열의 특정 항목을 지울 때는 배열의 내장 함수 filter를 사용합니다.
<br><br>

```js
import React, { useState } from 'react';


const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState(“);
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id != = id);
    setNames(nextNames);
  };
  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};



export default IterationSample;
```

<br>

---

<br>

## 6.5 정리

<br>
이 장에서는 반복되는 데이터를 렌더링하는 방법을 배우고, 이를 응용하여 유동적인 배열을 다루어 보았습니다. 컴포넌트 배열을 렌더링할 때는 key 값 설정에 항상 주의해야 합니다. 또 key 값은 언제나 유일해야 합니다. key 값이 중복된다면 렌더링 과정에서 오류가 발생합니다.
<br><br>
상태 안에서 배열을 변형할 때는 배열에 직접 접근하여 수정하는 것이 아니라 concat, filter 등의 배열 내장 함수를 사용하여 새로운 배열을 만든 후 이를 새로운 상태로 설정해 주어야 한다는 점을 명심하세요.
