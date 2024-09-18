import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={image.download_url} alt={image.author} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{image.author}</h5>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;