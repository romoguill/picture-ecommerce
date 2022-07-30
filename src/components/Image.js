import { useContext, useState } from 'react';
import { Context } from '../Context';

function Image({ img, className }) {
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
            onClick={() => toggleFavorite(img.id)}
          ></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
      {img.isFavorite && (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
