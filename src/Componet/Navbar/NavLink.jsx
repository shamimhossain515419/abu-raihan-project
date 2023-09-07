'use client'
import Link from 'next/link';
import React from 'react';

const NavLink = ({href,className,children,...props}) => {

  return (
          <Link className=' mx-3 text-[#2a5281]' href={href}>
                {children}
          </Link>
     );
};

export default NavLink;