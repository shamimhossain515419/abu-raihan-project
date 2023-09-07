'use client'
import Image from 'next/image'
import { useState } from 'react';
import { toast } from 'react-hot-toast';


const SingleProduct = ({ product }) => {
     const { name, id, img, price, seller } = product;

     const [showModal, setShowModal] = useState(false);
     const [UpdateId, setUpdateId] = useState("");
     const handleDelete = (id) => {
          // Send a DELETE request to delete the user by ID
          fetch(`http://localhost:5000/product/${id}`, {
               method: 'DELETE',
          })
               .then((response) => {
                    console.log("response");
                   
                    if (response.ok) {
                         toast.success('Successfully toasted!')
                       
                    }
               })
               .catch((error) => {
                    toast.error('Someting is worng')
               });
     };
     console.log(UpdateId);
     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(UpdateId);
          const from = e.target;
          const name = from.name.value;
          const price = from.price.value;
          const img = from.img.value;
          const Data = { name:name, price:price,img:img };
          console.log(Data);
       
          const res = await fetch(`http://localhost:5000/product/${UpdateId}`, {
               method: 'PATCH',
               headers: { 'container-type': 'application/json' },
               body: JSON.stringify(Data)
          });
          const result = await res.json();
          console.log(result);
          if (result) {
               console.log(result);
                setShowModal(false); 
               from.reset();
           alert(" successfully update")
          }
     }

     return (
          <div className=' p-1'>
               <div>
                    <Image width={500} height={500} src={img} alt=""></Image>
               </div>
               <div>
                    <h1> {name}</h1>
                    <p> Price: {price} </p>
               </div>
               <div className=' flex items-center gap-4 mt-7'>
                    <button onClick={() => { setUpdateId(id) , setShowModal(true) }} className=' text-white bg-blue-600 rounded-lg px-3 py-1 '>Update</button>
                    <button onClick={() => handleDelete(id)} className=' text-white bg-red-600 rounded-lg px-3 py-1 '>delete</button>
               </div>


               {
                    showModal ? <div>  <div
                         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                         <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <form onSubmit={handleSubmit} action="">
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   {/*header*/}
                                   <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                             Update Data ,
                                        </h3>
                                        
                                   </div>
                                   {/*body*/}
                                   <div className="relative p-6 flex-auto">
                                        <div>
                                           

                                                  <div className=" my-2">
                                                       <label htmlFor="name">Name</label>
                                                       <input type="text"  name="name" />
                                                  </div>
                                                  <div className=" my-2">
                                                       <label htmlFor="price">price</label>
                                                       <input type="number"  name="price" />
                                                  </div>
                                                  <div className=" my-2">
                                                       <label htmlFor="img">img</label>
                                                       <input type="text"  name="img" />
                                                  </div>
                                        
                                        </div>
                                   </div>
                                   {/*footer*/}
                                   <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                             type="button"
                                            
                                        >
                                             Close
                                        </button>
                                        <button
                                             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                             type="submit"

                                        >
                                             Save Changes
                                        </button>
                                   </div>
                              </div>
                              </form>
                         </div>
                    </div>
                         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div> : null
               }
          </div>
     );
};

export default SingleProduct;