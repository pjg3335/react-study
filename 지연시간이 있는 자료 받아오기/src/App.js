import { useState } from "react";
import useQuery from "./useQuery";

function App() {
  const [id, setId] = useState(1);
  return (
    <>
      <button onClick={() => setId(parseInt(Math.random() * 100))}>
        id 변경
      </button>
      {/* 
        간결한 표현을 위해 Post을 직접 요청 하지만,
        실제로는 router로 들어왔다고 가정하고 볼 것
      */}
      <br />
      <Post contentId={id} />
    </>
  );
}

function Post(props) {
  const { contentId } = props;
  const { data, loading } = useQuery(contentId);

  return loading ? (
    <div>now loading...</div>
  ) : (
    <>
      <h2>Post</h2>
      <div>id: {data.id}</div>
      <div>content: {data.content}</div>
    </>
  );
}

export default App;
