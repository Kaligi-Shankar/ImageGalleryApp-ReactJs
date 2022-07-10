import React from 'react';

const Gallery = ({data}) => {
  return (
    <div>
    {data.map((image) =>
            <div key = {image.id}>
           <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
           height="200" width="250" alt={image.title}/>
        </div>
    )}

    </div> 
  )
}

export default Gallery