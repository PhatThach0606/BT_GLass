import { useState } from "react";
export default function ChangeColor() {
  const [color, setcolor] = useState("./image/steel-car.jpg");
  const setcolorUrl = (url) => {
    setcolor(url);
  };
  let renderUI = () => {
    <div style={{ display: "flex" }}>
      <div>
        <img src={color} alt="" width={500} />
      </div>
      <div>
        <button
          onClick={() => setcolorUrl("./image/red-car.jpg")}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setcolorUrl("./image/silver-car.jpg")}
          style={{ backgroundColor: "silver" }}
        >
          Silver
        </button>
        <button
          onClick={() => setcolorUrl("./image/black-car.jpg")}
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
      </div>
    </div>;
  };
  return (
    <div>
      <h1>Chan color Car</h1>

      {renderUI()}
    </div>
  );
}
