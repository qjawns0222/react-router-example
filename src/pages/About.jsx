import { useLocation } from "react-router-dom";
import queryString from "query-string";
export default function About() {
  const { search } = useLocation();
  const name = queryString.parse(search).name;

  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>이름은{name}입니다.</p>}
    </div>
  );
}
