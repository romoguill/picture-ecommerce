import React, { useEffect, useState } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
  const API_URL =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(photoId) {
    setAllPhotos((prevAllPhotos) => {
      return prevAllPhotos.map((photo) =>
        photo.id === photoId
          ? { ...photo, isFavorite: !photo.isFavorite }
          : { ...photo }
      );
    });
  }

  function addToCart(img) {
    setCartItems((prevCartItems) => {
      return [...prevCartItems, img];
    });
  }

  function removeFromCart(img) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== img.id)
    );
  }

  function isItemInCart(img) {
    return cartItems.some((item) => item.id === img.id);
  }

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        setCartItems,
        addToCart,
        isItemInCart,
        removeFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
