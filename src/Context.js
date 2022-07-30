import React, { useEffect, useState } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
  const API_URL =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  return (
    <Context.Provider value={{ allPhotos }}>{props.children}</Context.Provider>
  );
}

export { Context, ContextProvider };
