import { useContext, useState } from 'react';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  const [isHovered, elementRef] = useHover();

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${isHovered ? 'fill' : 'line'}`}
        onClick={() => removeFromCart(item)}
        ref={elementRef}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
