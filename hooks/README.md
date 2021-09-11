react 17.0.2를 기준으로 봄. 내부구현은 언제든지 달라질 수 있으니 반드시 버젼 맞출 것

## react-dom은 어떤 파일을 가지고 오는가?

1. react의 소스코드는 **index.js**의 `ReactDOM.render()`에서 시작 이는 react-dom 모듈의 소속임
2. react-dom은 **node_module/react-dom/index.js**이고 development를 기준으로 `module.exports = require('./cjs/react-dom.development.js');`를 내보냄
3. **react-dom.development.js**의 맨 아래에 보면 `render`함수를 `exports.render = render;`로써 내보내는것을 확인 할 수 있음.  
(이름이 `render`이니까 여기를 계속 따라가면 아마 render과정을 볼 수 있을것임. 하지만 지금은 hooks를 보는 시간이니 우선 **react-dom.development.js**를 불러들인다는 것만 알고 넘어갈 것.)

<br/>

## hook의 구현 확인하기

대충 만만해 보이는 `useState`의 구현을 살펴보며 hook이 어떻게 동작하는지 확인해 보자. 

1. `React.useState`는 react모듈 소속임
2. react모듈은 **node_module/react/index.js**이고 development를 기준으로 `module.exports = require('./cjs/react.development.js');`를 내보냄
3. **react.development.js**에서 "useState"를 검색해 보면 다음과 같은 useState함수를 찾을 수 있음  

    ```javascript
    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }
    ``` 
    (useState는 `dispatcher.useState`를 사용하고 있음.)
4. `dispatcher`를 찾기 위해 `resolveDispatcher()`를 시작으로 끝까지 따라가면 다음과 같이 나옴.

    ```javascript
    // resolveDispatcher
    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;
      ...
      return dispatcher;
    }

    // ReactCurrentDispatcher
    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    ```
    결국 dispatcher는 `null`로써 끝이난다.

`null`에서 끝났다는것은 이는 사용하지 않는코드이거나 잘못따라왔을 수 있다는 것인데, `useState`에 `console.log('useState', initialState)`코드를 추가하여 로그를 찍어보면 브라우저 상에서 로그가 잘 출력이 된다. 즉, 여기가 맞다.  
(log가 안찍힌다면 캐시를 탄 것이다 `yarn cache clean`후 다시 해보자.)

<br/>

## ReactCurrentDispatcher를 `export`하는 부분 확인
`ReactCurrentDispatcher`를 따라간 결과가 `null`이었지만 이는 외부에서 주입해 주기 때문에 실제 런타임에서는 당연히 `null`이 아니다. 이를 `export`하주는 부분을 확인해 보자.

1. `ReactCurrentDispatcher`의 주소는 `ReactSharedInternals`이 가지고 있다.

    ```javascript
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    ```
2. 그리고 이는 다음과 같은 이름으로 `export`되고 있다

    ```javascript
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals
    ```

`dispatcher`를 react가 직접 구현 안하고 `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`를 통해 주입받는것은 react를 react-dom뿐만 아니라 native 등에서 사용할 수 있게 하기 위함이라 카더라  
<br/>

## __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED를 `impot`하는 부분

`import`는 아무나 할 수 있는데, 이 예제는 cra를 기준으로 작성하였기 때문에 react-dom이 `import`한다.

1. 위에서 본 **react-dom.development.js**에 다음과 같이 소스가 있다. 

    ```javascript
    var React = require('react');

    ...
    
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    ...

    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
    ```
2. 

<hr/>

## hooks의 구현
