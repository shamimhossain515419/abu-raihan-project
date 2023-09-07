import "server-only";
const GetProductData = async () => {
     const res = await fetch('http://localhost:5000/product',{
           cache:'no-cache'
     });
     return res.json();

};

export default GetProductData;