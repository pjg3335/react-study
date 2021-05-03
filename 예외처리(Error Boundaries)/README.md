## ErrorBoundary

선언형인 JSX에서 try-catch하는 방법. 실제 catch와 비슷하게 하위에서 터진것도 다 상위에서 잡는다.
cra에서 `yarn start`로 돌릴경우 오버레이가 떠서 ErrorBoundary처리가 안 된것 처럼 보이는데, 우측 상단의 `×`버튼 누르면 됨  
<br/>
ErrorBoundary는 내부 state로 error를 처리하기 때문에 다른걸 바꿔서 re-render하더라도 무조건 error상태로 보여준다.

[관련링크]  
[공식문서](https://ko.reactjs.org/docs/error-boundaries.html)  
[오버레이 관련](https://stackoverflow.com/questions/46589819/disable-error-overlay-in-development-mode/47400249#47400249)
