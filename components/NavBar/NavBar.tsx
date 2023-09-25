import React from 'react';

import data from '@/data/navData.json';

export const NavBar = () => {
  return (
    <ul className="flex items-center gap-6">
      {data.items.map(item => {
        return (
          <li
            key={item.name}
            className="font-medium text-primary-200 hover:text-primary-100 focus:text-primary-100"
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};
