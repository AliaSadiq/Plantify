import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <Bars3Icon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md font-josefin-sans bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link to='/personal-growth'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Personal Growth
                    </a>
                )}
                </Menu.Item>
            </Link>
            <Link to='/shop'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Shop
                    </a>
                )}
                </Menu.Item>
            </Link>
            <Link to='/campaign'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Campaigns
                    </a>
                )}
                </Menu.Item>
            </Link>
            <Link to='/plantify-network'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Plantify Network
                    </a>
                )}
                </Menu.Item>
            </Link>
            <Link to='/about-us'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    About Us
                    </a>
                )}
                </Menu.Item>
            </Link>
            <Link to='/contact-us'>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Contact Us
                    </a>
                )}
                </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
