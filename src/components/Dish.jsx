export default function Dish(props) {



  return (
    <>
      <h2></h2>
      <p>{props.tittel}</p>
      <p>{props.pris}</p>
      <p>{props.ingredienser}</p>
      <p>{props.kategori}</p>
    </>
  );
}