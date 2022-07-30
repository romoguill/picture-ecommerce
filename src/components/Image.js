import { useContext, useState } from 'react';
import { Context } from '../Context';

function Image({ img, className, imgId }) {
  const [isHovered, setIsHovered] = useState(false);

  const { toggleFavorite } = useContext(Context);

  function handleOnMouseEnter() {
    setIsHovered(true);
  }

  function handleOnMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isHovered && (
        <>
          <i
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(imgId)}
          ></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
      <img src={img} className="image-grid" />
    </div>
  );
}

export default Image;
