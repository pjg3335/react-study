그냥 [Error Boundary](https://ko.reactjs.org/docs/error-boundaries.html)를 사용할때와 마찬가지로 외부 `state`의 변화에 따라 자동으로 error체크를 다시 해 주지는 않는다.  
<br/>
다만 fallback화면과 reset 버튼을 빠르게 만들 수 있게 기본적으로 기능을 제공해주고, 해당 reset버튼을 눌렀을때 reset해 줄 로직을 정의 해줄수 있다.
