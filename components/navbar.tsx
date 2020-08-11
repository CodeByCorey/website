import Link from 'next/link';

interface Props {
  home?: boolean
}

export default function Navbar({ home }: Props) {
  return (
    <nav className="text-gray-200 bg-gray-800">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        {!home && (
          <div className="hidden pl-4 lg:flex items-center">
            <Link href="/">
              <a className="no-underline hover:no-underline font-thin text-2xl lg:text-xl">
                <img className="h-12 w-12 inline rounded-full" src="/svg/profile.svg" alt="" />
                <span className="pl-4">coreyodonnell.dev</span>
              </a>
            </Link>
          </div>
        )}

        {/* <div className="block lg:hidden pr-4"> */}
        <div className="hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:p-4 lg:p-0">
          <ul className="list-reset flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block text-gray-300 no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
                Blog
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-300 no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
                Uses
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <hr className="border-b border-gray-800 opacity-25 my-0 py-0" /> */}
    </nav>
  );
}