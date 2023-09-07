
const GetSingleData = async (id) => {
     const res = await fetch(`http://localhost:5000/product/${id}`);
     return res.json();

};

export default GetSingleData;