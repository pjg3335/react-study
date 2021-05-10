네트워크를 통해 불러오는 등 지연시간이 있는 자료를 불러오는 경우에 대해서는 다음과 같이 2가지 함수를 만든다.

1. 추후에 요청할 수 있도록 하는 hook => `useLazyQuery`
2. props의 변경에따라 즉각 반응하는 hook => `useQuery`

`useQuery`는 `useLazyQuery`의 wrapper이다.
