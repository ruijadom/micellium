import '../../tailwind.css';

import React from 'react';

import { ITopbar } from './types';

const Topbar = ({ children }: ITopbar) => {
  return (
    <>
      <div className="flex items-center h-10 bg-gray-900 text-white px-4">
        {children}
      </div>
    </>
  );
};

export default Topbar;
