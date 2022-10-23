import './ImageSlider.scss';
import store from '../../store';

function ImageSlider({image}) {
    const hideSlider = () => {
        store.dispatch({type: "IMAGESLIDERSHOWN", payload: false});
    }
  return (
    <div onClick={hideSlider} className="image__slider">
      <div onClick={(e) => e.stopPropagation()} className="image__box">
        <img src = {image.src}/>
      </div>
    </div>
  );
}

export default ImageSlider;
