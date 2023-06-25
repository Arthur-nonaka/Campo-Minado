import { useState, useEffect } from "react";

import ShowSquare from "./components/ShowSquare";

function App() {
  const [bombs, setBombs] = useState([]);
  const [reset, setReset] = useState(true);
  const [action, setAction] = useState("bomba");

  useEffect(() => {
    let updatedBombs = [];
    for (let j = 0; j < 10; j++) {
      updatedBombs[j] = [];
      for (let x = 0; x < 10; x++) {
        if (Math.random() * 10 > 8) {
          updatedBombs[j][x] = 10;
        } else updatedBombs[j][x] = 9;
      }
    }
    setBombs(updatedBombs);
  }, [reset]);
  console.log(bombs);

  const handleClick = async (x, j, square) => {
    let amount = 0;
    if (action === "bomba") {
      if (square === 10) {
        alert("Morreu");
        amount = -1;
        setReset(!reset);
      } else {
        if (
          (x !== 0 && j !== 0 && bombs[j - 1][x - 1] === 10) ||
          (x !== 0 && j !== 0 && bombs[j - 1][x - 1] === 12)
        ) {
          amount++;
        }
        if (
          (x !== 0 && bombs[j][x - 1] === 10) ||
          (x !== 0 && bombs[j][x - 1] === 12)
        ) {
          amount++;
        }
        if (
          (x !== 0 && j !== 9 && bombs[j + 1][x - 1] === 10) ||
          (x !== 0 && j !== 9 && bombs[j + 1][x - 1] === 12)
        ) {
          amount++;
        }
        if (
          (j !== 0 && bombs[j - 1][x] === 10) ||
          (j !== 0 && bombs[j - 1][x] === 12)
        ) {
          amount++;
        }
        if (
          (j !== 9 && bombs[j + 1][x] === 10) ||
          (j !== 9 && bombs[j + 1][x] === 12)
        ) {
          amount++;
        }
        if (
          (j !== 9 && bombs[j + 1][x + 1] === 10) ||
          (j !== 9 && bombs[j + 1][x + 1] === 12)
        ) {
          amount++;
        }
        if (bombs[j][x + 1] === 10 || bombs[j][x + 1] === 12) {
          amount++;
        }
        if (
          (j !== 0 && bombs[j - 1][x + 1] === 10) ||
          (j !== 0 && bombs[j - 1][x + 1] === 12)
        ) {
          amount++;
        }
      }
      if (amount === 0) {
        
      }
      let updatedBombs = [...bombs];
      updatedBombs[j][x] = amount;
      setBombs(updatedBombs);
    } else {
      let updatedBombs = [...bombs];
      if (updatedBombs[j][x] === 12 || updatedBombs[j][x] === 11) {
        if (updatedBombs[j][x] === 12) {
          updatedBombs[j][x] = 10;
        }
        if (updatedBombs[j][x] === 11) {
          updatedBombs[j][x] = 9;
        }
      } else {
        if (updatedBombs[j][x] === 10) {
          updatedBombs[j][x] = 12;
        } else {
          updatedBombs[j][x] = 11;
        }
      }

      setBombs(updatedBombs);
    }
  };

  let content = bombs.map((bomb, index) => {
    return (
      <ShowSquare bomb={bomb} key={index} j={index} handleClick={handleClick} />
    );
  });

  return (
    <div className="main">
      <button
        onClick={() => setAction("bomba")}
        disabled={action === "bomba" ? true : false}
      >
        Bomba
      </button>
      <button
        onClick={() => setAction("bandeira")}
        disabled={action === "bandeira" ? true : false}
      >
        Bandeira
      </button>
      {content}
    </div>
  );
}

export default App;
