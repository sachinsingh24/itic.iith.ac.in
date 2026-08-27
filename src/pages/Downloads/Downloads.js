import _asset0 from '../../assets/media.jpg';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import DownloadGrid from '../../components/DownloadGrid';
import { downloads } from '../../data/downloads';
import './Downloads.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Downloads = () => {
  return (
    <>
      <PageTitle
        title="Media"
        subtitle="Downloads"
        bg={_asset0}
        extraStyle={{ backgroundPosition: 'bottom' }}
      />

      <section className="blog-area pt-4">
        <div className="container">
          <DownloadGrid items={downloads} />
        </div>
      </section>

      <ShapeDecoration />

    </>
  );
};

export default Downloads;

