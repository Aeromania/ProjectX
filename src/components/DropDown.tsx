import React, { Fragment, SetStateAction, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import useWindowDimensions from './hooks';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type TDropDownProps = {
  routeName: string[];
  setActiveLink: React.Dispatch<SetStateAction<string | null>>;
  title: string;
  className?: string;
};

export const DropDown: React.FC<TDropDownProps> = ({
  routeName,
  setActiveLink,
  title
}) => {
  const chevronIconDirection = {
    ChevronDownIcon,
    ChevronUpIcon,
    ChevronRightIcon
  } as const;

  type typeOfChevronIconDirection =
    (typeof chevronIconDirection)[keyof typeof chevronIconDirection];
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const Icon: typeOfChevronIconDirection = getChevronIconDirection();

  function getChevronIconDirection(): typeOfChevronIconDirection {
    if (!isDropDownVisible) {
      return chevronIconDirection.ChevronDownIcon;
    } else if (width > 768) {
      return chevronIconDirection.ChevronUpIcon;
    } else {
      return chevronIconDirection.ChevronRightIcon;
    }
  }

  const checkIsActive = () => {
    return isDropDownVisible ? 'scale-x-1' : 'scale-x-0';
  };

  return (
    <Menu
      as="div"
      className={`relative text-left transition-all duration-300 ease-in-out md:inline-block`}
    >
      <div className="flex items-center justify-center transition-all duration-300 ease-in-out">
        <Menu.Button className="group relative inline-flex w-full items-center justify-center py-1 font-sans text-base font-normal text-white md:py-0 md:text-black">
          {title}
          <span
            className={twMerge(
              'inset-x-0 -bottom-1 hidden h-0.5 scale-x-0 bg-sky-600 font-sans text-lg font-normal transition-all duration-300 group-hover:origin-center group-hover:scale-x-100 group-hover:transform md:absolute md:inline',
              checkIsActive()
            )}
          />
        </Menu.Button>
        <Icon
          className="ml-1 h-5 w-5 text-white md:text-black"
          aria-hidden="true"
        />
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-24 top-0 z-10 w-40 origin-top-right rounded-md bg-neutral-500 text-black focus:outline-none md:-left-4 md:mt-12 md:bg-white md:shadow-sm md:shadow-sky-600"
          onBlur={() => setIsDropDownVisible(false)}
          onFocus={() => {
            setIsDropDownVisible(true);
          }}
        >
          <div className="py-1">
            {routeName.map((routeName) => {
              return (
                <Menu.Item key={routeName}>
                  {({ active }) => (
                    <Link
                      to={routeName}
                      onClick={() => setActiveLink(routeName)}
                      className={classNames(
                        active
                          ? 'bg-sky-600 text-white'
                          : 'text-white md:text-black',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {routeName}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
