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
          type=''password''
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
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(""); // inputText를 비운다.
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
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
  const [inputText, setInputText] = useState('');
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
<br><br>

---

<Br>

# 7장. 컴포넌트의 라이프사이클 메서드

<br>

모든 리액트 컴포넌트에는 라이프사이클(수명 주기)이 존재합니다. 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝납니다. <br><br>
리액트 프로젝트를 진행하다 보면 가끔 컴포넌트를 처음으로 렌더링할 때 어떤 작업을 처리해야 하거나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야 할 수도 있고, 또 불필요한 업데이트를 방지해야 할 수도 있습니다. <br><br>
이때는 컴포너트의 라이프사이클 메서드를 사용하비다. 참고로 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용할 수 있습니다. 함수형 컴포너트에서는 사용할 수 없는데요. 그 대신에 Hooks 기능을 사용하여 비슷한 작업을 처리할 수 있습니다. <br><br>

---

<br>

## 7.1 라이프사이클 메서드의 이해

<br>
라이프사이클 메서드의 종류는 총 아홉 가지입니다. <b> Will </b> 접두사가 붙은 메서드는 어떤 작업을 작동하기 <b>전</b>에 실행되는 메서드이고, <b>Did</b> 접두사가 붙은 메서드는 어떤 작업을 작동한 <b>후</b>에 실행되는 메서드입니다.
<br><br>
이 메서드들은 우리가 컴포넌트 클래스에서 덮어 써 선언함으로써 사용할 수 있습니다.
<br><br>
라이프사이클은 총 세가지, 즉 <b>마운트, 업데이트, 언마운트</b> 카테고리로 나눕니다. 우선 어떤 것들이 있는지 간단히 알아보고, 큰 흐름을 이해한 후 하나씩 살펴보겠습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125466983-258335ae-d4cd-4188-a53c-a1ee760fb005.png)

<br>

<b>마운트</b> <br><br>
DOM이 생성되고 웹 브라우저상에 나타는 것을 마운트(mount)라고 합니다. 이때 호출하는 메서드는 다음과 같습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125467294-57895589-0d34-4224-8a61-260ad233657e.png)

<br>

- constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드입니다.
- getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드입니다.
- render : 우리가 준비한 UI를 렌더링하는 메서드입니다.
- componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드입니다.

<br><br>
<b>업데이트</b>
<br><br>
컴포넌트는 다음과 같은 총 네 가지 경우에 업데이트합니다.

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때
   <br><br>

이렇게 컴포넌트를 업데이트할 때는 다음 메서드를 호출합니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125468341-dd6321dd-3fdc-4cda-90a3-82862665fb8a.png)
<br>

컴포넌트는 다양한 이유로 업데이트될 수 있습니다. 첫째, 부모 컴포넌트에서 넘겨주는 props가 바뀔 때입니다. 컴포넌트에 전달하는 props의 값이 바뀌면 컴포너트 렌더링이 이루어집니다. 둘째, 컴포넌트 자신이 들고 있는 state가 setState를 통해 업데이트될 때입니다. 셋째, 부모 컴포넌트가 리렌더링될 때입니다. 자신에게 할당된 props가 바뀌지 않아도, 또는 자신이 들고 있는 state가 바뀌지 않아도, 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링됩니다.
<br><br>

- getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출됩니다. props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용합니다.

- shouldComponentUpdat : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드입니다. 이 메서드에서는 true 혹은 false 값을 반환해야 하며, true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하면 작업을 중지합니다. 즉, 컴포넌트가 리렌더링되지 않습니다. 만약 특정 함수에서 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수를 호출합니다.

- render : 컴포넌트를 리렌더링합니다.

- getSnapshotBeforUpdate : 컴포너트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드입니다.

- componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드입니다.

<br>

<b>언마운트 </b> <br><br>
마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트(unmount)라고 합니다.
<br>

![image](https://user-images.githubusercontent.com/78855917/125470630-386636a7-5e4c-4c27-a462-bdeebabb305a.png)
<br>

- componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드입니다.
  <br><br>

---

<br>

## 7.2 라이프사이클 메서드 살펴보기

<br>

### 7.2.1 render() 함수

<br>

```js
render() {...}
```

<br>

이 메서드는 컴포넌트 모양새를 정의합니다. 그렇기에 컴포넌트에서 가장 중요한 메서드라고 할 수 있죠. 라이프사이클 메서드 중 유일한 필수 메서드이기도 합니다. <br><br>
이 메서드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환합니다. 요소는 div같은 태그가 될 수도 있고, 따로 선언한 컴포넌트가 될 수도 있습니다. 아무것도 보여 주고 싶지 않다면 null 값이나 false 값을 반환하도록 하세요.
<br><br>
그리고 다음 사항에 주의하세요. 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하며 안 되며, 브라우저의 DOM에 접근해서도 안 됩니다. DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 합니다.
<br><br>

### 7.2.2 constructor 메서드

<br>

```js
constructor(props) {...}
```

<br>
이것은 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행됩니다. 이 메서드에서는 초기 state를 정할 수 있습니다.

<br><br>

### 7.2.3 getDerivedStateFromProps 메서드

<br>
이것은 리액트 v16.3 이후에 새로 만든 라이프사이클 메서드입니다. props로 받아 온 값을  state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트될 떄 호출됩니다.
<br><br>

```js
static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.value !== prevState.value) { //조건에 따라 특정 값 동기화
    return { value: nextProps.value };
  }
  return null; //state를 변경할 필요가 없다면 null을 반환
}
```

<br>

### 7.2.4 componentDidMount 메서드

<br>

```js
componentDidMount() {...}
```

<br>
이것은 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행합니다. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 됩니다.
<br><br>

### 7.2.5 shouldComponentUpdate 메서드

<br>

```js
shouldComponentUpdate(nextProps, nextState) {...}
```

<br>
이것은 props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드입니다. 이 메서드에서는 반드시 true 값 또는 false 값을 반환해야 합니다. 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환합니다. 이 메서드가 false 값을 반환한다면 업데이트 과정은 여기서 중지됩니다.
<br><br>
이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있습니다. <br><br>
프로젝트 성능을 최적화 할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false 값을 반환하게 합니다.
<br><br>

### 7.2.6 getSnapshotBeforeUpdate 메서드

이것은 리액트 v16.3 이후 만든 메서드입니다. 이 메서드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됩니다. 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있는데요. 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됩니다. (예: 스크롤바 위치 유지).
<br><br>

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  if(prevState.array !== this.state.array) {
    const { scrollTop, scrollHeight } = this.list
    return { scrollTop, scrollHeight };
  }
}
```

<br>

### 7.2.7 componentDidUpdate 메서드

<br>

```js
componentDidupdate(prevProps, prevState, snapshot) { ... }
```

이것은 리렌더링을 완료한 후 실행합니다. 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방합니다. 여기서는 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있습니다. 또 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있습니다.
<br><Br>

### 7.2.8 componentWillUnmount 메서드

<br>

```js
componentWillUnmount() {...}
```

<br>
이것은 컴포넌트를 DOM에서 제거할 때 실행합니다. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 합니다.
<br><br>

### 7.2.9 componentDidCatch 메서드

<br>
componentDidCatch 메서드는 리액트 v16에서 새롭게 도입되었으며, 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해 줍니다. 사용 방법은 다음과 같습니다. <br><br>

```js
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
  console.log({ error, info });
}
```

<br>
여기서 error는 파라미터에 어떤 에러가 발생했는지 알려 주며, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줍니다. 앞의 코드에서는 그저 console.log만 했지만, 나중에 실제로 사용할 때 오류가 발생하면 서버 API를 호출하여 따로 수집할 수도 있습니다. <br><br>
그러나 이 메서드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다는 점을 알아두어야 합니다. 이 메서드를 사용하는 방법은 7.3.3절 '에러 잡아내기'에서 알아보겠습니다. <br><br>

---

<br>

## 7.3 라이프사이클 메서드 사용하기

<br>
7.2절에서 살펴본 라이프사이클 메서드를 직접 사용해 봅시다. 이번 실습은 다음 흐름으로 진행합니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125481933-a895ca12-6088-4e06-9b9b-019fb62d47e5.png)
<br>

### 7.3.1 예제 컴포넌트 생성

<br>

```js
import React, { Component } from 'react';


class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }



  myRef = null; // ref를 설정할 부분



constructor(props) {
    super(props);
    console.log('constructor');
  }



  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps’);
    if(nextProps.color != = prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }



componentDidMount() {
    console.log('componentDidMount');
  }



shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 != = 4;
  }



componentWillUnmount() {
    console.log('componentWillUnmount');
  }



handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }



getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color != = this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }



componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }



render() {
    console.log('render');



    const style = {
      color: this.props.color
    };



    return (
      <div>
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>
      </div>
    )
  }
}



export default LifeCycleSample;
```

<br>
이 컴포넌트는 각 라이프사이클 메서드를 실행할 때마다 콘솔 디버거에 기록하고, 부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number 값을 1씩 더합니다. <br><br>getDerivedStateFromProps는 부모에게서 받은 color 값을 state에 동기화하고 있습니다. 그리고 getSnapShotBeforeUpdate는 DOM에서 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate에서 조회할 수 있게 했습니다.<br><br>
추가로 shouldComponentUpdate 메서드에서 state.number 값의 마지막 자리 수가 4이면(예: 4, 14, 24, 34) 리렌더링을 취소하도록 설정했습니다.
<br><br>

### 7.3.2 App 컴포넌트에서 예제 컴포넌트 사용

<br>

```js
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
```

<br>
getRandomColor 함수는 state의 color 값을 랜덤 색상으로 설정합니다. 16777215를 hex로 표현하면 ffffff가 되므로 해당 코드는 000000부터 ffffff 값을 반환합니다. <Br><br>
버튼을 렌더링하고, 누를 때마다 handleClick 메서드가 호출되게 이벤트를 설정하며, 불러온 LifeCycleSample 컴포넌트에 color 값을 props로 설정합니다. <br><br>

### 7.3.3 에러 잡아내기

<br>
방금 만든 LifeCycleSample 컴포넌트의 render 함수에서 의도적으로 에러를 한번 발생시켜 보겠습니다. render 함수에서의 에러는 주로 존재하지 않는 함수를 사용하려고 하거나, 존재하지 않는 객체의 값을 조회하려고 할 때 발생합니다. <br><Br>

```js
render() {
    console.log('render');

<span class="co46">const</span> <span class="co32">style</span> <span class="co35">=</span><span class="co33"> {</span>

      color: this.props.color
    };

<span class="co46">return</span><span class="co33"> (</span>


      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
```

<br>
존재하지 않는 props인 missing 객체의 value를 조회해서 렌더링해 주려고 합니다. 이렇게 하면 당연히 브라우저에는 에러가 발생합니다. <br><br>

![image](https://user-images.githubusercontent.com/78855917/125483500-efdca704-c63b-41c7-8b44-518b2d5a02fa.png)

<br>
이렇게 어디에서 에러가 발생했는 지 알 수 있는 정보가 나타난 것은 우리가 현재 개발 서버를 실행 중이기 때문입니다. 해당 페이지의 오른쪽 상단에 있는 X 버튼을 누르면 오류 창이 닫힙니다. 닫히고 나면 아무것도 보이지 않고 흰 페이지만 남습니다. 만약 사용자가 웹 서비스를 실제로 사용할 때 이렇게 흰 화면만 나타나면 어리둥절할 것입니다. 이럴 때는 에러가 발생했다고 사용자에게 인지시켜 주어야 합니다.
<br><br>
지금부터는 에러를 잡아 주는 ErrorBoundary라는 컴포넌트를 생성해 보겠습니다.
<br><br>

```js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
```

<br>
에러가 발생하면 componentDidCatch 메서드가 호출되며, 이 메서드는 this.state.error 값을 true로 업데이트해 줍니다. 그리고 render 함수는 this.state.error 값이 true라면 에러가 발생했음을 알려 주는 문구를 보여 줍니다. 이제 이 컴포넌트를 사용해 App.js 에서 LifeCycleSample 컴포넌트를 감싸 주세요.
<br><br>

```js
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
```

<br>
이렇게 코드를 작성하고 저장합니다. 여전히 조금 전처럼 붉은 에러 박스가 보이겠지만, X 버튼을 누르면 다음과 같이 '에러가 발생했습니다!'라는 문구가 보일 것입니다.
<br><br>

---

<br>

## 7.4 정리

<br>
컴포넌트의 라이프사이클 메서드 흐름을 한번 한눈에 확인해 볼까요?
<br>

![image](https://user-images.githubusercontent.com/78855917/125484815-2f96a9a2-d9a6-48b1-96d0-40e9724a5655.png)
<br><br>
라이프사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행하는 메서드입니다. 이 메서드들은 서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용합니다. 추가로 컴포넌트 업데이트의 성능을 개선할 때는 shouldComponentUpdate가 중요하게 사용됩니다.
<br><br>

---

<br>

# 8장. Hooks

<br>
Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해 줍니다.
<br><br>

## 8.1 useState

<br>
useState는 가장 기본적인 Hook이며. 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줍니다. 만약 함수형 컴포넌트에서 상태를 관리해야 한다면 이 Hook을 사용하면 됩니다.<br><br>
useState는 코드 상단에서 import 구문을 통해 불러오고, 다음과 같이 사용합니다.
<br><br>

```js
import React, { useState } from "react";

const [value, setValue] = useState(0);
```

<br>
useState 함수의 파라미터에는 상태의 기본값을 넣어줍니다. 현재 0을 넣어 주었는데, 결국 카운터의 기본값을 0으로 설정하겠다는 의미입니다. 이 함수가 호출되면 배열을 반환하는데요. 그 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수입니다. 이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링됩니다. <br><br>
하나의 useState 함수는 하나의 상태 값만 관리할 수 있습니다. 컴포넌트가 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용하면 됩니다.
<br><br>

---

<br>

## 8.2 useEffect

<br>
useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방합니다.
<br><br>

### 8.2.1 마운트될 때만 실행하고 싶을 때

<br>
useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 됩니다.
<br><br>

```js
useEffect(() => {
  console.log("마운트될 때만 실행됩니다.");
}, []);
```

<br><br>

### 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

<br>
useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있겠지요? 클래스형 컴포넌트라면 다음과 같이 작성할 것입니다.
<br><br>

```js
componentDidUpdate(prevProps, prevState) {
  if(prevProps.value !== this.props.value) {
    doSomething();
  }
}
```

<br>
이 코드는 props 안에 들어 있는 value 값이 바뀔 때만 특정 작업을 수행합니다. 이러한 작업을 useEffect에서 해야 한다면, 어떻게 해야 할까요? 바로 useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 됩니다. <br><br>

```js
useEffect(() => {
  console.log(name);
}, [name]);
```

<br>
배열 안에는 useState를 통해 관리하고 있는 상태를 넣어 주어도 되고, props로 전달받은 값을 넣어 주어도 됩니다.
<br><br>

### 8.2.3 뒷정리하기

<br>
useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다. <br><br>
컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 합니다.
<br><br>

```js
useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

<br>

```js
import React, { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/125634795-32c623dd-0f8a-4152-864c-0b1207b02fe4.png)
<br>
컴포넌트가 나타날 때 콘솔에 effect가 나타나고, 사라질 때 cleanup이 나타납니다. 그 다음에는 인풋에 이름을 적어 보고 콘솔에 어떤 결과가 나타나는지 확인해 보세요.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125634933-0e9f91f6-aeda-4c6d-8ccc-5c790c2822b7.png)
<br>
렌더링될 때마다 뒷정리 함수가 계속 나타나는 것을 확인할 수 있습니다. 그리고 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여 줍니다.
<br><br>

---

<br>

## 8.4 useMemo

<br>
useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다. 먼저 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여 주는 함수형 컴포넌트를 작성해 봅시다.
<br><br>

```js
import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
```

<br>
그런데 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 우리가 만든 getAverage 함수가 호출되는 것을 확인할 수 있습니다. 인풋 내용이 바뀔 때는 평균값을 다시 계산할 필요가 없는데, 이렇게 렌더링할 때마다 계산하는 것은 낭비겠지요? useMemo Hook을 사용하면 이러한 작업을 최적화할 수 있습니다. 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식입니다. 
<br><br>

```js
import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setState] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
    <input value={number} onChange={onChange} />
    <button onClick={onInsert}>등록</button>
    <ul>
      {list.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
    <div>
      <b>평균값: </b> {avg}
    </div>
  );
};

export default Average;
```

<br>
이제 list 배열의 내용이 바뀔 때만 getAverage 함수가 호출됩니다.
<br><br>

---

<br>

## 8.5 useCallback

<br>
useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요. 이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있습니다. <br><br>
방금 구현한 Average 컴포넌트를 보세요. onChange와 onInsert라는 함수를 선언해 주었지요? 이렇게 선언하면 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하게 됩니다. 대부분의 경우 이러한 방식은 문제없지만, 컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 이 부분을 최적화해 주는 것이 좋습니다.
<br><br>

```js
import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback (e => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성
const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
}, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성

const avg = useMemo(() => getAverage(list), [list]);
return (
  <div>
    <input value={number} onChange={onChange} />
    <button onClick={onInsert}>등록</button>
    <ul>
      {list.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
    <div>
      <b>평균값:</b> {avg}
    </div>
  );
};

export default Average;
```

<br>
useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 됩니다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 합니다. <br><br>
onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용하게 되며 onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 됩니다.
<br><br>
함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 합니다. 예를 들어 onChange의 경우 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어 있어도 상관없지만, onInsert는 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어 주어야 합니다.
<br><br>

---

<br>

## 8.6 useRef

<br>
useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다. Average 컴포넌트에서 등록 버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 코드를 작성해 보겠습니다.
<br><br>

```js
import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

<br>
useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킵니다.
<br><br>

### 8.6.1 로컬 변수 사용하기

<br>
추가로 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있습니다. 여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미합니다. 이러한 코드를 함수형 컴포넌트로 작성한다면? 다음과 같이 할 수 있습니다.
<br><br>

```js
import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refSample</div>;
};

export default RefSample;
```

<br>
이렇게 ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다는 점에는 주의해야 합니다. 렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식으로 코드를 작성하세요.
<br><br>

---

<br>

## 8.7 커스텀 Hooks 만들기

<br>
여러 컴포넌트에서 비슷한 기능을 고유할 경우, 이를 여러분만의 Hook으로 작성하여 로직을 재사용할 수 있습니다. <br><br>

> [자신만의 Hook 만들기](https://ko.reactjs.org/docs/hooks-custom.html) > [사용자 생성 커스텀 Hook](https://nikgraf.github.io/react-hooks/) > <br><br>

---

<br>

## 8.8 정리

<br>
리액트에서 Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있습니다. 이러한 기능이 리액트의 릴리즈되었다고 해서 기존의 setState를 사용하는 방식이 잘못된 것은 아닙니다. 물론 useState 혹은 useReducer을 통해 구현할 수 있더라도 말이죠.
<br><br>
리액트 매뉴얼에 따르면, 기존의 클래스형 컴포넌트는 앞으로도 계속해서 지원될 예정입니다. 그렇기 때문에 만약 유지 보수하고 있는 프로젝트에서 클래스형 컴포넌트를 사용하고 있다면, 이를 굳이 함수형 컴포넌트와 Hooks를 사용하는 형태로 전환할 필요는 없습니다. 다만, 매뉴얼에서는 새로 작성하는 컴포넌트의 경우 함수형 컴포넌트와 Hooks를 사용할 것을 권장하고 있습니다. 앞으로 여러분이 프로젝트를 개발할 때는 함수형 컴포넌트의 사용을 첫 번째 옵션으로 두고, 꼭 필요한 상황에서만 클래스형 컴포넌트를 구현하세요.
<br><br>

---

<br>

# 9장. 컴포넌트 스타일링

<br>
리액트에서 컴포넌트를 스타일링 할 때는 다양한 방식을 사용할 수 있습니다. 여러 방식 중에서 딱히 정해진 방식이란 없습니다. 회사마다 요구하는 스펙이 다르고, 개발자마다 각자 취향에 따라 선택하기 때문입니다. 이 장에서는 어떠한 방식이 있는지 알아보고, 자주 사용하는 방식을 하나하나 사용해 보겠습니다. 
<br><br>
이 장에서 알아볼 스타일링 방식은 다음과 같습니다.
<br><br>

- 일반 CSS : 컴포넌트를 스타일링하는 가장 기본적인 방식입니다.
- Sass : 자주 사용되는 CSS 전처리기(pre-processor) 중 하나로 확장된 CSS 문법을 사용하여 CSS 코드를 더욱 쉽게 작성할 수 있도록 해 줍니다.
- CSS Module : 스타일을 작성할 때 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해 주는 옵션입니다.
- Styled-components : 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해줍니다.

<br><br>

---

<br>

## 9.1 가장 흔한 방식, 일반 CSS

<br>
프로젝트는 일반 CSS 방식으로 만들어져 있습니다. 기존의 CSS 스타일링이 딱히 불편하지 않고 새로운 기술을 배울 필요가 없다고 생각되면, 일반 CSS를 계속 사용해도 상관없습니다.
<br><br>
실제로도 소규모 프로젝트를 개발하고 있다면 새로운 스타일링 시스템을 적용하는 것이 불필요할 수도 있습니다. 그런 상황에는 프로젝트에 이미 적용되어 있는 기본 CSS 시스템을 사용하는 것 만으로도 충분합니다. 
<br><br>
방금 만든 프로젝트를 보면 src 디렉터리에 App.js 파일과 App.css 파일이 있습니다.
<br><br>

```js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
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
}

export default App;
```

<br>

```css
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

<br>
CSS를 작성할 때 가장 중요한 점은 CSS 클래스를 중복되지 않게 만드는 것입니다. CSS 클래스가 중복되는 것을 방지하는 여러 가지 방식이 있는데, 그중 하나는 이름을 지을 때 특별한 규칙을 사용하여 짓는 것이고, 또 다른 하나는 CSS Selector를 활용하는 것입니다.
<br><br>

### 9.1.1 이름 짓는 규칙

<br>
프로젝트에 자동 생성된 App.css를 읽어 보면 클래스 이름이 컴포넌트 이름-클래스 형태로 지어져 있습니다(예: App-header). 클래스 이름에 컴포넌트 이름을 포함시킴으로써 다른 컴포넌트에서 실수로 중복되는 클래스를 만들어 사용하는 것을 방지할 수 있죠. 비슷한 방식으로 BEM 네이밍(BEM Naming)이라는 방식도 있습니다. BEM 네이밍은 CSS 방법론 중 하나로, 이름을 지을 때 일종의 규칙을 준수하여 해당 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방식입니다. 예를 들어 .card__title-primary처럼 말이죠.
<br><br>

### 9.1.2 CSS Selector

<br>
CSS Selector를 사용하면 CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있습니다. 예를 들어 .App안에 들어 있는 .logo에 스타일을 적용하고 싶다면 다음과 같이 작성하면 됩니다.
<br><br>

```css
.App .logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
}
```

<br>
이런 식으로 컴포넌트의 최상위 html 요소에는 컴포넌트의 이름으로 클래스 이름을 짓고(.App), 그 내부에는 소문자를 입력하거나(.logo), header 같은 태그를 사용하여 클래스 이름이 불필요한 경우에는 아예 생략할 수도 있습니다.
<br><br>

---

<br>

## 9.2 Sass 사용하기

<br>
Sass(Syntatically Awesome Stlye Sheets)(문법적으로 매우 멋진 스타일 시트)는 CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해 주고, 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서 유지 보수를 더욱 쉽게 해 줍니다.
<br><br>
Sass에서는 두 가지 확장자 .scss와 .sass를 지원합니다. Sass가 처음 나왔을 때는 .sass 확장자만 지원되었으나 나중에 개발자들의 요청에 의해 .scss 확장자도 지원하게 되었습니다.
<br><br>
.scss의 문법과 .sass의 문법은 꽤 다릅니다. 다음 코드를 한번 확인해 보세요.
<br><br>

```css
/*.sass 문법 */
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

<br>

```css
/*.scss 문법*/
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

<br>

주요 차이점을 살펴보면, .sass 확장자는 중괄호({})와 세미콜론(;)을 사용하지 않습니다. 반면 .scss 확장자는 기존 CSS를 작성하는 방식과 비교해서 문법이 크게 다르지 않습니다. 보통 .scss 문법이 더 자주 사용되므로 이 책에서는 .scss 확장자를 사용하여 스타일을 작성해 보겠습니다.
<br><br>

```css
/* SassComponent.scss */
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;
// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용할 수 있음)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}

.SassComponent {
  display: flex;
  .box {
    // 일반 CSS에서는 .SassComponent .box와 마찬가지
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &.red {
      // .red 클래스가 .box와 함께 사용되었을 때
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      // .box에 마우스를 올렸을 때
      background: black;
    }
  }
}
```

<br>

```js
{
  /* SassComponent.js*/
}
import React from "react";
import "./SassComponent.scss";

const SassComponent = () => {
  return (
    <div className="SassComponent">
      <div className="box red" />
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green" />
      <div className="box blue" />
      <div className="box indigo" />
      <div className="box violet" />
    </div>
  );
};
export default SassComponent;
```

<br><br>

```js
{
  /* App.js */
}
import React, { Component } from "react";
import SassComponent from "./SassComponent";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    );
  }
}

export default App;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/125824822-6acff0e4-5f6c-4b55-be8e-ad6c334b2a94.png)
<br><Br>

### 9.2.1 utils 함수 분리하기

<br>
여러 파일에서 사용될 수 있는 Sass 변수 및 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 쉽게 불러와 사용할 수 있습니다.
<br><br>

```css
/* src/styles/utils.scss */
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;

// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용할 수 있음)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}
```

<br>

```css
@import './styles/utils';
.SassComponent {
  display: flex;
  .box {
    background: red; // 일반 CSS에서는 .SassComponent .box와 마찬가지
    cursor: pointer;
    transition: all 0.3s ease-in;
    (...)
  }
}
```

<br><br>

### 9.2.3 node_modules에서 라이브러리 불러오기

<br>
Sass의 장점 중 하나는 라이브러리를 쉽게 불러와서 사용할 수 있다는 점입니다. yarn을 통해 설치한 라이브러리를 사용하는 가장 기본적인 방법은 무엇일까요? 다음과 같이 상대 경로를 사용하여 node_modules까지 들어가서 불러오는 방법입니다.
<br><br>

```
@import '../../../node_modules/library/styles';
```

<br>
하지만 이런 구조는 스타일 파일이 깊숙한 디렉터리에 위치할 경우 ../를 매우 많이 적어야 하니 번거롭겠죠? 이보다 더 쉬운 방법이 있는데, 바로 물결 문자(~)를 사용하는 방법입니다.
<br><br>

```
@import '~library/styles';
```

<br>
물결 문자를 사용하면 자동으로 node_modules에서 라이브러리 디렉터리를 탐지하여 스타일을 불러올 수 있습니다. <br><br>
연습 삼아 유용한 Sass 라이브러리 두 가지를 설치하고 사용해 보겠습니다. 반응형 디자인을 쉽게 만들어 주는 include-media(https://include-media.com/)와 매우 편리한 색상 팔레트인 open-color(https://www.npmjs.com/package/open-color)를 yarn 명령어를 사용해 설치해 보세요.
<br><Br>

```
$ yarn add open-color include-media
```

<br>
그 다음에는 utils.scss 파일을 열고 물결 표시를 사용하여 라이브러리를 불러오세요. 다음 두 줄을 코드 상단에 넣어 주면 됩니다.
<br><br>

```css
@import '~include-media/dist/include-media';
@import '~open-color/open-color';
(...)
```

<br>
Sass 라이브러리를 불러올 때는 node_modules 내부 라이브러리 경로 안에 들어 있는 scss 파일을 불러와야 합니다. 보통 scss 파일 경로가 어디에 위치하고 있는지를 라이브러리의 공식 매뉴얼에서 알려 주지 않을 때가 많으니, 직접 경로로 들어가서 확인하길 바랍니다.<br><br>
이제 방금 불러온 include-media와 open-color를 SassComponent.scss에서 사용해 보겠습니다. 해당 스타일 파일을 다음과 같이 수정해 보세요.
<br><br>

```scss
.SassComponent {
  display: flex;
  background: $oc-gray-2;
  @include media('<768px') {
    background: $oc-gray-9;
  }
  (…)
}
```

<br>
이 코드는 SassComponent의 배경색을 open-colors 팔레트 라이브러리에서 불러온 후 설정하고, 화면 가로 크기가 768px 미만이 되면 배경색을 어둡게 바꿔 줍니다. 코드를 저장하고 나면 다음과 같은 결과물이 나타납니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/125826246-1b956cd4-462c-45f0-ad3a-9d708c104858.png)

<br><br>

---

<br>

## 9.3 CSS Module

<br>
CSS Module은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, 즉 <b>[파일 이름]_[클래스 이름]_[해시값]</b> 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술입니다. 
<br><br>

```css
/* CSSModule.module.css */
/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 마음대로 사용 가능 */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

/* 글로벌 CSS를 작성하고 싶다면 */
:global .somthing {
  font-weight: 800;
  color: aqua;
}
```

<br>
CSS Module을 사용하면 클래스 이름을 지을 때 그 고유성에 대해 고민하지 않아도 됩니다. 흔히 사용하는 단어로 이름을 짓는다고 해도 전혀 문제가 되지 않습니다. 해당 클래스는 우리가 방금 만든 스타일을 직접 불러온 컴포넌트 내부에서만 작동하기 때문입니다. 만약 특정 클래스가 웹 페이지에서 전역적으로 사용되는 경우라면 :global을 앞에 입력하여 글로벌 CSS임을 명시해 줄 수 있습니다. <br><br>
다 작성했다면 위 CSS Module을 사용하는 리액트 컴포넌트도 작성해 봅시다!
<br><br>

```js
//CSSModule.js

import React from "react";
import styles from "./CSSModule.module.css";
const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

<br>
CSS Module이 적용된 스타일 파일을 불러오면 객체를 하나 전달받게 되는데 CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어 있습니다. 예를 들어 위 코드에서 console.log(styles)를 한다면 다음과 같은 결과가 나타납니다.
<br><br>

```js
{
  wrapper: "CSSModule_wrapper__1SbdQ";
}
```

<br>
우리가 지정한 클래스 이름 앞뒤로 파일 이름과 해시값이 붙었지요?
<br><br>
이 고유한 클래스 이름을 사용하려면 클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스이름]} 형태로 전달해 주면 됩니다. :global을 사용하여 전역적으로 선언한 클래스의 경우 평상시 해 왔던 것처럼 그냥 문자열로 넣어 줍니다.
<br><br>
CSS Module을 사용한 클래스 이름을 두 개 이상 적용할 때는 다음과 같이 코드를 작성하면 됩니다.
<br><br>

```css
/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 마음대로 사용 가능 */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

.inverted {
  color: black;
  background: white;
  border: 1px solid black;
}

/* 글로벌 CSS를 작성하고 싶다면 */

:global .something {
  font-weight: 800;
  color: aqua;
}
```

<br>

```js
import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

<br>
위 코드에서는 ES6 문법 템플릿 리터럴(Template Literal)을 사용하여 문자열을 합해 주었습니다. 이 문법을 사용하면 문자열 안에 자바스크립트 레퍼런스를 쉽게 넣어 줄 수 있습니다. 
<br><br>

```js
const name = "리액트";
// const message = '제 이름은 ' + name + '입니다.'
const message = `제 이름은 ${name}입니다.`;
```

<br>
여기서 사용되는 ` 문자는 백틱(Backtick)이라고 부르며, 키보드에서 숫자 키 1 왼쪽에 있는 키 `입니다. 
<br><br>

### 9.3.1 classnames

<br>
classnames는 CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리입니다. 또한, CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리합니다. 우선 해당 라이브러리를 설치하세요.
<br><br>

```
$ yarn add classnames
```

<br>

```js
import classNames from "classnames";

classNames("one", "two"); // = 'one two'
classNames("one", { two: true }); // = 'one two'
classNames("one", { two: false }); // = 'one'
classNames("one", ["two", "three"]); // = 'one two three'

const myClass = "hello";
classNames("one", myClass, { myCondition: true }); // = 'one hello myCondition'
```

<br>
이런식으로 여러 가지 종류의 파라미터를 조합해 CSS 클래스를 설정할 수 있기 때문에 컴포넌트에서 조건부로 클래스를 설정할 때 매우 편합니다. 예를 들어 props 값에 따라 다른 스타일을 주기가 쉬워지죠.
<br><br>

```js
const MyComponent = ({ highlighted, theme }) => (
  <div className={classNames("MyComponent", { hightlighted }, theme)}>
    Hello
  </div>
);
```

<br>
이렇게 할 경우, 위 엘리먼트의 클래스에 highlighted 값이 true이면 highlighted 클래스가 적용되고, false이면 적용되지 않습니다. 추가로 theme으로 전달받는 문자열은 내용 그대로 클래스에 적용됩니다. 
<br><br>
덧붙여 CSS Module과 함께 사용하면 CSS Module 사용이 훨씬 쉬워집니다. classnames에 내장되어 있는 bind 함수를 사용하면 클래스를 넣어 줄 때마다 styles.[클래스 이름]형태를 사용할 필요가 없습니다. 사전에 미리 styles에서 받아 온 후 사용하게끔 설정해 두고 cx('클래스 이름', '클래스 이름 2') 형태로 사용할 수 있습니다.
<br><br>

```js
import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

<br><br>

---

<br>

## 9.4 styled-components

<br>
컴포넌트 스타일링의 또 다른 패러다임은 자바스크립트 파일 안에 스타일을 선언하는 방식입니다. 이 방식을 'CSS-in-JS'라고 부르는데요. 이와 관련된 라이브러리는 정말 많습니다. 라이브러리의 종류는 https://github.com/MicheleBertoli/css-in-js 에서 확인할 수 있습니다. 이 절에서는 CSS-in-JS 라이브러리 중에서 개발자들이 가장 선호하는  styled-components를 알아보겠습니다.
<br><br>

```
$ yarn add styled-components
```

<br>
styled-components를 사용하면 자바스크립트 파일 하나에 스타일까지 작성할 수 있기 때문에 .css 또는 .scss 확장자를 가진 스타일 파일을 따로 만들지 않아도 된다는 큰 이점이 있습니다.
<br><br>

```js
import React from "react";
import stlyed, { css } from "styled-components";

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/125978205-9dacc121-8683-41d4-afa2-5e916bd091e2.png)
<br><br>

styled-components와 일반 classNames를 사용하는 CSS/Sass를 비교했을 때, 가장 큰 장점은 props 값으로 전달해 주는 값을 쉽게 스타일에 적용할 수 있다는 것입니다.
<br><br>

### 9.4.1 Tagged 템플릿 리터럴

<br>
앞에서 작성한 코드를 확인해 보면, 스타일을 작성할 때 `을 사용하여 만든 문자열에 스타일 정보를 넣어 주었습니다. 여기서 사용한 문법을 Tagged 템플릿 리터럴이라고 부릅니다. CSS Module을 배울 때 나온 일반 템플릿 리터럴과 다른 점은 템플릿 안에 자바스크립트 객체나 함수를 전달할 때 온전히 추출할 수 있다는 것입니다.
<br><br>

```js
`hello ${{ foo: "bar" }} ${() => "world"}!`;
// 결과: "hello [object Object] () => 'world'! "
```

<br>
템플릿에 객체를 넣거나 함수를 넣으면 형태를 잃어 버리게 됩니다. 객체는 "[object Object]"로 변환되고, 함수는 함수 내용이 그대로 문자열화되어 나타나죠. 만약 다음과 같은 함수를 작성하고 나서 해당 함수 뒤에 템플릿 리터럴을 넣어 준다면, 템플릿 안에 넣은 값을 온전히 추출할 수 있습니다.
<Br><br>

```js
function tagged(...args) {
  console.log(args);
}
tagged`hello ${{ foo: "bar" }} ${() => "world"}!`;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/125979014-5ea621bf-5c5e-47e9-9d36-5448eda6a0d9.png)
<br><br>
Tagged 템플릿 리터럴을 사용하면 이렇게 템플릿 사이사이에 들어가는 자바스크립트 객체나 함수의 원본 값을 그대로 추출할 수 있습니다. styled-components는 이러한 속성을 사용하여 styled-components로 만든 컴포넌트의 props를 스타일 쪽에서 쉽게 조회할 수 있도록 해 줍니다.
<br><br>

### 9.4.2 스타일링된 엘리먼트 만들기

<br>
styled-components를 사용하여 스타일링된 엘리먼트를 만들 때는 컴포넌트 파일의 상단에서 styled를 불러오고 styled.태그명을 사용하여 구현합니다.
<br><Br>

```js
import styled from "styled-components";

const MyComponent = styled.div`
  font-size: 2rem;
`;
```

<br>
이렇게 styled.div 뒤에 Tagged 템플릿 리터럴 문법을 통해 스타일을 넣어 주면, 해당 스타일이 적용된 div로 이루어진 리액트 컴포넌트가 생성됩니다. 그래서 나중에 
<br><br>

```js
<MyComponent>Hello</MyComponent>
```

<br>
와 같은 형태로 사용할 수 있습니다. div가 아닌 button이나 input에 스타일리을 하고 싶다면 styled.button 혹은 styled.input 같은 형태로 뒤에 태그명을 넣어 주면 됩니다. 하지만 사용해야 할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링해 주고 싶다면 다음과 같은 형태로 구현할 수 있습니다.
<br><br>

```js
//태그의 타입을 styled 함수의 인자로 전달
const MyInput = styled("input")`
  background: gray;
`;

// 아예 컴포넌트 형식의 값을 넣어 줌
const StyledLink = styled(Link)`
  color: blue;
`;
```

<br><br>

### 9.4.3 스타일에서 props 조회하기

<br>
stlyed-components를 사용하면 스타일 쪽에서 컴포넌트에게 전달된 props 값을 참조할 수 있습니다. 이전에 작성했던 Box 컴포넌트를 다시 볼까요?
<br><br>

```js
const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;
```

<br>
이 코드를 보면 background 값에 props를 조회해서 props.color의 값을 사용하게 했습니다. 그리고 color 값이 주어지지 않았을 때는 blue를 기본 색상으로 설정했습니다. 이렇게 만들어진 코드는 JSX에서 사용될 때 다음과 같이 color 값을 props로 넣어 줄 수 있습니다.
<br><br>

```js
<Box color="black">(...)</Box>
```

<br>

### 9.4.4 props에 따른 조건부 스타일링

<br>
일반 CSS 클래스를 사용하여 조건부 스타일링을 해야 할 때는 className을 사용하여 조건부 스타일링을 해 왔는데요. styled-components에서는 조건부 스타일링을 간단하게 props로도 처리할 수 있습니다. <br><br>

```js
import styled, { css } from "styled-components";
/* 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 합니다. */
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;
```

<br>
이렇게 만든 컴포넌트는 다음과 같이 props를 사용하여 서로 다른 스타일을 적용할 수 있습니다.
<br><br>

```js
<Button>안녕하세요</Button>
<Button inverted={true}>테두리만</Button>
```

<br>
스타일 코드 여러 줄을 props에 따라 넣어 주어야 할 때는 CSS를 styled-components에서 불러와야 합니다. 만약 조건부 스타일링을 할 때 넣는 여러 줄의 코드에서 props를 참조하지 않는다면 굳이 CSS를 불러와서 사용하지 않아도 상관없습니다. 하지만 props를 참조한다면, 반드시 CSS로 감싸 주어서 Tagged 템플릿 리터럴을 사용해 주어야 합니다.
<br><br>

### 9.4.5 반응형 디자인

<br>
이번에는 styled-components를 사용할 때 반응형 디자인을 어떻게 하는지 한번 알아봅시다. 브라우저의 가로 크기에 따라 다른 스타일을 적용하기 위해서는 일반 CSS를 사용할 때와 똑같이 media 쿼리(query)를 사용하면 됩니다. 
<br><Br>

```js
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고 가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채웁니다 */

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
```

<br>
일반 CSS에서 할 때랑 큰 차이가 없습니다. 그런데 이러한 작업을 여러 컴포넌트에서 반복해야 한다면 조금 귀찮을 수도 있습니다. 그럴 떄는 이 작업을 함수화여 간편하게 사용할 수 있습니다. styled-components 매뉴얼에서 제공하는 유틸 함수를 따라 사용해 봅시다.
<br><br>

```js
import React from 'react';
import styled, { css } from 'stlyed-components'

const sizes = {
  desktop: 1024,
  tablet: 768
};

// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label)) => {
  acc[label] = (...args) => css`
  @media (max-width: ${sizes[label] / 16}em) {
    ${css(...args)};
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%`};
`;
```

<br><br>

---

<br>

# 13장. 리액트 라우터로 SPA 개발하기

<br>

## 13.1 SPA란?

<br>
SPA는 Single Page Application(싱글 페이지 애플리케이션)의 약어입니다. 말 그대로 한 개의 페이지로 이루어진 애플리케이션이라는 의미입니다. 전통적인 웹 페이지는 다음과 같이 여러 페이지로 구성되어 있습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/127772158-6de7be46-1579-465e-8f32-ba3d5ff64d89.png)
<br>

기존에는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아 오고, 페이지를 로딩할 때 마다 서버에서 리소스를 전달받아 해석한 뒤 화면에 보여 주었습니다. 이렇게 사용자에게 보이는 화면은 서버 측에서 준비했습니다. 사전에 html 파일을 만들어서 제공하거나, 데이터에 따라 유동적인 html을 생성해 주는 템플릿 엔진을 사용하기도 했죠.
<br><br>
요즘은 웹에서 제공되는 정보가 정말 많기 때문에 새로운 화면을 보여 주어야 할 때마다 서버 측에서 모든 뷰를 준비한다면 성능상의 문제가 발생할 수 있습니다. 예를 들면 트래픽이 너무 많이 나올 수도 있고, 사용자가 몰려 서버에 높은 부하가 쉽게 걸릴 수도 있죠. 속도와 트래픽 측면에서는 캐싱과 압축을 해서 서비스를 제공하면 어느 정도 최적화될 수도 있겠지만, 사용자와의 인터랙션이 자주 발생하는 모던 웹 애플리케이션에는 적당하지 않을 수도 있습니다. 애플리케이션 내에서 화면 전환이 일어날 때마다 html을 계속 서버에 새로 요총하면 사용자의 인터페이스에서 사용하고 있던 상태를 유지하는 것도 번거롭고, 바뀌지 않는 부분까지 새로 불러와서 보여 줘야 하기 때문에 불필요한 로딩이 있어서 비효율적입니다.
<br><br>
그래서 리액트 같은 라이브러리 혹은 프레임워크를 사용하여 뷰 렌더링을 사용자의 브라우저가 담당하도록 하고, 우선 애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트해 줍니다. 만약 새로운 데이터가 필요하다면 서버 API를 호출하여 필요한 데이터만 새로 불러와 애플리케이션에서 사용할 수도 있죠.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/127772447-d0991e16-501c-4046-9841-a06e7f5d368e.png)
<br><br>
싱글 페이지라고 해서 화면이 한 종류일까요? 꼭 그렇지만은 않습니다. 예를 들어 블로그를 개발한다면 홈, 포스트 목록, 포스트, 글쓰기 등의 화면이 있겠지요. SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있습니다. <Br><br>
다른 주소에 다른 화면을 보여 주는 것을 <b>라우팅</b>이라고 합니다. 리액트 라이브러리 자체에 이 기능이 내장되어 있지는 않습니다. 그 대신 브라우저의 API를 직접 사용하여 이를 관리하거나, 라이브러리를 사용하여 이 작업을 더욱 쉽게 구현할 수 있습니다.
<br><br>
리액트 라우팅 라이브러리는 리액트 라우터(react-router), 리치 라우터(reach-router), Next.js등 여러 가지가 있습니다. 이 책에서는 그중 역사가 가장 길고 사용 빈도가 가장 높은 리액트 라우터를 사용하겠습니다. <br><br>
리액트 라우터는 클라이언트 사이드에서 이루어지는 라우팅을 아주 간단하게 구현할 수 있도록 해 줍니다. 더 나아가서 나중에 서버 사이드 렌더링을 할 때도 라우팅을 도와주는 컴포넌트들을 제공해 줍니다.
<br><br>

### 13.1.1 SPA의 단점

<br>
SPA의 단점은 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다는 것입니다. 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의 스크립트도 불러오기 때문이죠. 하지만 걱정하지 마세요. 나중에 배울 코드 스플리팅(code spliting)을 사용하면 라우트 별로 파일들을 나누어 트래픽과 로딩 속도를 개선할 수 있습니다.
<br><br>
리액트 라우터처럼 브라우저에서 자바스크립트를 사용하여 라우팅을 관리하는 것은 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집해 가지 못한다는 잠재적인 단점이 따릅니다. 그렇기 때문에 구글, 네이버, 다음 같은 검색 엔진의 검색 결과에 페이지가 잘 나타나지 않을 수도 있습니다. 또한 자바스크립트가 실행될 때까지 페이지가 비어 있기 때문에 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 흰 페이지가 나타날 수 있다는 단점도 있습니다. 이러한 문제점들은 다행히 나중에 배우게 될 서버 사이드 렌더링을 통해 모두 해결할 수 있습니다.
<br><br>

---

## 13.2 프로젝트 준비 및 기본적인 사용법

<br>

### 13.2.1 프로젝트 생성 및 라이브러리 설치

<br>

```
$ yarn add react-router-dom
```

<br>

### 13.2.2 프로젝트에 라우터 적용

<br>
프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 됩니다. 이 컴포넌트는 웹 애플리케이션에 HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해 줍니다.
<br><br>

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

<br>

### 13.2.3 페이지 만들기

<br>

```js
// Home.js

import React from "react";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
    </div>
  );
};

export default Home;
```

<br>

```js
// About.js

import React from "react";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
    </div>
  );
};

export default About;
```

<br>

### 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결

<br>
Route라는 컴포넌트를 사용하여 사용자의 현재 경로에 따라 다른 컴포넌트를 보여 주겠습니다. Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여 줄지 정의할 수 있습니다. 사용 방식은 다음과 같습니다.
<br><br>

```js
<Route path="주소규칙" component={보여 줄 컴포넌트} />
```

<br>
App.js를 열어서 기존 코드를 모두 제거하고, Route 컴포넌트를 사용하여 방금 만든 Home 컴포넌트 혹은 About 컴포넌트를 보여 주도록 설정해 보세요.
<br><br>

```js
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
```

<br>

/about 경로로 들어가면 About 컴포넌트만 나오기를 기대했지만, 예상과 다르게 두 컴포넌트가 모두 나타납니다. /about 경로가 / 규칙에도 일치하기 때문에 발생한 현상입니다. 이를 수정하려면 Home을 위한 Route 컴포넌트를 사용할 때 exact라는 props를 true로 설정하면 됩니다.
<br><br>

```js
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
```

<br>

### 13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기

<br>
Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트입니다. 일반 웹 애플리케이션에서는 a 태그를 사용하여 페이지를 전환하는데요. 리액트 라우터를 사용할 때는 이 태그를 직접 사용하면 안 됩니다. 이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려 버리게 됩니다. 렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링하게 되죠. <br><br>
Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경해 줍니다. Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있습니다. Link 컴포넌트는 다음과 같이 사용합니다.
<br><br>

```js
<Link to="주소">내용</Link>
```

<br>

```js
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
```

<br>

![image](https://user-images.githubusercontent.com/78855917/128022534-056e6b7b-e7f8-41e8-8313-9e51b1ebf9bd.png)
<br>

---

<br>

## 13.3 Route 하나에 여러 개의 path 설정하기

<br>
Route 하나에 여러 개의 path를 지정하는 것은 최신 버전의 리액트 라우터 v5부터 적용된 기능입니다. Route를 두번 사용하는 대신, path props를 배열로 설정해 주면 여러 경로에서 같은 컴포넌트를 보여 줄 수 있습니다.
<br><br>

```js
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
};

export default App;
```

<br>

---

<br>

## 13.4 URL 파라미터와 쿼리

<br>
페이지 주소를 정의할 때 가끔은 유동적인 값을 전달해야 할 때도 있습니다. 이는 파라미터와 쿼리로 나눌 수 있습니다.
<br><br>

```
- 파라미터 예시: /profile/velopert
- 쿼리 예시: /about?details=true
```

<br>
유동적인 값을 사용해야 하는 상황에서 파라미터를 써야 할지 쿼리를 써야 할지 정할 때, 무조건 따라야 하는 규칙은 없습니다. 다만 일반적으로 파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때 사용하고, 쿼리는 우리가 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용합니다.
<br><br>

### 13.4.1 URL 파라미터

<br>
Profile 페이지에서 파라미터를 사용해 봅시다. /profile/velopert와 같은 형식으로 뒷부분에 유동적인 username 값을 넣어 줄 때 해당 값을 props로 받아 와서 조회하는 방법을 알아보겠습니다. 
<br><br>

```js
// Profile.js

import React from "react";

const data = {
  kyeom: {
    name: "김형겸",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
```

<br>

URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조합니다. match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어 있습니다.
<br><br>
이제 App 컴포넌트에서 Profile 컴포넌트를 위한 라우트를 정의해 보세요. 이번에 사용할 path 규칙에는 /profile/:username이라고 넣어 주면 됩니다. 이렇게 설정하면 match.params.username 값을 통해 현재 username 값을 조회할 수 있습니다.
<br><br>

```js
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/kyeom">Kyeom 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
```

<br>

### 13.4.2 URL 쿼리

<br>
이번에는 About 페이지에서 쿼리를 받아 오겠습니다. 쿼리는 location 객체에 들어 있는 search 값에서 조회할 수 있습니다. location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있습니다. location의 형태는 다음과 같습니다.
<br><br>

```js
{
  "pathname": "/about",
  "search": "?detail=true",
  "hash": ""
}
```

<br>
위 location 객체는 http://localhost:3000/about?detail=true 주소로 들어갔을 때의 값입니다. URL 쿼리를 읽을 때는 위 객체가 지닌 값 중에서 search 값을 확인해야 합니다. 이 값은 문자열 형태로 되어 있습니다. URL 쿼리는 ?detail=true&another=1과 같이 문자열에 여러 가지 값을 설정해 줄 수 있습니다. search 값에서 특정 값을 읽어 오기 위해서는 이 문자열을 객체 형태로 변환해 주어야 합니다. <br><br>
쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리를 사용합니다. yarn을 사용하여 해당 라이브러리를 설치하세요. <br><br>

```
$ yarn add qs
```

<br>
그러면 이제 About 컴포넌트에서 location.search 값에 있는 detail이 true인지 아닌지에 따라 추가 정보를 보여 주도록 만들겠습니다. About 컴포넌트를 다음과 같이 수정해 보세요.
<br><br>

```js
import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
```

<br>

쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이라는 점에 주의하세요. ?value=1 혹은 ?value=true와 같이 숫자나 논리 자료형(boolean)을 사용한다고 해서 해당 값이 우리가 원하는 형태로 변환되는 것이 아니라, "1", "true"와 같이 문자열 형태로 받아집니다. 그렇기 때문에 숫자를 받아 와야 하면 parseInt 함수를 통해 꼭 숫자로 변환해 주고, 지금처럼 논리 자료형 값을 사용해야 하는 경우에는 정확히 "true" 문자열이랑 일치하는지 비교해 주세요.
<br><br>

---

<br>

## 13.5 서브 라우트

<br>
서브 라우트는 라우트 내부에 또 라우트를 정의하는 것을 의미합니다. 이 작업은 그렇게 복잡하지 않습니다. 그냥 라우트로 사용되고 있는 컴포넌트 내부에 Route 컴포넌트를 또 사용하면 됩니다.
<br><br>

---

<br>

## 13.6 리액트 라우터 부가 기능

<br>

### 13.6.1 history

<br>
history 객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props 중 하나로, 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있습니다. 예를 들어 특정 버튼을 눌렀을 때 뒤로 가거나, 로그인 후 화면을 전환하거나, 다른 페이지를 이탈하는 것을 방지해야 할 때 history를 활용합니다.
<br><br>

```js
import React, { Component } from "react";

class HistorySample extends Component {
  // 뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
```

<br>

### 13.6.2 withRouter

<br>
withRouter 함수는 HoC(Higher-order Component)입니다. 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해 줍니다.
<br><br>

```js
import React from "react";
import { withRouter } from "react-router-dom";
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
```

<br>
이 코드처럼 withRouter를 사용할 때는 컴포넌트를 내보내 줄 때 함수로 감싸 줍니다. JSON.stringify의 두 번째 파라미터와 세 번째 파라미터를 위와 같이 null, 2로 설정해 주면 JSOn에 들여쓰기가 적용된 상태로 문자열이 만들어집니다.
<br><br>

### 13.6.3 Switch

<br>
Switch 컴포넌트는 여러 Router를 감싸서 그 중 일치하는 단 하나의 라우트만을 렌더링시켜 줍니다. Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현할 수 있습니다.
<br><br>

```js
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
```

<br>

### 13.6.4 NavLink

<br>
NavLink는 Link와 비슷합니다. 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트입니다. NavLink에서 링크가 활성화되었을 때의 스타일을 적용할 때는 activeStyle 값을, CSS 클래스를 적용할 때는 activeClassname 값을 props로 넣어 주면 됩니다.
<br><br>

```js
import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert" active>
            kyeom
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>
      (…)
    </div>
  );
};

export default Profiles;
```

<br>

---

<br>

# 14장. 외부 API를 연동하여 뉴스 뷰어 만들기

<br>
지금까지 배운 것을 활용하여 카테고리별로 최신 뉴스 목록을 보여 주는 뉴스 뷰어 프로젝트를 진행해 보겠습니다. https://newsAPI.org/ 에서 제공하는 API를 사용하여 데이터를 받아 오고, 9장에서 배운 styled-component를 활용하여 프로젝트를 스타일링해 볼 것입니다.
<br><br>

---

<br>

## 14.1 비동기 작업의 이해

<br>
웹 애플리케이션을 만들다 보면 처리할 때 시간이 걸리는 작업이 있습니다. 예를 들어 웹 애플리케이션에서 서버 쪽 데이터가 필요할 때는 Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신합니다. 이렇게 서버의 API를 사용해야 할 때는 네트워크 송수신 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리합니다. 이 과정에서 해당 작업을 비동기적으로 처리하게 됩니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/128039174-984c9e49-16e8-4ed9-b89b-d73fe1a5a538.png)
<br>

만약 작업을 동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없습니다. 그리고 요청이 끝나야 비로소 그다음 예정된 작업을 할 수 있죠. 하지만 이를 비동기적으로 처리한다면 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.
<br><br>
이렇게 서버 API를 호출할 때 외에도 작업을 비동기적으로 처리할 때가 있는데, 바로 setTimeout 함수를 사용하여 특정 작업을 예약할 때입니다. 예를 들어 다음 코드는 3초 후에 printMe 함수를 호출합니다.
<br><br>

```js
function printMe() {
  console.log("Hello World!");
}

setTimeout(printMe, 3000);
console.log("대기 중...");
```

<br>

setTimeout이 사용되는 시점에서 코드가 3초 동안 멈추는 것이 아니라, 일단 코드가 위부터 아래까지 다 호출되고 3초 뒤에 우리가 지정해 준 printMe가 호출되고 있죠. <br><br>
자바스크립트에서 비동기 작업을 할 때 가장 흔히 사용하는 방법은 콜백 함수를 사용하는 것입니다. 위 코드에서는 printMe가 3초 뒤에 호출되도록 printMe 함수 자체를 setTimeout 함수의 인자로 전달해 주었는데, 이런 함수를 콜백 함수라고 부릅니다.
<br><br>

### 14.1.1 콜백 함수

<br>
자, 이번에는 다른 코드를 확인해 보겠습니다. 예를 들어 파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수가 있다고 가정해 보죠. 그리고 해당 함수가 처리된 직후 어떠한 작업을 하고 싶다면 다음과 같이 콜백 함수를 활용해서 작업합니다.
<br><br>

```js
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

increase(0, (result) => {
  console.log(result);
});
```

<br>
1초에 걸쳐서 10, 20, 30, 40과 같은 형태로 여러 번 순차적으로 처리하고 싶다면 콜백 함수를 중첩하여 구현할 수 있습니다.
<br><br>

```js
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

console.log("작업 시작");
increase(0, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        console.log("작업 완료");
      });
    });
  });
});
```

<br>
이렇게 콜백 안에 또 콜백을 넣어서 구현할 수 있는데, 너무 여러 번 중첩되니까 코드의 가독성이 나빠졌지요? 이러한 형태의 코드를 '콜백 지옥'이라고 부릅니다. 웬만하면 지양해야 할 형태의 코드죠.
<br><br>

### 14.1.2 Promise

<br>
Promise는 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능입니다. 앞에서 본 코드를 Promise를 사용하여 구현해 볼까요? 다음 예제를 확인해 봅시다.
<br><br>

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if(result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

increase(0)
  .then(number => {
    // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
    console.log(number);
    return increase(number); // Promise를 리턴하면
  })
  .then(number => {
    // 또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch(e => [
    //도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
  ]);
```

<br>
여러 작업을 연달아 처리한다고 해서 함수를 여러 번 감싸는 것이 아니라 .then을 사용하여 그 다음 작업을 설정하기 때문에 콜백 지옥이 형성되지 않습니다.
<br><br>

### 14.1.3 async/await

<br>
async/await는 Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES2017(ES8) 문법입니다. 이 문법을 사용하려면 함수의 앞 부분에 async 키워드를 추가하고, 해당 함수 내부에서 Promise의 앞부분에 await 키워드를 사용합니다. 이렇게 하면 Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있습니다.
<br><br>

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    // try/catch 구문을 사용하여 에러를 처리합니다.
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```

<br><br>

---

<br>

## 14.2 axios로 API 호출해서 데이터 받아 오기

<br>
axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트입니다. 이 라이브러리의 특징은 HTTP 요청을 Promise 기반으로 처리한다는 점입니다.
<br><br>

```js
//App.js

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
```

<br>
위 코드는 <b>불러오기</b> 버튼을 누르면 JSONPlaceholder(https://jsonplaceholder.typicode.com/)에서 제공하는 가짜 API를 호출하고 이에 대한 응답을 컴포넌트 상태에 넣어서 보여 주는 예제입니다. onClick 함수에서는 axios.get 함수를 사용했습니다. 이 함수는 파라미터로 전달된 주소에 GET 요청을 해 줍니다. 그리고 이에 대한 결과는 .then을 통해 비동기적으로 확인할 수 있습니다. 위 코드에 async를 적용하면 어떨까요?
<br><br>

```js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(response.data);
    } catch e {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;
```

<br>
화살표 함수에 async/await을 적용할 때는 async () => {}와 같은 형식으로 적용합니다.
<br><br>

---

<br>

## 14.3 newsAPI API 키 발급받기

<br>
이번 프로젝트에서는 newsAPI에서 제공하는 API를 사용하여 최신 뉴스를 불러온 후 보여줄 것입니다. 이를 수행하기 위해서는 사전에 newsAPI에서 API 키를 발급받아야 합니다. API 키는 https://newsAPI.org/register 에 가입하면 발급받을 수 있습니다. 사용할 API 주소는 두 가지 형태입니다.
<br><br>

1. <b>전체 뉴스 불러오기</b> <br>
   GET https://newsAPI.org/v2/top-headlines?country=kr&APIKey=67350c36ff6b44e592f9e1a9d902e532
   <Br><br>

2. <b>특정 카테고리 뉴스 불러오기</b><br>
   GET https://newsAPI.org/v2/top-headlines?country=kr&category=business&APIKey=67350c36ff6b44e592f9e1a9d902e532
   <br><br>

여기서 카테고리는 business, entertainment, health, science, sports, technology 중에 골라서 사용할 수 있습니다. 카테고리를 생략하면 모든 카테고리의 뉴스를 불러옵니다. APIKey 값에는 앞에서 여러분이 발급받았던 API 키를 입력해 주세요.
<br><br>

---

<br>

## 14.4 뉴스 뷰어 UI 만들기

<br>

### 14.4.1 NewsItem 만들기

<br>
NewsItem 컴포넌트는 article이라는 객체를 props로 통째로 받아 와서 사용합니다. 
<br><br>

```js
import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
```

<br>

### 14.4.2 NewsList 만들기

<br>
나중에 이 컴포넌트에서 API를 요청하게 됩니다. 지금은 아직 데이터를 불러오지 않고 있으니 sampleArticle 이라는 객체에 미리 예시 데이터를 넣은 후 각 컴포넌트에 전달하여 가짜 내용이 보이게 합니다.
<br><br>

```js
import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList;
```

<br>

---

<br>

## 14.5 데이터 연동하기

<br>
이제 NewsList 컴포넌트에서 이전에 연습 삼아 사용했던 API를 호출해보겠습니다. 컴포넌트가 화면에 보이는 시점에 API를 요청해 볼 텐데요. 이때 useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청하면 됩니다. 여기서 주의할 점은 useEffect에 등록하는 함수에 async를 붙이면 안 된다는 것입니다. useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문입니다.
<br><br>
따라서 useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해 주어야 합니다. 추가로 loading이라는 상태도 관리하여 API 요청이 대기 중인지 판별할 것입니다. 요청이 대기 중일 때는 loading 값이 true가 되고, 요청이 끝나면 loading 값이 false가 되어야 합니다.
<br><br>

```js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=67350c36ff6b44e592f9e1a9d902e532"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
```

<br>
데이터를 불러와서 뉴스 데이터 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때 신경 써야 할 부분이 있습니다. map 함수를 사용하기 전에 꼭 !articles를 조회하여 해당 값이 현재 null이 아닌지 검사해야 합니다. 이 작업을 하지 않으면, 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류가 발생합니다. 그래서 애플리케이션이 제대로 나타나지 않고 흰 페이지만 보이게 됩니다.
<br><br>

---

<br>

## 14.6 카테고리 기능 구현하기

<br>
이번에는 뉴스의 카테고리 선택 기능을 구현해 보겠습니다. 뉴스 카테고리는 총 여섯 개이며, 영어로 되어 있습니다. 화면에 카테고리를 보여 줄 때는 영어로 된 값을 그대로 보여 주지 않고, 다음 그림처럼 한글로 보여 준 뒤 클릭했을 때는 영어로 된 카테고리 값을 사용하도록 구현하겠습니다.
<br><br>

### 14.6.1 카테고리 선택 UI 만들기

<br>
먼저 components 디렉터리에 Categories.js 컴포넌트 파일을 생성하여 다음 코드를 작성하세요.
<br><br>

```js
import React from "react";
import styled from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
```

<br>
위 코드에서는 categories라는 배열 안에 name과 text 값이 들어가 있는 객체들을 넣어 주어서 한글로 된 카테고리와 실제 카테고리 값을 연결시켜 주었습니다. 여기서 name은 실제 카테고리 값을 가리키고, text 값은 렌더링할 때 사용할 한글 카테고리를 가리킵니다.
<br><br>
이제 App에서 category 상태를 useState로 관리하겠습니다. 추가로 category 값을 업데이트하는 onSelect라는 함수도 만들어 주곘습니다. 그러고 나서 category와 onSelect 함수를 Categories 컴포넌트에게 props로 전달해 주세요. 또한, category 값을 NewsList 컴포넌트에게도 전달해 주어야 합니다.
<br><br>

```js
import React, { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
```

<br>
다음으로 Categories에서는 props로 전달받은 onSelect를 각 Category 컴포넌트의 onClick으로 설정해 주고, 현재 선택된 카테고리 값에 따라 다른 스타일을 적용시켜 보세요.
<br><br>

```js
import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  (...)
];

const CategoriesBlock = styled.div`
  (...)
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active && css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
  `}

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
```

<br>

### 14.6.2 API를 호출할 때 카테고리 지정하기

<br>
지금은 뉴스 API를 요청할 때 따로 카테고리를 선택하지 않고 뉴스 목록을 불러오고 있습니다. NewsList 컴포넌트에서 현재 props로 받아 온 category에 따라 카테고리를 지정하여 API를 요청하도록 구현해 보세요.
<br><br>

```js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsListBlock = styled.div`
(...)
`;



const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);



useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
       const query = category === 'all' ? '' : `&category=${category}`;
       const response = await axios.get(
         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=67350c36ff6b44e592f9e1a9d902e532`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);



(…)
};



export default NewsList;
```

<br>
현재 category 값이 무엇인지에 따라 요청할 주소가 동적으로 바뀌고 있습니다. category 값이 all이라면 query 값을 공백으로 설정하고, all이 아니라면 "&category=카테고리" 형태의 문자열을 만들도록 했습니다. 그리고 이 query를 요청할 때 주소에 포함시켜 주었습니다.
<br><br>
추가로 category 값이 바뀔 때마다 뉴스를 새로 불러와야 하기 때문에 useEffect의 의존 배열(두 번째 파라미터로 설정하는 배열)에 category를 넣어 주어야 합니다.
<br><br>

## 14.7 리액트 라우터 적용하기

<br>
방금 진행한 뉴스 뷰어 프로젝트에 리액트 라우터를 적용해 보겠습니다. 기존에는 카테고리 값을 useState로 관리했는데요. 이번에는 이 값을 리액트 라우터의 URL 파라미터를 사용하여 관리해 보겠습니다.
<br><br>

### 14.7.1 리액트 라우터의 설치 및 적용

<br>

### 14.7.2 NewsPage 생성

<br>
이번 프로젝트에 리액트 라우터를 적용할 때 만들어야 할 페이지는 단 하나입니다. src 디렉터리에 pages라는 디렉터리를 생성하고, 그 안에 NewsPage.js 파일을 만들어서 다음과 같이 작성해 보세요.
<br><br>

```js
import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
```

<br>
현재 선택된 category 값을 URL 파라미터를 통해 사용할 것이므로 Categories 컴포넌트에서 현재 선택된 카테고리 값을 알려 줄 필요도 없고, onSelect 함수를 따로 전달해 줄 필요도 없습니다. 다 만들었으면 App의 기존 내용을 모두 지우고 Route를 정의해 주세요. 
<br><br>

```js
import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
```

<br>
위 코드에서 사용된 path에 /:category?와 같은 형태로 맨 뒤에 물음표 문자가 들어가 있는데요. 이는 category 값이 선택적(optional)이라는 의미입니다. 즉, 있을 수도 있고 없을 수도 있다는 뜻이죠. category URL 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주합니다. 
<br><br>

### 14.7.3 Categories에서 NavLink 사용하기

<br>
이제 Categories에서 기존의 onSelect 함수를 호출하여 카테고리를 선택하고, 선택된 카테고리에 다른 스타일을 주는 기능을 NavLink로 대체해 보겠습니다. div, a, button, input처럼 일반 HTML 요소가 아닌 특정 컴포넌트에 styled-components를 사용할 때는 styled(컴포넌트이름)`` 과 같은 형식을 사용합니다.
<br><br>

```js
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const categories = [
  (…)
];



const CategoriesBlock = styled.div`
  (...)
`;



const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;



&:hover {
    color: #495057;
  }



&.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }



& + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => {
        <Category
        key={c.name}
        activeClassName="active"
        exact={c.name === 'all'}
        to={c.name === 'all' ? '/' : `/&{c.name}`}
        >
          {c.text}
        </Category>
      ))}
      </CategoriesBlock>
    );
  };


export default Categories;
```

<br>
NavLink로 만들어진 Category 컴포넌트에 to 값은 "/카테고리이름"으로 설정해 주었습니다. 그리고 카테고리 중에서 <b>전체보기</b>의 경우는 예외적으로 "/all" 대신에 "/"로 설정했습니다. to 값이 "/"를 가리키고 있을 때는 exact 값을 true로 해 주어야 합니다. 이 값을 설정하지 않으면, 다른 카테고리가 선택되었을 때도 <b>전체보기</b> 링크에 active 스타일이 적용되는 오류가 발생합니다.
<br><br>

## 14.8 usePromise 커스텀 Hook 만들기

<br>
이번에는 컴포넌트에서 API 호출처럼 Promise를 사용해야 하는 경우 더욱 간결하게 코드를 작성할 수 있도록 해 주는 커스텀 Hook을 만들어서 우리 프로젝트에 적용해 보겠습니다. 우리가 만들 Hook의 이름은 usePromise입니다. src 디렉터리에 lib 디렉터리를 만들고, 그 안에 usePromise.js를 다음과 같이 작성해 보세요.
<br><br>

```js
import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
```

<br>
프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 보통 이렇게 src 디렉터리에 lib 디렉터리를 만든 후 그 안에 작성합니다. <br><br>
방금 만든 usePromise Hook은 Promise의 대기 중, 완료 결과, 실패 결과에 대한 상태를 관리하며, usePromise의 의존 배열 deps를 파라미터로 받아 옵니다. 파라미터로 받아 온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존 배열로 설정되는데요. 이 배열을 설정하는 부분에서 ESLint 경고가 나타나게 됩니다. 이 경고를 무시하려면 특정 줄에서만 ESLint 규칙을 무시하도록 주석을 작성해 주어야 합니다. 에디터에 초록색 경고 줄이 그어졌을 때 그 위에 커서를 올리면 <b>빠른 수정...</b>이라는 문구가 나타나는데, 이를 클릭하면 자동으로 ESLint 규칙을 비활성화시키는 주석을 입력할 수 있습니다.
<br><br>
코드를 저장한 뒤 NewsList 컴포넌트에서 usePromise를 사용해 보세요.
<br><br>

```js
import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  (...)
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
    );
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }
  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
```

<br>
usePromise를 사용하면 NewsList에서 대기 중 상태 관리와 useEffect 설정을 직접 하지 않아도 되므로 코드가 훨씬 간결해집니다. 요청 상태를 관리할 때 무조건 커스텀 Hook을 만들어서 사용해야 하는 것은 아니지만, 상황에 따라 적절히 사용하면 좋은 코드를 만들어 갈 수 있습니다.
<br><br>

---

<br>

# 15장. Context API

<br>
Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능입니다. 이를테면 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등 여러 종류가 있겠지요. Context API는 리액트 v16.3부터 사용하기 쉽게 많이 개선되었습니다. 이 기능은 리액트 관련 라이브러리에서도 많이 사용되고 있습니다. 예를 들어 리덕스, 리액트 라우터, styled-components 등의 라이브러리는 Context API를 기반으로 구현되어 있습니다.
<br><br>

---

<br>

## 15.1 Context API를 사용한 전역 상태 관리 흐름 이해하기

<br>
프로젝트 내에서 환경 설정, 사용자 정보와 같은 전역적으로 필요한 상태를 관리해야 할 때는 어떻게 해야 할까요? 리액트 애플리케이션은 컴포넌트 간에 데이터를 props로 전달하기 때문에 컴포넌트 여기저기서 필요한 데이터가 있을 때는 주로 최상위 컴포넌트인 App의 state에 넣어서 관리합니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/128635118-2d596064-59ce-4237-9b39-b6a0c2d0e507.png)

<br>
다음과 같이 가정해 볼까요? G 컴포넌트는 전역 상태를 업데이트시키고, F와 J 컴포넌트는 업데이트된 상태를 렌더링합니다. 그렇다면 App 컴포넌트에서는 다음과 같이 상태와 업데이트 함수를 정의해야 합니다.
<br><br>

```js
const [value, setValue] = useState("hello");
const onSetValue = useCallback((value) => setValue(value), []);
```

<br>
그리고 App이 지니고 있는 value 값을 F 컴포넌트와 J 컴포넌트에 전달하려면 여러 컴포넌트를 거쳐야 합니다. F의 경우 App -> A -> B -> F의 흐름이고, J의 경우 App -> H -> J의 흐름입니다. 추가로 G 컴포넌트에 상태 업데이트 함수를 전달할 때도 App -> A -> B -> E -> G와 같이 복잡하게 여러 번 거쳐서 전달해야 합니다.
<br><br>
실제 리액트 프로젝트에서는 더 많은 컴포넌트를 거쳐야 할 때도 있고 다루어야 하는 데이터가 훨씬 많아질 수도 있으므로, 이런 방식을 사용하면 유지 보수성이 낮아질 가능성이 있습니다. 
<br><br>
그렇기 때문에 리덕스나 MobX 같은 상태 관리 라이브러리를 사용하여 전역 상태 관리 작업을 더 편하게 처리하기도 하는데요. 리액트 v16.3 업데이트 이후에는 Context API가 많이 개선되었기 때문에 별도의 라이브러리를 사용하지 않아도 전역 상태를 손쉽게 관리할 수 있습니다. <br><br>
그림 15-3과 같이 기존에는 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달했지만, Context API를 사용하면 Context를 만들어 단 한 번에 원하는 값을 받아 와서 사용할 수 있습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/128635330-9f6bfa00-7a47-4aaf-be99-4a3a742a11b2.png)
<br>

---

<br>

## 15.2 Context API 사용법 익히기

<br>

### 15.2.1 새 Context 만들기

<br>
프로젝트를 생성한 후, 새로운 Context를 만들어 보세요. src 디렉터리에 contexts 디렉터리를 만든 뒤 그 안에 color.js라는 파일을 만듭니다. Context를 만들 때 반드시 contexts 디렉터리에 만들 필요는 없습니다. 다만, 다른 파일과 구분하기 위해 따로 디렉터리를 만들었으며, 추후 Context를 사용할 때는 여러분 마음대로 경로를 지정해도 상관없습니다. 파일을 만들었으면 다음 코드를 입력해 보세요.
<br><br>

```js
import { createContext } from "react";

const ColorContext = createContext({ color: "black" });

export default ColorContext;
```

<br>
새 Context를 만들 때는 createContext 함수를 사용합니다. 파라미터에는 해당 Context의 기본 상태를 지정합니다.
<br><br>

### 15.2.2 Consumer 사용하기

<br>
이번에는 ColorBox라는 컴포넌트를 만들어서 ColorContext 안에 들어 있는 생상을 보여 주겠습니다. 이때 색상을 props로 받아 오는 것이 아니라 ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 색상을 조회할 것입니다. src 디렉터리에 components 디렉터리를 만들고, 그 안에 ColorBox.js 파일을 생성하여 다음 코드를 입력해 보세요.
<br><br>

```js
import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
```

<br>
Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어 주었습니다. 이러한 패턴을 Function as a child, 혹은 Render Props라고 합니다. 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 것이죠.
<br><br>

> Render Props 예제
> <br><br>
> Render Props 패턴이 헷갈린다면 다음 예제를 살펴보세요. 이해하는 데 도움이 될 것입니다.

```js
import React from "react";

const RenderPropsSample = ({ children }) => {
  return <div>결과: {children(5)}</div>;
};

export default RenderPropsSample;
```

> 만약 위와 같은 컴포넌트가 잇다면 추후 사용할 때 다음과 같이 사용할 수 있습니다.

```js
<RenderPropsSample>{(value) => 2 * value}</RenderPropsSample>
```

> RenderPropsSample에게 children props로 파라미터에 2를 곱해서 반환하는 함수를 전달하면 해당 컴포넌트에서는 이 함수에 5를 인자로 넣어서 "결과: 10"을 렌더링합니다.

<br><br>

### 15.2.3 Provider

<br>
Provider를 사용하면 Context의 value를 변경할 수 있습니다. App 컴포넌트를 다음과 같이 수정해 보세요.
<br><br>

```js
import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <ColorContext.Provider value={{ color: red }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
```

<br>
기존에 createContext 함수를 사용할 때는 파라미터로 Context의 기본값을 넣어 주었지요? 이 기본값은 Provider를 사용하지 않았을 때만 사용됩니다. 만약 Provider는 사용했는데 value를 명시하지 않았다면, 이 기본값을 사용하지 않기 때문에 오류가 발생합니다. 다음 코드는 오류가 발생하는 코드입니다.
<br><br>

```js
import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <ColorContext.Provider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
```

<br>
Provider를 사용할 때는 value 값을 명시해 주어야 제대로 작동한다는 것을 꼭 기억하세요!
<br><br>

---

<br>

## 15.3 동적 Context 사용하기

<br>
지금까지 배운 내용으로는 고정적인 값만 사용할 수 있습니다. 이번에는 Context의 값을 업데이트 해야 하는 경우 어떻게 해야 하는지 알아보겠습니다.
<br><br>

### 15.3.1 Context 파일 수정하기

<br>
Context의 value에는 무조건 상태 값만 있어야 하는 것은 아닙니다. 함수를 전달해 줄 수도 있습니다. 기존에 작성했던 ColorContext의 코드를 다음과 같이 수정해 주세요. 이번에 코드를 작성한 후 작성하면 오류가 발생할 텐데, 해당 오류는 나중에 수정할 것이므로 걱정하지 마세요.
<br><br>

```js
import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subColor; 'red'},
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

//ColorProvider와 ColorCosumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
```

<br>
위 파일에서 ColorProvider라는 컴포넌트를 새로 작성해 주었습니다. 그리고 그 컴포넌트에서는 ColorContext.Provider를 렌더링하고 있죠. 이 Provider의 value에는 상태는 state로, 업데이트 함수는 actions로 묶어서 전달하고 있습니다. Context에서 값을 동적으로 사용할 때 반드시 묶어줄 필요는 없지만, 이렇게 state와 actions 객체를 따로따로 분리해 주면 나중에 다른 컴포넌트에서 Context의 값을 사용할 때 편합니다.
<br><br>
추가로 createContext를 사용할 떄 기본값으로 사용할 객체도 수정했습니다. createContext의 기본값은 실제 Proivder의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋습니다. 그렇게 하면 Context 코드를 볼 떄 내부 값이 어떻게 구성되어 있는지 파악하기도 쉽고, 실수로 Provider를 사용하지 않았을 때 리액트 애플리케이션에서 에러가 발생하지 않습니다.
<br><br>

### 15.3.2 새로워진 Context를 프로젝트에 반영하기

<br>
코드를 다 작성했으면 App 컴포넌트에서 ColorContext.Provider를 ColorProvider로 대체하세요.
<br><br>

```js
import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
```

<br>
ColorBox도 마찬가지로 ColorContext.Consumer를 ColorConsumer로 변경하세요. 또한, 사용할 value의 형태도 바뀌었으니 이에 따른 변화를 다음과 같이 반영시켜 보세요.
<br><br>

```js
import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {value => (
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: value.state.subcolor
            }}
          />
        </>
      )}
      </ColorConsumer>
  );
};

export default ColorBox;
```

<br>
위 코드에서 객체 비구조화 할당 문법을 사용하면 다음과 같이 value를 조회하는 것을 생략할 수 있습니다.
<br><br>

```js
import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {{ state }} => (
      <>
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.state.color,
          }}
        />
        <div
          style={{
            width: "32px",
            height: "32px",
            background: value.state.subcolor,
          }}
        />
      </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
```

<br>

### 15.3.3 색상 선택 컴포넌트 만들기

<br>
이번에는 Context의 actions에 넣어 준 함수를 호출하는 컴포넌트를 만들어 보겠습니다. components 디렉터리에 SelectColors.js라는 파일을 생성하여 다음 코드를 작성해 보세요. 지금은 Consumer를 사용하지 않고 UI만 준비해 봅시다.
<br><br>

```js
import React from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
```

<br>
다 작성했으면 이 컴포넌트를 App 컴포넌트에서 ColorBox 위에 렌더링하세요.
<br><br>

```js
import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
```

<br>
이제 해당 SelectColors에서 마우스 왼쪽 버튼을 클릭하면 큰 정사각형의 색상을 변경하고, 마우스 오른쪽 버튼을 클릭하면 작은 정사각형의 색상을 변경하도록 구현해 보겠습니다.
<br><br>

```js
import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
```

<br>
마우스 오른쪽 버튼 클릭 이벤트는 onContextMenu를 사용하면 됩니다. 오른쪽 클릭 시 원래 브라우저 메뉴가 나타나지만, 여기서 e.preventDefault()를 호출하면 메뉴가 뜨지 않습니다.
<br><br>

---

<br>

## 15.4 Consumer 대신 Hook 또는 static contextType 사용하기

<br>
이번에는 Context에 있는 값을 사용할 때 Consumer 대신 다른 방식을 사용하여 값을 받아 오는 방법을 알아보겠습니다.
<br><br>

### 15.4.1 useContext Hook 사용하기

<br>
리액트에 내장되어 있는 Hooks 중에서 useContext라는 Hook을 사용하면, 함수형 컴포넌트에서 Context를 아주 편하게 사용할 수 있습니다. ColorBox 컴포넌트의 코드를 다음과 같이 수정해 보세요.
<br><br>

```js
import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
```

<br>
이전보다 훨씬 간결해졌지요? 만약 children에 함수를 전달하는 Render Props 패턴이 불편하다면, useContext Hook을 사용하여 훨씬 편하게 Context 값을 조회할 수 있습니다. 그러나 Hook은 함수형 컴포넌트에서만 사용할 수 있다는 점에 주의하세요. 클래스형 컴포넌트에서는 Hook을 사용할 수 없습니다.
<br><br>

### 15.4.2 static contextType 사용하기

<br>
클래스형 컴포넌트에서 Context를 좀 더 쉽게 사용하고 싶다면 static contextType을 정의하는 방법이 있습니다. SelectColors 컴포넌트를 다음과 같이 클래스형으로 변환해 보세요. 그리고 Consumer 쪽 코드는 일단 제거해 주세요. 그리고 클래스 상단에 static contextType 값을 지정해 주세요.
<br><br>

```js
import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
```

<br>
이렇게 해 주면 this.context를 조회했을 때 현재 Context의 value를 가리키게 됩니다. 만약 setColor를 호출하고 싶다면 this.context.actions.setColor를 호출하면 되겠죠?
<br><br>

```js
import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
```

<br>
static contextType을 정의하면 클래스 메서드에서도 Context에 넣어 둔 함수를 호출할 수 있다는 장점이 있습니다. 단점이라면, 한 클래스에서 하나의 Context 밖에 사용하지 못한다는 것입니다. 그러나 앞으로 새로운 컴포넌트를 작성할 때 클래스형으로 작성하는 일은 많지 않기 때문에 useContext를 사용하는 쪽을 권합니다.
<br><br>

---

<br>

## 15.5 정리

<br>
기존에는 컴포넌트 간에 상태를 교류해야 할 때 무조건 부모 -> 자식 흐름으로 props를 통해 전달해 주었는데요. 이제는 Context API를 통해 더욱 쉽게 상태를 교류할 수 있게 되었습니다. 프로젝트의 컴포넌트 구조가 꽤 간단하고 다루는 상태의 종류가 그다지 많지 않다면, 굳이 Context를 사용할 필요는 없습니다. 하지만 전역적으로 여기저기서 사용되는 상태가 있고 컴포넌트의 개수가 많은 상황이라면, Context API를 사용하는 것을 권합니다.
<br><br>

---

<br>

# 16장. 리덕스 라이브러리 이해하기

<br>
리덕스는 가장 많이 사용하는 리액트 상태 관리 라이브러리입니다. 리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있습니다. 또한, 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값을 전달하거나 업데이트할 수 있습니다.
<br><br>
리덕스 라이브러리는 전역 상태를 관리할 때 굉장히 효과적입니다. 물론 리덕스를 사용하는 것이 유일한 해결책은 아닙니다. 이전에 배운 Context API를 통해서도 똑같은 작업을 할 수 있습니다. 리액트 v16.3이 릴리즈되면서 Context API가 개선되기 전에는 사용 방식이 매우 불편했기 때문에 주로 리덕스를 사용해 전역 상태 관리를 해 왔습니다.
<br><br>
단순히 전역 상태 관리만 한다면 Context API를 사용하는 것만으로도 충분합니다. 하지만 리덕스를 사용하면 상태를 더욱 체계적으로 관리할 수 있기 때문에 프로젝트의 규모가 클 경우에는 리덕스를 사용하는 편이 좋습니다. 코드의 유지 보수성도 높여 주고 작업 효율도 극대화해 주기 때문입니다. 추가로 아주 편리한 개발자 도구도 지원하며, 미들웨어라는 기능을 제공하여 비동기 작업을 훨씬 효율적으로 관리할 수 있게 해 주기도 합니다.
<br><br>

---

<br>

## 16.1 개념 미리 정리하기

<br>
앞으로 리덕스를 사용하면서 접하게 될 키워드의 개념을 우선 간략히 알아보겠습니다. 도중에 잘 이해되지 않는 내용은 나중에 직접 사용해 본 다음 이 절로 다시 돌아와서 읽으면 더욱 잘 이해될 것입니다.
<br><br>

### 16.1.1 액션

<br>
상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생합니다. 이는 하나의 객체로 표현되는데요. 액션 객체는 다음과 같은 형식으로 이루어져 있습니다.
<br><br>

```js
{
  type: "TOGGLE_VALUE";
}
```

<br>
액션 객체는 type 필드를 반드시 가지고 있어야 합니다. 이 값을 액션의 이름이라고 생각하면 됩니다. 그리고 그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이며, 작성자 마음대로 넣을 수 있습니다. 예시 액션을 한번 살펴볼까요?
<br><br>

```js
{
  type: 'ADD_TODO',
  data: {
    id: 1,
    text: '리덕스 배우기'
  }
}

{
  type: 'CHANGE_INPUT',
  text: '안녕하세요'
}
```

<br>

### 16.1.2 액션 생성 함수

<br>
액션 생성 함수(action creator)는 액션 객체를 만들어 주는 함수입니다.
<br><br>

```js
function addTodo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}

//화살표 함수로도 만들 수 있습니다.

const changeInput = (text) => ({
  type: "CHANGE_INPUT",
  text,
});
```

<br>
어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거로울 수 있고, 만드는 과정에서 실수로 정보를 놓칠 수도 있습니다. 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리합니다.
<br><br>

### 16.1.3 리듀서

<br>
리듀서(reducer)는 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 옵니다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해 줍니다. 리듀서 코드는 다음과 같은 형태로 이루어져 있습니다.
<br><br>

```js
const initialState = {
  counter: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
```

<br>

### 16.1.4 스토어

<br>
프로젝트에 리덕스를 적용하기 위해 스토어(store)를 만듭니다. 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있습니다. 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있으며, 그 외에도 몇 가지 중요한 내장 함수를 지닙니다.
<br><br>

### 16.1.5 디스패치

<br>
디스패치(dispatch)는 스토어의 내장 함수 중 하나입니다. 디스패치는 '액션을 발생시키는 것' 이라고 이해하면 됩니다. 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출합니다. 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줍니다.
<br><br>

### 16.1.6 구독

<br>
구독(subscribe)도 스토어의 내장 함수 중 하나입니다. subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출됩니다.
<br><br>

```js
const listener = () => {
  console.log("상태가 업데이트됨");
};
const unsubscribe = store.subscribe(listener);

unsubscribe(); //추후 구독을 비활성화할 때 함수를 호출
```

<br>

---

<br>

## 16.2 리액트 없이 쓰는 리덕스

<br>
리덕스는 리액트에 종속되는 라이브러리가 아닙니다. 리액트에서 사용하려고 만들어졌지만 실제로 다른 UI 라이브러리/프레임워크와 함께 사용할 수도 있습니다(예: angular-redux, ember redux, Vue에서도 사용할 수 있지만, Vue에서는 리덕스와 유사한 vuex를 주로 사용합니다.)
<br><br>
리덕스는 바닐라(vanilla) 자바스크립트와 함께 사용할 수도 있습니다. 바닐라 자바스크립트는 라이브러리나 프레임워크 없이 사용하는 순수 자바스크립트 그 자체를 의미합니다. 이번에는 바닐라 자바스크립트 환경에서 리덕스를 사용하여 리덕스의 핵심 기능과 작동 원리를 이해해 보겠습니다.
<br><br>

### 16.2.1 Parcel로 프로젝트 만들기

<br>
프로젝트를 구성하기 위해 Parcel이라는 도구를 사용하겠습니다. 이 도구를 사용하면 아주 쉽고 빠르게 웹 애플리케이션 프로젝트를 구성할 수 있습니다. 먼저 parcel-bundler를 설치해 주세요.
<br><br>

```
& yarn global add parcel-bundler
# yarn global이 잘 설치되지 않는다면 npm install -g parcel-bundler를 해 보세요.
```

<br>
프로젝트 디렉터리를 생성한 후 package.json 파일을 생성하세요.
<br><br>

```
$ mkdir vanilla-redux
$ cd vanilla-redux
# package.json 파일을 생성합니다.
$ yarn init -y
```

<br>
에디터로 해당 디렉터리를 열어서 index.html과 index.js 파일을 만들어 주세요.
<br><br>

```html
<html>
  <body>
    <div>바닐라 자바스크립트</div>
    <script src="./index.js"></script>
  </body>
</html>
```

<br>

```js
console.log("hello parcel");
```

<br>
다 작성한 후에 다음 명령어를 실행하면 개발용 서버가 실행됩니다.
<br><br>

```
$ parcel index.html
Server running at http://localhost:1234
  Built in 548ms.
```

<br>
다음으로 yarn을 사용하여 리덕스 모듈을 설치하세요.
<br><br>

```
$ yarn add redux
```

<br>

### 16.2.2 간단한 UI 구성하기

<br>
먼저 간단한 스타일 파일을 작성하겠습니다.
<br><br>

```css
.toggle {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  box-sizing: border-box;
}

.toggle.active {
  background: yellow;
}
```

<br>
다음으로 index.html을 수정하세요.
<br><br>

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="index.css" />
  </head>
  <body>
    <div class="toggle"></div>
    <hr />
    <h1>0</h1>
    <button id="increase">+1</button>
    <button id="decrease">-1</button>
    <script src="./index.js"></script>
  </body>
</html>
```

<br>
다음과 같이 간단한 UI를 구성했습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/128878523-25ee121e-cbe1-4821-bcfe-a33d1dbd09e1.png)
<br>

### 16.2.3 DOM 레퍼런스 만들기

<br>
이번 프로젝트에서는 UI를 관리할 때 별도의 라이브러리를 사용하지 않기 때문에 DOM을 직접 수정해 주어야 합니다. 다음과 같이 자바스크립트 파일 상단에 수정할 DOM 노드를 가리키는 값을 미리 선언해 줍니다. 기존 코드는 지워 주세요.
<br><br>

```js
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
```

<br>

### 16.2.4 액션 타입과 액션 생성 함수 정의

<br>
프로젝트의 상태에 변화를 일으키는 액션이라고 합니다. 먼저 액션에 이름을 정의해 주겠습니다. 액션 이름은 문자열 형태로, 주로 대문자로 작성하며 액션 이름은 고유해야 합니다. 이름이 중복되면 의도하지 않은 결과가 발생할 수 있기 때문입니다.
<br><br>

```js
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
```

<br>
다음으로 이 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성해 줍니다. 액션 객체는 type 값을 반드시 갖고 있어야 하며, 그 외에 추후 상태를 업데이트할 때 참고하고 싶은 값은 여러분 마음대로 넣을 수 있습니다.
<br><br>

```js
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
```

<br>

### 16.2.5 초깃값 설정

<br>
이 프로젝트에서 사용할 초깃값을 정의해 주겠습니다. 초깃값의 형태는 자유입니다. 숫자일 수도 있고, 문자열일 수도 있고, 객체일 수도 있습니다.
<br><br>

```js
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};
```

<br>

### 16.2.6 리듀서 함수 정의

<br>
리듀서는 변화를 일으키는 함수입니다. 함수의 파라미터로는 state와 action 값을 받아 옵니다.
<br><br>

```js
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0
};

//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지를 해 주어야 합니다.
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default;
      return state;
  }
}
```

<br>
리듀서 함수가 맨 처음 호출될 때는 state 값이 undefined 입니다. 해당 값이 undefined로 주어졌을 때는 initialState를 기본값으로 설정하기 위해 함수의 파라미터 쪽에 기본값이 설정되어 있습니다. <br><br>
리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 주어야 합니다. 이 작업을 할 때 spread 연산자(...)를 사용하면 편합니다. 단, 객체의 구조가 복잡해지면(예를 들어 object.something.inside.value) spread 연산자로 불변성을 관리하며 업데이트하는 것이 굉장히 번거로울 수 있고 코드의 가독성도 나빠지기 때문에 리덕스의 상태는 최대한 깊지 않은 구조로 진행하는 것이 좋습니다.
<br><br>
객체의 구조가 복잡해지거나 배열도 함께 다루는 경우 immer 라이브러리를 사용하면 좀 더 쉽게 리듀서를 작성할 수 있습니다.
<br><br>

### 16.2.7 스토어 만들기

<br>
이제 스토어를 만들어 보겠습니다. 스토어를 만들 때는 createStore 함수를 사용합니다. 이 함수를 사용하려면 코드 상단에 import 구문을 넣어 리덕스에서 해당 함수를 불러와야 하고, 함수의 파라미터에는 리듀서 함수를 넣어 주어야 합니다.
<br><br>

```js
import { createStore } from 'redux';

(...)

const store = createStore(reducer);
```

<br>
이제 스토어를 생성했으니, 스토어 내장 함수들을 사용해 줄 차례입니다.
<br><br>

### 16.2.8 render 함수 만들기

<br>
render라는 함수를 작성해 보겠습니다. 이 함수는 상태가 업데이트될 때마다 호출되며, 리액트의 render 함수와는 다르게 이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경해 줍니다.
<br><Br>

```js
(...)

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); //현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
```

<br>

### 16.2.9 구독하기

<br>
이제 스토어의 상태가 바뀔 때마다 방금 만든 render 함수가 호출되도록 해 줄 것입니다. 이 작업은 스토어의 내장 함수 subscribe를 사용하여 수행할 수 있습니다. <br><br>
subscribe 함수의 파라미터로는 함수 형태의 값을 전달해 줍니다. 이렇게 전달된 함수는 추후 액션이 발생하여 상태가 업데이트 될 때마다 호출됩니다.
<br><br>
이번 프로젝트에서는 subscribe 함수를 직접 사용하지만, 추후 리액트 프로젝트에서 리덕스를 사용할 때는 이 함수를 직접 사용하지 않을 것입니다. 왜냐하면, 컴포넌트에서 리덕스 상태를 조회하는 과정에서 react-redux라는 라이브러리가 이 작업을 대신해 주기 때문입니다. 이제 상태가 업데이트될 때마다 render 함수를 호출하도록 코드를 작성해 봅시다.
<br><br>

```js
(...)

const render = () => {
  const state = store.getState(); //현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render);
```

<br>

### 16.2.10 액션 발생시키기

<br>
액션을 발생시키는 것을 디스패치라고 합니다. 디스패치를 할 때는 스토어의 내장 함수 dispatch를 사용합니다. 파라미터는 액션 객체를 넣어 주면 됩니다. <br><br>
다음과 같이 각 DOM 요소에 클릭 이벤트를 설정하세요. 이벤트 함수 내부에서는 dispatch 함수를 사용하여 액션을 스토어에게 전달해 주겠습니다.
<br><br>

```js
(...)
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
```

<br>
화면에 나타나는 원과 하단의 버튼을 클릭해 보세요. 상태 변화가 잘 일어나고 있나요?
<br><br>

![image](https://user-images.githubusercontent.com/78855917/128884462-a1849c4b-d8e2-484f-b367-6445a622b55b.png)

---

<br>

## 16.3 리덕스의 세 가지 규칙

<br>
리덕스를 프로젝트에서 사용할 때 지켜야 하는 세 가지 규칙을 알아봅시다.
<br><br>

### 16.3.1 단일 스토어

<br>
하나의 애플리케이션 안에는 하나의 스토어가 들어 있습니다. 사실 여러 개의 스토어를 사용하는 것이 완전히 불가능하지는 않습니다. 특정 업데이트가 너무 빈번하게 일어나거나 애플리케이션의 특정 부분을 완전히 분리시킬 때 여러 개의 스토어를 만들 수도 있지만, 상태 관리가 복잡해질 수 있으므로 권장하지 않습니다.
<br><br>

### 16.3.2 읽기 전용 상태

<br>
리덕스 상태는 읽기 전용입니다. 기존에 리액트에서 setState를 사용하여 state를 업데이트할 때도 객체나 배열을 업데이트하는 과정에서 불변성을 지켜 주기 위해 spread 연산자를 사용하거나 immer와 같은 불변성 관리 라이브러리를 사용했지요? 리덕스도 마찬가지입니다. 상태를 업데이트할 때 기존의 객체는 건드리지 않고 새로운 객체를 생성해 주아야 합니다. <br><br>
리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교(shallow equality) 검사를 하기 때문입니다. 객체의 변화를 감지할 때 객체의 깊숙한 안쪽까지 비교하는 것이 아니라 겉핥기 식으로 비교하여 좋은 성능을 유지할 수 있는 것이죠.
<br><br>

### 16.3.3 리듀서는 순수한 함수

<br>
변화를 일으키는 리듀서 함수는 순수한 함수여야 합니다. 순수한 함수는 다음 조건을 만족합니다.
<br><br>

- 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다.
- 파라미터 외의 값에는 의존하면 안됩니다.
- 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환합니다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 합니다.
  <br><br>

리듀서를 작성할 때는 위 네 가지 사항을 주의해 주세요. 예를 들어 리듀서 함수 내부에서 랜덤 값을 만들거나, Date 함수를 사용하여 현재 시간을 가져오거나, 네트워크 요청을 한다면, 파라미터가 같아도 다른 결과를 만들어 낼 수 있기 때문에 사용하면 안 됩니다. 이러한 작업은 리듀서 함수 바깥에서 처리해 주어야 합니다. 액션을 만드는 과정에서 처리해도 되고, 추후 배울 리덕스 미들웨어에서 처리해도 됩니다. 주로 네트워크 요청과 같은 비동기 작업은 미들웨어를 통해 관리합니다.
<br><br>

---

<br>

# 17장. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

<br>
이번 장에서는 리덕스를 사용하여 리액트 애플리케이션 상태를 관리하는 방법을 알아보겠습니다. 소규모 프로젝트에서는 컴포넌트가 가진 state를 사용하는 것만으로도 충분하지만, 프로젝트의 규모가 커짐에 따라 상태 관리가 번거로워질 수 있습니다.
<br><br>
리액트 애플리케이션에서 리덕스를 사용하면, 상태 업데이트에 관한 로직을 모듈로 따로 분리하여 컴포넌트 파일과 별개로 관리할 수 있으므로 코드를 유지 보수하는 데 도움이 됩니다. 또한, 여러 컴포넌트에서 동일한 상태를 공유해야 할 때 매우 유용하며, 실제 업데이트가 필요한 컴포넌트만 리렌더링되도록 쉽게 최적화해 줄 수도 있습니다.
<br><br>
앞에서 바닐라 자바스크립트 환경에서 리덕스를 사용할 때 스토어의 내장 함수인 store.dispatch와 store.subscribe 함수를 사용했지요? 리액트 애플리케이션에서 리덕스를 사용할 때는 store 인스턴스를 직접 사용하기보다는 주로 react-redux라는 라이브러리에서 제공하는 유틸 함수(connect)와 컴포넌트(Provider)를 사용하여 리덕스 관련 작업을 처리합니다.
<br><br>

## 17.1 작업 환경 설정

<br>
리액트 프로젝트를 생성하고, 해당 프로젝트에 리덕스를 적용해 봅시다.
<br><br>

```
$ yarn create react-app react-redux-tutorial
$ cd react-redux-tutorial
$ yarn add redux react-redux
```

<br>
Prettier를 적용하고 싶다면 디렉터리에 다음과 같이 .prettierrc 파일을 작성하세요.
<br><br>

```js
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

<br>

---

<br>

## 17.2 UI 준비하기

<br>
리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것입니다. 여기서 프레젠테이셔널 컴포넌트란 주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트를 말합니다. 이와 달리 컨테이너 컴포넌트는 리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 합니다. 
<br><br>

이러한 패턴은 리덕스를 사용하는 데 필수 사항은 아닙니다. 다만 이 패턴을 사용하면 코드의 재사용성도 높아지고, 관심사의 분리가 이루어져 UI를 작성할 때 좀 더 집중할 수 있습니다. UI에 관련된 프레젠테이셔널 컴포넌트는 src/components 경로에 저장하고, 리덕스와 연동된 컨테이너 컴포넌트는 src/containers 컴포넌트에 작성합니다.
<br><br>

### 17.2.1 카운터 컴포넌트 만들기

<br>
숫자를 더하고 뺄 수 있는 카운터 컴포넌트를 만들어 봅시다.
<br><br>

```js
//components/Counter.js
import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
```

<br>
이제 이 컴포넌트를 App 컴포넌트에서 렌더링합니다.
<br><br>

```js
import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter number={0} />
    </div>
  );
};

export default App;
```

<br>

### 17.2.2 할 일 목록 컴포넌트 만들기

<br>

이번에는 해야 할 일을 추가하고, 체크하고, 삭제할 수 있는 할 일 목록 컴포넌트를 만들어 보겠습니다.
<br><br>

```js
//components/Todos.js
import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = ({
  input, //인풋에 입력되는 텍스트
  todos, //할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
```

<br>

---

<br>

## 17.3 리덕스 관련 코드 작성하기

<br>
이제 프로젝트에 리덕스를 사용해 보겠습니다. 리덕스 관련 코드를 준비합니다. 리덕스를 사용할 때는 액션 타입, 액션 생성 함수, 리듀서 코드를 작성해야 하는데요. 이 코드들을 각각 다른 파일에 작성하는 방법도 있고, 기능별로 묶어서 파일 하나에 작성하는 방법도 있습니다.
<br><br>

![image](https://user-images.githubusercontent.com/78855917/132099671-d4eed1b4-59af-4c11-b3a9-5533ec1610e2.png)
<br>

이 방법은 가장 일반적인 구조로 actions, constants, reducers 라는 세 개의 디렉터리를 만들고 그 안에 기능별로 파일을 하나씩 만드는 방식입니다. 코드를 종류에 따라 다른 파일에 작성하여 정리할 수 있어서 편리하지만, 새로운 액션을 만들 때마다 세 종류의 파일을 모두 수정해야 하기 때문에 불편하기도 합니다.
<br><Br>

![image](https://user-images.githubusercontent.com/78855917/132099727-23bc950f-6969-4012-b4ba-6978578ced37.png)
<br>

이 방법은 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방식입니다. 이러한 방식을 Ducks 패턴이라고 부르며, 앞서 설명한 일반적인 구조로 리덕스를 사용하다가 불편함을 느낀 개발자들이 자주 사용합니다. 이 책에서는 두 번째로 소개한 방식인 Ducks 패턴을 사용하여 코드를 작성하겠습니다.
<br><br>

### 17.3.1 counter 모듈 작성하기

<br>
Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 '모듈'이라고 합니다. 먼저 counter 모듈을 작성해 봅시다.
<br><br>

#### 17.3.1.1 액션 타입 정의하기

<br>
modules 디렉터리를 생성하고 그 안에 counter.js 파일을 다음과 같이 작성하세요.
<br><br>

```js
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
```

<br>
가장 먼저 해야 할 작업은 액션 타입을 정의하는 것입니다. 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로 작성합니다. 문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게 해 줍니다. 예를 들어 SHOW 혹은 INITIALIZE라는 이름을 가진 액션은 쉽게 중복될 수 있겠죠? 하지만 앞에 모듈 이름을 붙여 주면 액션 이름이 겹치는 것을 걱정하지 않아도 됩니다. 
<br><Br>

#### 17.3.1.2 액션 생성 함수 만들기

<br>
액션 타입을 정의한 다음에는 액션 생성 함수를 만들어 주어야 합니다.
<br><br>

```js
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
```

<br>
더 필요하거나 추가할 값이 없으니 그냥 위와 같이 만들어 주면 됩니다. 여기서 주의해야 할 점은 앞부분에 export라는 키워드가 들어간다는 것입니다. 이렇게 함으로써 추후 이 함수를 다른 파일에서 불러와 사용할 수 있습니다.
<br><br>

### 17.3.1.3 초기 상태 및 리듀서 함수 만들기

<br>
이제 counter 모듈의 초기 상태와 리듀서 함수를 만들어 줍니다.
<br><br>

```js
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
```

<br>
이 모듈의 초기 상태에는 number 값을 설정해 주었으며, 리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드를 작성해 주었습니다. 마지막으로 export default 키워드를 사용하여 함수를 내보내 주었습니다. 여기서 export default는 단 한 개의 함수만 내보낼 수 있습니다. 불러오는 방식도 다릅니다.
<br><br>

```js
import counter from "./counter";
import { increase, decrease } from "./counter";
//한꺼번에 불러오고 싶을 때
import counter, { increase, decrease } from "./counter";
```

<br>

### 17.3.2 todos 모듈 만들기

<br>

#### 17.3.2.1 액션 타입 정의하기

<br>
이전과 마찬가지로 가장 먼저 해야 할 일은 액션 타입 정의입니다.
<br><br>

```js
const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋 값을 변경함
const INSERT = "todos/INSERT"; // 새로운 todo를 등록함
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크 해제함
const REMOVE = "todos/REMOVE"; // todo를 제거함
```

<br>

#### 17.3.2.2 액션 생성 함수 만들기

<br>
다음으로 액션 생성 함수를 만듭니다. 조금 전과 달리 이번에는 액션 생성 함수에서 파라미터가 필요합니다. 전달 받은 파라미터는 액션 객체 안에 추가 필드로 들어가게 됩니다.
<br><br>

```js
const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋 값을 변경함
const INSERT = "todos/INSERT"; // 새로운 todo를 등록함
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크 해제함
const REMOVE = "todos/REMOVE"; // todo를 제거함

export const changInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3; //insert가 호출될 때마다 1씩 더해집니다.
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});
```

<br>
위 액션 생성 함수 중에서 insert 함수는 액션 객체를 만들 때 파라미터 외에 사전에 이미 선언되어 있는 id라는 값에도 의존합니다. 이 액션 생성 함수는 호출될 때마다 id 값에 1씩 더해 줍니다. 이 id 값은 각 todo 객체가 들고 있게 될 고윳값이죠.
<br><br>
여기서 id 값이 3인 이유는 다음 절에서 초기 상태를 작성할 때 todo 객체 두 개를 사전에 미리 넣어 둘 것이므로 그 다음에 새로 추가될 항목의 id가 3이기 때문입니다.
<br><br>

#### 17.3.2.3 초기 상태 및 리듀서 함수 만들기

<br>
이제 모듈의 초기 상태와 리듀서 함수를 작성합시다. 이번에는 업데이트 방식이 조금 까다로워집니다. 객체에 한 개 이상의 값이 들어가므로 불변성을 유지해 주어야 하기 때문이죠. spread 연산자(...)를 잘 활용하여 작성해 보세요. 배열에 변화를 줄 때는 배열 내장 함수를 사용하여 구현하면 됩니다. 
<br><br>

```js
(...)
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false
    }
  ]
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
          )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;
```

<br>

### 17.3.3 루트 리듀서 만들기

<br>
이번 프로젝트에서는 리듀서를 여러 개 만들었지요? 나중에 createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 합니다. 그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐 주어야 하는데요. 이 작업은 리덕스에서 제공하는 combineReducers라는 유틸 함수를 사용하면 쉽게 처리할 수 있습니다.
<br><br>

```js
//modules/index.js
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
```

<br>
파일 이름을 이렇게 index.js로 설정해 주면 나중에 불러올 때 디렉터리 이름까지만 입력하여 불러올 수 있습니다. 다음과 같이 말이죠.
<br><br>

```js
import rootReducer from "./modules";
```

<br>

---

<br>
