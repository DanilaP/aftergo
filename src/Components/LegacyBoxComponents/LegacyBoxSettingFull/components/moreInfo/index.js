import "./index.scss";

export const MoreInfoSettingsFULL = ({ moreInfo }) => {
  return (
    <div className="moreInfoSettings__legacyRoom">
      {moreInfo?.type}
      <span className="moreInfoSettings__legacyRoom-price">{moreInfo?.price}$</span>+
      recurring fee <span className="qa">(Q/A/20y)</span>
    </div>
  );
};
