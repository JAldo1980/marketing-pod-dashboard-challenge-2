import React from "react";

const Modal = (props) => {
  // destructuring object - creates 3 new variables - makes my code a little cleaner
  const { user, onClose, onDelete, onEdit } = props;

  // function that will pass through delete props to dashbaord
  const handleDelete = () => {
    onDelete();
  };

  // function that will pass through close props to dashbaord
  const handleEdit = () => {
    onEdit(user); // this will call the onEdit function with the user data
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center modal-overlay">
        <div className="bg-blue-800 text-white p-8 rounded-md max-w-md w-full relative z-10">
          <div className="flex justify-end">
            <button
              className="p-1 rounded-md cursor-pointer bg-white text-red-600 hover:bg-red-200 transition-all duration-300 ease-in-out"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <h2 className="text-center">Employee Focus</h2>
          <div className="flex flex-col items-center">
            <img
              className="odal-image w-40 h-40 rounded-full border-4 border-yellow-500"
              src={user.image}
              alt=""
            />
          </div>
          <div className="text-center">
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="p-1.5 bg-red-600 rounded-md hover:bg-red-800 transition-all duration-300"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="p-1.5 bg-green-600 rounded-md hover:bg-green-800 transition-all duration-300"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
