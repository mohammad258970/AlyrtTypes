import "./index.scss";
import { BellRing } from "lucide-react";
import { CircleX } from "lucide-react";
import { ReactNode } from "react";

interface Iprobs {
  type: string;
  icon:ReactNode;
  title: string;
  description: string;
}
const Alert = ({type,icon,title,description}:Iprobs) => {
  return (
    <div className={type}>
      <div className="alertheader">
        <div className="title">
    {icon}
          <h4> {title} </h4>
        </div>

        <span>
          <CircleX />
        </span>
      </div>
      <p>
        {description}
      </p>
      <span></span>
    </div>
  );
};
export default Alert;
