import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

export const GoBackButton = ({ classname }) => {
  const lastRouteMenu = useSelector((store) => store.lastRouteMenu);
  const history = useNavigate();
  const location = useLocation();
  const goBack = () => {
    if (location.pathname === "/OrderNewLand") {
      return history("/Map");
    }
    if (lastRouteMenu.length !== 3) {
      history(lastRouteMenu);
    }
  };
  return (
    <div className={"goBackButton " + classname} onClick={goBack}>
      <div className="goBackButton__content"></div>
    </div>
  );
};
