import PropTypes from "prop-types";
import { useState, createContext } from "react";

const BrowserContext = createContext();
const routerState = {};

const BrowserRouter = ({ children }) => {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));
  return (
    <BrowserContext.Provider value={[routerState, currentURL, setCurrentURL]}>
      {children}
    </BrowserContext.Provider>
  );
};

BrowserRouter.propTypes = {
  children: PropTypes.node,
};

export default BrowserRouter;
export { BrowserContext };
