import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Test4() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter(current => current +1);
  const onChange = e => setKeyword(e.target.value);
  const onShowing = () => setShowing((prev) => !prev);
  //console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []); //dependency 인자를 비워두면 처음 1번만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  // useEffect(() => {
  //   console.log("I run when keyword or counter changes");
  // }, [keyword, counter]);

  const Hello = () => {
    useEffect(() => {
      console.log("hi :)");   //render시 실행
      return () => console.log("bye :("); //return에 넣으면 destroy시 실행
    }, [showing]);
    return <h1>Hello</h1>;
  }
  return (
    <div>
        <h1 className={styles.title}>Chama</h1>
        <Button text={"no Chama"} test={"123"} />
        <hr/>
        <input type="text" value={keyword} onChange={onChange} placeholder="Search here" /><br/>
        <h2>{counter}</h2>
        <button text={counter} onClick={onClick} >Counter</button>
        <hr/>
        <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
        {showing ? <Hello /> : null}
    </div>
  );
}

export default Test4;
