import { useEffect } from "react";
import useLazyQuery from "./useLazyQuery";

function useQuery(id) {
  const [getData, { data, loading, called }] = useLazyQuery();

  useEffect(() => getData(id), [id]);

  return { data, loading: loading || !called };
}

export default useQuery;
