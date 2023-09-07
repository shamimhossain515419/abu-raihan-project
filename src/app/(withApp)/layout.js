import Navbar from '@/Componet/Navbar/Navbar';
import Link from 'next/link';
import React from 'react';

const WithLayout = ({children}) => {
     return (
          <div>
                <div className=' flex justify-center items-center
                 gap-3 text-3xl'>
                    <Navbar></Navbar>
                </div>

                <div  className=' mt-10'>
                    { children }
                </div>

                <div  className=' text-2xl mt-10 text-center'>
                    <h1> Footer component</h1>
                </div>
          </div>
     );
};

export default WithLayout;