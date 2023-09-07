'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
const ImageSliderPage = ({ params }) => {
     let id = params.img;
     const [data, setData] = useState([])
     const [SingleData, setSingleData] = useState('');
     const [NextImage, setNextImage] = useState(0);

     let myArray = [];
     data?.map(db => myArray.push(db?.id));

  

     myArray.forEach((item, index) => {
          if (index == NextImage) {
               id = item
          }
     });

     const handlePrev = () => {
          if (NextImage == 0) {
               setNextImage(myArray?.length)
          } else {
               setNextImage(NextImage - 1)
          }
     }




     const handleNext = () => {
          if (NextImage == myArray?.length) {
               setNextImage(0)
          } else {
               setNextImage(NextImage + 1)
          }
     }


     console.log(NextImage);


     useEffect(() => {
          // Your data fetching logic goes here
          fetchData()
               .then((response) => {
                    setData(response);
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
               });
          fetchSingleData(id)
               .then((response) => {
                    setSingleData(response);
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
               });
     }, [id]);

     const fetchData = async () => {
          try {
               const response = await fetch('http://localhost:5000/image');
               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               const data = await response.json();
               return data;
          } catch (error) {
               throw new Error('Error fetching data');
          }
     };
     const fetchSingleData = async (id) => {
          try {
               const response = await fetch(`http://localhost:5000/image/${id}`);
               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               const data = await response.json();
               return data;
          } catch (error) {
               throw new Error('Error fetching data');
          }
     };


     return (
          <div>
               <div className=' bg-white fixed top-0 left-0 w-full h-screen px-10 '>
                    <div className='  flex  gap-5  items-center mx-auto text-center mt-10 '>
                         <div onClick={handlePrev} className=' cursor-pointer'>
                              <FiChevronsLeft size={40}></FiChevronsLeft>
                         </div>
                         <div className=' mx-auto max-h-[80vh] overflow-hidden w-full '>
                              <Image className=' text-center  inline-block ' width={1000} height={600} src={SingleData?.img} alt=''></Image>
                         </div>
                         <div onClick={handleNext} className=' cursor-pointer'>
                              <FiChevronsRight size={40}></FiChevronsRight>
                         </div>
                    </div>
                    <div className=' mt-16'>
                         <div className=' flex  overflow-hidden justify-center gap-8'>
                              {
                                   data?.map(item => <Link href={`/image/${item?.id}`} className=' w-[150px] cursor-pointer border-1 border-blue-400' key={item?.id}>
                                        <Image className=' rounded-lg ' width={150} height={150} src={item?.img} alt="img.freepik.com"></Image>
                                   </Link >)
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ImageSliderPage;