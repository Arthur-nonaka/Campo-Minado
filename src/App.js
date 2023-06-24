import ShowSquare from "./components/ShowSquare";

function App() {

    let bombs = [];
    for (let j = 0; j < 10; j++) {
        bombs[j] = [];
        for (let x = 0; x < 10; x++) {
            if (Math.random() * 10 > 8) {
                bombs[j][x] = 1;
            }
            else bombs[j][x] = 0;
        }
    }

    const handleClick = (x, j) => {
        let amount = 0;
        if(bombs[x-1][j] === 1) {
            amount++;
        }
        if(bombs[x-1][j-1] === 1) {
            amount++;
        }
        if(bombs[x][j-1] === 1) {
            amount++;
        }
        if(bombs[x+1][j-1] === 1) {
            amount++;
        }
        if(bombs[x+1][j] === 1) {
            amount++;
        }
        if(bombs[x+1][j+1] === 1) {
            amount++;
        }
        if(bombs[x][j+1] === 1) {
            amount++;
        }
        if(bombs[x-1][j+1] === 1) {
            amount++;
        }

        console.log(amount);
    };

    let content = bombs.map((bomb, index) => {

        return <ShowSquare bomb={bomb} key={index} j={index} handleClick={handleClick}/>
    });

    return (<div className="main">
        {content}
    </div>);
}

export default App;