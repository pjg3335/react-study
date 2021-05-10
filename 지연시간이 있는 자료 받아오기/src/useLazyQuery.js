import { useState } from "react";

/*
  네트워크를 통해 값을 받아오는 함수 (처럼 보이는 함수)
*/
function useLazyQuery() {
  const [called, setCalled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  function getData(id) {
    setCalled(true);
    setLoading(true);

    setTimeout(() => {
      setData({ id, content: `${id}의 내용` });
      setLoading(false);
    }, 2000);
  }

  return [getData, { data, called, loading }];
}

export default useLazyQuery;
