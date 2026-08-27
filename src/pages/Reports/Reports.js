import _asset0 from '../../assets/media.jpg';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import DownloadGrid from '../../components/DownloadGrid';
import { reports } from '../../data/reports';
import './Reports.css';

import ShapeDecoration from '../../components/ShapeDecoration';
const Reports = () => {
  return (
    <>
      <PageTitle
        title="Media"
        subtitle="Reports"
        bg={_asset0}
        extraStyle={{ backgroundPosition: 'bottom' }}
      />

      <section className="blog-area pt-4">
        <div className="container">
          <DownloadGrid items={reports} />
        </div>
      </section>

      <ShapeDecoration />

    </>
  );
};

export default Reports;

