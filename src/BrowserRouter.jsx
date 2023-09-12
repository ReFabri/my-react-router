import PropTypes from "prop-types";
import { useState, createContext } from "react";

const ApplicationContext = createContext();
const applicationState = {};

const BrowserRouter = ({ children }) => {
  const [currURL, setCurrURL] = useState(new URL(window.location.href));
  return (
    <ApplicationContext.Provider
      value={[applicationState, currURL, setCurrURL]}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

BrowserRouter.propTypes = {
  children: PropTypes.node,
};

export default BrowserRouter;
