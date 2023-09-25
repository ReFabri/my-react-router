import PropTypes from "prop-types";
import { useState, createContext } from "react";

const ApplicationContext = createContext();
const routerState = {};

const BrowserRouter = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(new URL(window.location.href));
  return (
    <ApplicationContext.Provider
      value={[routerState, currentUrl, setCurrentUrl]}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

BrowserRouter.propTypes = {
  children: PropTypes.node,
};

export default BrowserRouter;
