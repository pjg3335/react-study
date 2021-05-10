
const MyReact = (function () {
  let hooks = [], currentHook = 0;
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      currentHook = 0;
      return Comp;
    },
    // useState === 전역배열에 있는 값과 새로 들어온 값 비교하는 함수
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray; // 아무것도 안들어온 경우
      const deps = hooks[currentHook]; // 이전 값(배열) 가져오기
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        hooks[currentHook] = depArray;
      }
      currentHook++;
    },
    // useState === 전역배열에 값을 읽고 쓰게 해줌
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue;
      const setStateHookIndex = currentHook;
      const setState = (newState) => (hooks[setStateHookIndex] = newState);
      return [hooks[currentHook++], setState];
    },
  };
})();

function Counter() {
  const [count, setCount] = MyReact.useState(0)
  const [text, setText] = MyReact.useState('foo') // 두번 째 상태 Hook!
  MyReact.useEffect(() => {
    console.log('effect', count, text)
  }, [count, text])
  return {
    click: () => setCount(count + 1),
    type: (txt) => setText(txt),
    noop: () => setCount(count),
    render: () => console.log('render', { count, text }),
  }
}
let App
App = MyReact.render(Counter)
// 이펙트 0 foo
// render {count: 0, text: 'foo'}
App.click()
App = MyReact.render(Counter)
// 이펙트 1 foo
// render {count: 1, text: 'foo'}
App.type('bar')
App = MyReact.render(Counter)
// 이펙트 1 bar
// render {count: 1, text: 'bar'}
App.noop()
App = MyReact.render(Counter)
// // 이펙트가 실행되지 않음
// render {count: 1, text: 'bar'}
App.click()
App = MyReact.render(Counter)
// 이펙트 2 bar
// render {count: 2, text: 'bar'}


/*
출처1: https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/
출처2: https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/
*/