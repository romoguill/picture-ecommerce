import { useContext, useState } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

function Image({ img, className }) {
  const [isHovered, elementRef] = useHover();

  const { toggleFavorite, addToCart, isItemInCart, removeFromCart } =
    useContext(Context);

  return (
    <div className={`${className} image-container`} ref={elementRef}>
      {isHovered && (
        <>
          <i
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(img.id)}
          ></i>
          {!isItemInCart(img) && (
            <i
              className="ri-add-circle-line cart"
              onClick={() => addToCart(img)}
            ></i>
          )}
        </>
      )}
      {img.isFavorite && (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )}
      {isItemInCart(img) && (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img)}
        ></i>
      )}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
