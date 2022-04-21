import React from "react";
import { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [value, setValue] = useState(0)
  console.log(value);

  const inputRef = useRef(null);
  const divRef = useRef(null);

  const valueObj = {current:0}
  const valueRef= useRef(0);
  console.log("valueRef", valueRef);
  // console.log(inputRef.current);
  useEffect(() => {
    // document.querySelector("input").focus();
    // console.log(document.querySelector("input"));
    // inputRef.current.focus();
    // inputRef.current.parentNode.style.backgroundColor="red";
  }, [])

  const changeBgColor = ()=>{
    // divRef.current.style.backgroundColor = "orange";
    // const colors = ["#00ff00", "pink", "yellow", "purple", "green", "rgb(150,150,150)"];
    // const random = Math.trunc(Math.random() * (colors.length));
    // divRef.current.style.backgroundColor = colors[random];
    // console.log(inputRef.current);
    // divRef.current.style.backgroundColor = inputRef.current.value;
  };

  const increase = ()=>{
    setValue(value+1);
    valueRef.current += 1;
  }
  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} placeholder="Enter text..." />
      <button onClick={changeBgColor}>ChangeBgColor</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default UseRefComponent;
