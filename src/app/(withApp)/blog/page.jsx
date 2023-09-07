
import BlogsData from '@/utili/BlogsData';
import Link from 'next/link';
import React from 'react';

const BlogPage = async () => {
     const blogs= await BlogsData();
      return (
            <div>
                  <h1>BlogPage</h1>


                  <div className=' mx-20 my-5 '>
                        {
                              blogs?.map(item => <div className=' px-2 my-4 block py-2 rounded border border-blue-400 text-2xl'   key={item?.id} >
                                     <h1> {item?.id}. {item?.title} </h1>
                                     <p> {item?.body}</p>
                                    < Link className=' my-5' href={{ pathname: `/blog/${item?.id}` }} >
                                           <button className=' bg-blue-600 text-white px-2  py-1 rounded-md'>Details</button>
                                    </Link>
                              </div>

                              )
                        }

                  </div>
            </div >
      );
};

export default BlogPage;