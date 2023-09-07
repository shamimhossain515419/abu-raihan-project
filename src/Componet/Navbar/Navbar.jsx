import NavLink from "./NavLink";


const Navbar = () => {
     const pathData = [
          {
               id: 1,
               path: '/',
               name: 'Home'
          },
          {
               id: 2,
               path: '/about',
               name: 'About'
          },
          {
               id: 3,
               path: '/blog',
               name: 'Blog'
          },
          {
               id: 4,
               path: '/contact',
               name: 'Contact'
          },
          {
               id: 4,
               path: '/product',
               name: 'Product'
          },
          {
               id: 4,
               path: '/image',
               name: 'Image'
          },
     ]

     return (
          <div>
             <div  className=" flex justify-center items-center  gap-6mx-3">
               {
                pathData.map(item=> <NavLink key={item.id} href={item?.path}> {item?.name} </NavLink>)
               }
             </div>
          </div>
     );
};

export default Navbar;