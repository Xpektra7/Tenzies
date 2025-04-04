import { useState } from "react";   
export default function Tip() {
    const [hidden,setHidden] = useState(false);
  return (
    <div  className="tip">
      <button onClick={() => setHidden(prev => !prev)} >Toggle Tip</button>
      <div className={hidden? "" : "hidden"} >
        <h1>Tip</h1>
        <p>1. Click on the cards to hold them.</p>
        <p>2. Click on the button to spin.</p>
        <p>3. Try to get the same number 10 times.</p>
      </div>
    </div>
  );
}
