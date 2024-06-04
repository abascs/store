import Start from "./start";
import Link from "next/link";
function card(props) {
  return (
    <div className="mx-auto w-36 md:w-52 my-4 border">
      <Link href={`/shoping/${props.data.id}`}>
      <div
        style={{ backgroundImage: `url(${props.data.image})` }}
        className=" bg-center bg-no-repeat bg-contain aspect-square w-full "
      ></div>
      </Link>
      <div className="w-full flex justify-between items-center pt-4">
        <div className="leading-6 md:leading-10 overflow-hidden">
          <h1  className=" text-nowrap truncate	">{props.data.title}</h1>
          <p>{props.data.price}</p>
        </div>
        <Start />
      </div>
    </div>
    
  );
}

export default card;
