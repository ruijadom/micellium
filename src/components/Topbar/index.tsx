import '../../css/tailwind.css';

import React from 'react';

export interface ITopbar {
  children?: React.ReactNode;
}

const Topbar = ({ children }: ITopbar) => {
  return (
    <>
      <div className="flex items-center h-10 px-4 text-white bg-red-900">
        {children}
      </div>
    </>
  );
};

export default Topbar;
