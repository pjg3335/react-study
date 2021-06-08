import React, { useEffect, useRef, useState } from "react";

/*
readme 보기
*/

const data = Array.from({ length: 200 });

function App() {
  const ref = useRef(null);

  const scrollTop = useScroll(ref);
  console.log(scrollTop);

  return (
    <div
      ref={ref}
      style={{
        width: "300px",
        height: "500px",
        overflow: "auto",
        border: "1px solid red",
      }}
    >
      <ChatItems items={data} />
    </div>
  );
}

const ChatItems = React.memo(({ items }) => {
  console.log("render");
  return (
    <div>
      {items.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
});

function useScroll(ref) {
  const [scrollTop, setScrollTop] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = ref.current || { scrollTop: -1 };
      setScrollTop(scrollTop);
    };
    ref.current?.addEventListener("scroll", handleScroll);
    return () => ref.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollTop;
}

export default App;
