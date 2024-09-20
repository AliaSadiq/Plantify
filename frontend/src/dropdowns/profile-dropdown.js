import { Avatar } from "@material-tailwind/react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileDropdown({avatar}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-cover bg-no-repeat p-6 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" style={{ backgroundImage: `url(/assets/profile.jpeg)` }}>
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />}
        </Menu.Button> */}
        <Menu.Button>
          <Avatar src={`/assets/avatars/${avatar}`} alt="avatar" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right font-josefin-sans rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link to='/settings'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-white' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
            </Link>
            <Link to='/logout'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-white' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Signout
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
