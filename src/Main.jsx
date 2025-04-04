import { useState, useEffect } from "react";
import Card from "./Card";
import Tip from "./Tip";
export default function Main() {
  const [list, setList] = useState([]);
  const [pool, setPool] = useState([]);

  function spin() {
    if (pool.length < 10) {
      const draft = [];
      for (let i = 0; i < 10; i++) {
        draft.push(Math.floor(Math.random() * 6) + 1);
      }
      setList(draft);
    } else if(pool.length == 10) {
      setPool([]);
    }
  }

  useEffect(spin, []);

  return (
    <div className="main">
      <Tip/>
      <div className="cardcase">
        {list.map((element, index) => {
          return (
            <Card
              value={element}
              key={index}
              id={index}
              pool={pool}
              setPool={setPool}
            />
          );
        })}
      </div>
      <button onClick={spin}>{pool.length > 9 ? "Restart" : "Spin"}</button>
    </div>
  );
}
