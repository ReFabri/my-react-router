import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

const Route = ({ children, path }) => {
  const { currentURL } = useContext(BrowserContext);

  return (
    <>
      <h1>Route</h1>
      {children}
    </>
  );
};

export default Route;
