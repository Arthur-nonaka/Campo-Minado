
function ShowSquare({ bomb, handleClick, j }) {
    const handleBombClick = () => {
        alert("morreu"); 
    };

    let content = bomb.map((square, index) => {
        if (square === 0) {
            return <div onClick={() => handleClick(index, j)} className="notBomb"></div>
        }
        else {
            return <div onClick={handleBombClick} className="bomb"></div>
        }
    });


    return <div>{content} </div >


}

export default ShowSquare;