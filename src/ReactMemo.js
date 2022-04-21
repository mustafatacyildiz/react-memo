import React, {useState} from 'react'
import Header from "./components/Header";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";

const ReactMemo = () => {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(null)
  const increase = ()=>{
    setCount(count+1);
  };
  console.log(count)
  return (
    <div>
      <Header img={image}/>
      <p>Count:{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={()=>setImage(fs)}>FS</button>
      <button onClick={()=>setImage(aws)}>AWS</button>
    </div>
  )
}

export default ReactMemo