import Alert from "./component/Alert";
import { BellRing } from "lucide-react";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Alert
          type="alert-danger"
          icon={<BellRing />}
          title="hello world"
          description="this is danger alert"
        />
        <Alert
          type="alert-success"
          icon={<BellRing />}
          title="hello world"
          description="this is success alert"
        />
        <Alert
          type="alert-warning"
          icon={<BellRing />}
          title="hello world"
          description="this is warning alert"
        />
        <Alert
          type="alert-default"
          icon={<BellRing />}
          title="hello world"
          description="this is default alert"
        />
        <Alert
          type="alert-info"
          icon={<BellRing />}
          title="hello world"
          description="this is info alert"
        />
      </div>
    </>
  );
}

export default App;
