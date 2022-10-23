import { useEffect } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import "./index.scss";
export const ChangeScene = ({ scenes, onChooseScene }) => {
  useEffect(() => {
    onChooseScene(scenes[0]);
  }, [scenes]);
  const currentScene = useSelector((state) => {
    return state.selectedRoom;
  });

  return (
    <div className="changeScenes">
      {[...scenes].map((el, index) => (
        <div
          key={el.id}
          className={cn("changeScenes__eachScene", {
            activeScene: el.id === currentScene?.id,
          })}
          onClick={() => {
            onChooseScene(scenes[index]);
          }}
        >
          <img
            src={scenes[index]?.image}
            width="100%"
            height="100%"
            alt="scene"
          />
        </div>
      ))}
    </div>
  );
};
