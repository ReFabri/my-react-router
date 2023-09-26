import PropTypes from "prop-types";
import { useState, createContext, useEffect } from "react";

const BrowserContext = createContext();
const routerState = {};

const BrowserRouter = ({ children }) => {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    function handlePopStateEvent(e) {
      console.log(e);
      setCurrentURL(new URL(window.location.href));
    }
    window.addEventListener("popstate", handlePopStateEvent);

    return () => window.removeEventListener("popstate", handlePopStateEvent);
  }, []);

  return (
    <BrowserContext.Provider value={{ routerState, currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
};

BrowserRouter.propTypes = {
  children: PropTypes.node,
};

export default BrowserRouter;
export { BrowserContext };
