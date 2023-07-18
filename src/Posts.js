import { VscGlobe } from "react-icons/vsc";

export function Posts() {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((Response) => Response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <VscGlobe />
      Traer Datos
    </button>
  );
}
