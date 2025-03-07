import "./index.scss";
import { BellRing } from "lucide-react";
import { CircleX } from "lucide-react";

interface Iprobs {
  title: string;
}
const Alert = () => {
  return (
    <div className="alert-danger">
      <div className="alertheader">
        <div className="title">
          <BellRing />

          <h4> hello </h4>
        </div>

        <span>
          <CircleX />
        </span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
        necessitatibus quae ratione praesentium facere sunt facilis voluptate
        debitis earum dolore.
      </p>
      <span></span>
    </div>
  );
};
export default Alert;
