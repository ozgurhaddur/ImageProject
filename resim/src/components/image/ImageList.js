import React from 'react';
import './ImageList.css';
import Image from './Image';

const ImageList = ({images}) => {

    const preparedImagedList = images.map(image =>{
        return(
            <Image key={image.id} image={image} />
        )

    });
  return (
    <div className='image-list-container'>
      {preparedImagedList}
    </div>
  )
}

export default ImageList;
