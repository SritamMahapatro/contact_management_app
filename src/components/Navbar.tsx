import { Link } from "react-router-dom";

const buttonStyle = "bg-blue text-black px-9 py-9 rounded-md font-bold";
const linkStyle = "w-fit";

const Navbar = () => {
  return (
    <nav className="bg-blue p-4 flex basis-1/5 gap-2 flex-row md:flex-col">
   
      <div className="flex-1 flex justify-center items-center text-2xl">
        <Link to="/contacts" className={linkStyle}>
          <button className={buttonStyle}>Contacts</button>
        </Link>
      </div>
      
      
      <div className="flex-1 flex justify-center items-center text-2xl">
        <Link to="/chartandmaps" className={linkStyle}>
          <button className={buttonStyle}>Charts & Maps</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
