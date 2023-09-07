
import SingleProduct from '@/Componet/SingleProduct/SingleProduct';
import GetProductData from '@/utili/GetProductdata';

import { Toaster } from 'react-hot-toast';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const ProductPage = async () => {
     const product = await GetProductData();
  
     return (
          <div className=' container mx-auto'>
               <div className=' grid md:grid-cols-4 gap-4'>
                    {
                         product?.map(item => <SingleProduct key={item?.id} product={item} />)
                    }
               </div>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default ProductPage;