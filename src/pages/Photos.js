import React, { useContext } from 'react';

import { getClass } from '../utils';
import Image from '../components/Image';
import { Context } from '../Context';

function Photos() {
  const { allPhotos } = useContext(Context);

  const imagesElements = allPhotos.map((photo) => {
    return <Image key={photo.id} img={photo} className={getClass(photo.id)} />;
  });

  return <main className="photos">{imagesElements}</main>;
}

export default Photos;
