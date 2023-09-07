
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImagePage = async () => {
     const res = await fetch('http://localhost:5000/image');
     const data =await res.json();



     return (
          <div className=' container mx-auto mt-8'>

               <div className=' grid md:grid-cols-2 gap-4'>
                    {
                         data?.map(item => <Link href={`/image/${item?.id}`}  key={item?.id}>
                              <Image  width={500} height={500} src={item?.img} alt=''></Image>
                         </Link>)
                    }
               </div>

               

          </div>
     );
};

export default ImagePage; 