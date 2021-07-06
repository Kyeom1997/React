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
import React from ‘react‘;

function App() {
  const name = '리액트';
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
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
import React from 'react';
import './App.css';


function App() {
  const name = '리액트';
  return (
    <>
      <div className=“react“>{name}</div>
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
