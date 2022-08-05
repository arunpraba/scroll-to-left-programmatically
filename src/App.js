import { useRef } from "react";
import "./styles.css";

const list = Array(100).fill();

export default function App() {
  const containerRef = useRef(null);

  const moveLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -containerRef.current.clientWidth,
      behavior: "smooth"
    });
  };

  const moveRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: +containerRef.current.clientWidth,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <h1>Hello Scrollable List</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="nav">
        <button onClick={moveLeft}>{"<"}</button>
        <button onClick={moveRight}>{">"}</button>
      </div>
      <ul ref={containerRef}>
        {list.map((_, index) => (
          <li>Element {index + 1}</li>
        ))}
      </ul>
    </div>
  );
}
