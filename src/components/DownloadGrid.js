import React from 'react';
import './DownloadGrid.css';

const DownloadCard = ({ item }) => {
  const { title, image, link } = item;

  return (
    <div className="col-lg-3 col-md-6">
      <div className="single-blog-post">
        <div className="post-image">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '200px',
                height: '230px',
              }}
            />
          </a>
        </div>

        <div className="post-content d-flex justify-content-center">
          <h3 style={{ fontSize: '16px' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

const DownloadGrid = ({ items }) => {
  return (
    <div className="row d-flex justify-content-center pt-4">
      {items.map((item, i) => (
        <DownloadCard key={item.title} item={item} />
      ))}
    </div>
  );
};

export default DownloadGrid;
