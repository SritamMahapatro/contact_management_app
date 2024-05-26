import { Link } from "react-router-dom";
import { useAppSelector } from "app/hook";
import { selectContact } from "app/contacts/contactSlice";

const buttonStyle =
  "bg-black hover:bg-white hover:text-black w-full p-2 text-white outline";

const CreateContact = () => {
  const contacts = useAppSelector(selectContact);
  return (
    <div className="flex flex-col items-center p-4 text-center gap-4">
      <Link to="/contact-save">
        <button className={buttonStyle}>Create New Contact</button>
      </Link>
      {contacts.length === 0 && (
        <div><p>No Contact found</p>
        <br />
        <p>Please add contact from create contact button</p></div>
      )}
    </div>
  );
};

export default CreateContact;
