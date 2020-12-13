import React, { memo } from 'react';

const HomeHeaderBg: React.FC = memo(
  (): JSX.Element => {
    return (
      <div className="tu afterclear">
        <img src="img/index-banner.jpg" />
      </div>
    );
  },
);

HomeHeaderBg.displayName = 'home-header-bg';

export default HomeHeaderBg;
