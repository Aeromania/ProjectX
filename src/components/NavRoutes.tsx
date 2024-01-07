import React from 'react';
import { TNavRouteProps } from './types';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

export const NavRoutes: React.FC<TNavRouteProps> = ({
  routeName,
  isActive,
  onClick
}): React.JSX.Element => {
  const renderRouteName = String(routeName);
  const checkIsActive = () => {
    return isActive ? 'scale-x-1' : 'scale-x-0';
  };
  return (
    <Link
      className={`group relative cursor-pointer py-1 text-white transition duration-1000 ease-in-out md:inline-block md:py-0 md:text-black`}
      to={routeName}
      onClick={onClick}
    >
      {renderRouteName}
      <span
        className={twMerge(
          'absolute inset-x-0 -bottom-1 hidden h-0.5 scale-x-0 bg-sky-600 font-sans text-lg font-normal transition-all duration-300 group-hover:origin-center group-hover:scale-x-100 group-hover:transform md:block',
          checkIsActive()
        )}
      />
    </Link>
  );
};
