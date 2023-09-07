import BlogsDingleData from '@/utili/BlogsDingleData';

export const generateMetadata = async ({ params }) => {
     const singleData = await BlogsDingleData(params?.id);
     return {
          title: ` Blog | ${singleData?.title} `
     }
}
const SegmentPage = async ({ params }) => {
     const id = params?.id;
     const singleData = await BlogsDingleData(id);
     return (
          <div className=' flex justify-center items-center  gap-2'>
               <div>
                    <h1 className=' text-blue-500  text-center my-2'> {singleData.title} </h1>
                    <p className=' py-2 px-3'> {singleData.body} </p>
               </div>
          </div>
     );
};

export default SegmentPage;