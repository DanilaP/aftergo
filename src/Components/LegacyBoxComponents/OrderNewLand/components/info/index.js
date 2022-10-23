import { Suggestion } from "../suggestion/Suggestion";
import "./index.scss";

export const Info = ({ info }) => {
  return (
    <div className="info__legacyRoom">
      {info?.data?.map((el) => {
        let CLASS__NAME = "";
        if (!el.highlight) CLASS__NAME = "default";
        if (el.highlight && el.available) CLASS__NAME = "active";
        if (el.highlight && !el.available) CLASS__NAME = "inactive";
        return (
          <div
            className={`info__legacyRoom-item info__legacyRoom-item-${CLASS__NAME}`}
            key={el.key}
          >
            <Suggestion
              text={
                "An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos."
              }
              classname="info__legacyRoom-item__suggestion"
            />
            <div className="info__legacyRoom-item__title">{el.key}</div>

            {
              /*
                        typeof info[el].value === 'boolean' 
                        ?
                        <div className='info__legacyRoom-item__value'>{info[el].value ? 'AVAILABLE': 'NOT AVAILABLE'}</div>
                        :*/
              <div className="info__legacyRoom-item__value">{el.value}</div>
            }
          </div>
        );
      })}
    </div>
  );
};
