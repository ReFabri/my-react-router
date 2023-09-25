import PropTypes from "prop-types";
import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter";

const Route = ({ children, path }) => {
  const { currentURL } = useContext(BrowserContext);

  if (currentURL.pathname === path) {
    return <>{children}</>;
  } else {
    return null;
  }
};

Route.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

export default Route;
