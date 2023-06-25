function ShowSquare({ bomb, handleClick, j, action }) {
  let content = bomb.map((square, index) => {
    return (
      <div
        key={index}
        onClick={() => handleClick(index, j, square)}
        className="square"
        style={{
          backgroundColor:
            square !== 10 && square !== 9 && square !== 12 && square !== 11
              ? "rgb(202, 202, 202)"
              : "",
          border:
            square === 12 || square === 11 ? "1px solid red" : "1px solid",
        }}
      >
        {square !== 9 &&
        square !== 10 &&
        square !== 0 &&
        square !== 12 &&
        square !== 11
          ? square
          : ""}
      </div>
    );
  });

  return <div>{content}</div>;
}

export default ShowSquare;
