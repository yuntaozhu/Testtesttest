
import React from 'https://esm.sh/react@18.2.0';
import { FengtaiLogo, AirplaneLogo } from '../constants.js';

const Header = () => {
  return React.createElement(
    'header',
    { className: 'flex items-center justify-center gap-8 sm:gap-12 mb-6 sm:mb-8' },
    React.createElement(
      'div',
      { className: 'flex flex-col items-center gap-2' },
      React.createElement(FengtaiLogo, { className: 'h-12 w-12 sm:h-16 sm:w-16' }),
      React.createElement('span', { className: 'text-sm sm:text-base font-bold' }, '丰台教育')
    ),
    React.createElement(
      'div',
      { className: 'flex items-center justify-center' },
      React.createElement(AirplaneLogo, { className: 'h-16 w-16 sm:h-20 sm:w-20' })
    )
  );
};

export default Header;
