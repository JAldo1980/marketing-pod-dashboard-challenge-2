import React, { useState } from "react";

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [editedUser, setEditedUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    department: user.department,
    title: user.title,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      // i decided to use the spread operator here to make things more manageable
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedUser);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-3 justify-center items-center modal-overlay bg-green-300 bg-opacity-50">
      <h2 className="text-xl">Please Edit User</h2>
      <form
        className="flex flex-col gap-3 justify-center items-center bg-blue-300 p-5 rounded-md"
        onSubmit={handleSubmit}
      >
        <label className="pr-2">
          First Name:
          <input
            type="text"
            name="firstName"
            value={editedUser.firstName}
            onChange={handleChange}
            className="ml-2 p-1"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={editedUser.lastName}
            onChange={handleChange}
            className="ml-2 p-1"
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={editedUser.department}
            onChange={handleChange}
            className="ml-2 p-1"
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            name="title"
            value={editedUser.title}
            onChange={handleChange}
            className="ml-2 p-1"
          />
        </label>
        <button
          type="submit"
          className="p-1.5 bg-green-600 rounded-md hover:bg-green-800 transition-all duration-300"
        >
          Save
        </button>
        <button
          type="button"
          className="p-1.5 bg-red-600 rounded-md hover:bg-red-800 transition-all duration-300"
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
