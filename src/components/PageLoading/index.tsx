import React, { FC } from 'react';

const PageLoading: FC<{}> = () => {
  return (
    <div className="loading">
      <div className="loader">
        <div className="loader-inner pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
