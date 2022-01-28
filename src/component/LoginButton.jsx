import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function login() {
    navigate("/");
  }
  return <button onClick={login}>로그인</button>;
}
