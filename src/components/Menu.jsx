import Dish from "./dish";

export default function Menu(props) {
  console.log(props);
  return (
    <>
      <h1>Menu</h1>
      {props.meny.map((rett) => (
        <Dish key={rett.id}{...rett} />
      ))}
    </>
  );
}
