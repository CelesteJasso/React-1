const bulbasaur = true;

const JSX = (
  <>
    <img src="pikachu.jpg"></img>
  </>
);

const onSelect = (bulbasaur) => {
  if (bulbasaur === true) {
    return JSX;
  } else {
    return <h1> NO CARGO</h1>;
  }
};
