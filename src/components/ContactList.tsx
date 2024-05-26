import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hook";
import {
  deleteContact,
  editContact,
  selectContact,
} from "app/contacts/contactSlice";

const buttonStyle = "hover:bg-gray-200 outline m-2 p-1 font-timeroman";
const nameStyle = "text-xl font-timeroman text-black capitalize";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContact);

  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editedFname, setEditedFname] = useState("");
  const [editedLname, setEditedLname] = useState("");
  const [editedStatus, setEditedStatus] = useState<string>("");

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: string) => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      setEditingContactId(id);
      setEditedFname(contact.fName);
      setEditedLname(contact.lName);
      setEditedStatus(contact.isActive ? "active" : "inactive");
    }
  };

  const handleSaveEdit = () => {
    if (editingContactId) {
      dispatch(
        editContact({
          id: editingContactId,
          fName: editedFname,
          lName: editedLname,
          isActive: editedStatus === "active",
        })
      );
      setEditingContactId(null);
      setEditedFname("");
      setEditedLname("");
    }
  };

  return (
    <div className="flex flex-wrap mx-8 gap-4 justify-center">
      {contacts.map((contact) => (
        <div className="" key={contact.id}>
          <div className="flex flex-col items-center bg-blue p-4">
            <h4 className={`${nameStyle} font-bold`}>
              {`${contact.fName} ${contact.lName}`}
            </h4>
            <p className="uppercase">
              {contact.isActive ? "Active" : "Inactive"}
            </p>

            {editingContactId === contact.id ? (
              <div className="flex flex-col gap-4 p-7 bg-blue">
                <label htmlFor="fName">
                  First Name:
                  <input
                    id="fName"
                    type="text"
                    className="px-2 ml-2"
                    placeholder="Enter your first name"
                    value={editedFname}
                    onChange={(e) => setEditedFname(e.target.value)}
                  />
                </label>

                <label htmlFor="lName">
                  Last Name:
                  <input
                    id="lName"
                    type="text"
                    className="px-2 ml-2"
                    value={editedLname}
                    placeholder="Enter your last name"
                    onChange={(e) => setEditedLname(e.target.value)}
                  />
                </label>

                <div className="flex gap-2 items-center">
                  Status:
                  <input
                    type="radio"
                    id="active"
                    name="status"
                    value="active"
                    checked={editedStatus === "active"}
                    onChange={() => setEditedStatus("active")}
                  />
                  <label htmlFor="active">Active</label>

                  <input
                    type="radio"
                    id="inactive"
                    name="status"
                    value="inactive"
                    checked={editedStatus === "inactive"}
                    onChange={() => setEditedStatus("inactive")}
                  />
                  <label htmlFor="inactive">Inactive</label>
                </div>

                <button
                  className="bg-black hover:bg-aliceblue hover:text-black w-full text-white rounded-md"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex justify-center rounded-md">
                <button
                  className={`${buttonStyle} bg-#10b981 text-black rounded-md`}
                  onClick={() => handleEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className={`${buttonStyle} bg-#ef4444 text-black rounded-md`}
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>


            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
