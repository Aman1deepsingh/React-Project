import message from "./Modules/DefaultModule";
import { name, age } from "./Modules/NamedModule";

export default function Module() {
  return (
    <>
          <p>Name:{name} Age:{age}</p>
          <p>{message()}</p>
    </>
  )
}
