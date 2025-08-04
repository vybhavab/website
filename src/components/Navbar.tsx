/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface LinkElement {
  name: string,
  link: string
}

const links: LinkElement[] = [

  {
    name: 'resume',
    link: '/resume.pdf',
  }, {
    name: 'blog',
    link: 'https://blog.vybhavb.com',
  }];

const getNavbarElements = (pathname: string) => links.map((link) => (
  <li className={classNames('inline-block hover:background active:background', { 'bg-info rounded-lg': pathname === link.link })} key={link.name}>
    <Link href={link.link}>
      <a className={classNames('text-base text-gray-400 active:bg-base-100', { 'text-info-content': pathname === link.link })} href={link.link}>{link.name}</a>
    </Link>
  </li>
));

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden swap swap-rotate">
            <svg xmlns="http://www.w3.org/2000/svg" className="swap-off fill-current w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 4 6h16M4 12h16M 4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="swap-on fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 4 6h16M4 12h16M 4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {getNavbarElements(pathname)}
          </ul>
        </div>
        <Link href="/"><button type="button" className="btn btn-ghost normal-case text-2xl">vb</button></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {getNavbarElements(pathname)}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
