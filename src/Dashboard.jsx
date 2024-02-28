import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import UserForm from "./components/UserForm";
import React from "react";

const Dashboard = () => {
  // The below state will store array of user data fetched by the API below.
  const [userData, setUserData] = useState([]);
  // The below will represent the user data selected for detailed display (I've set this to null to start with - as it's empty!).
  const [selectedUser, setSelectedUser] = useState(null);
  // The below hook will manage the state of wheter the modal is open or closed - set to false(closed)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // here is the state management for my UserForm component
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  // useEffect allows me to fetch data from the APi  - it allows for asynchronous operations - in otherwords (does things at the same time as other things) - meaning it doesn't halt or stop the code - because running the API can take time.
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        // map over the user data that I have specified - create a new object
        const userData = data.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          department: user.company.department,
          title: user.company.title,
        }));
        //   this updates the userData array - see above
        setUserData(userData);
      });
  }, []);

  //   function to handle the detailed user view state - above
  const handleCardClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  //   function to handle the modal state - above
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //   this function handles the deletion of the user from the dashboard (userData) - using a simpel filter method
  const handleDeleteUser = () => {
    const updatedUsers = userData.filter((user) => user.id !== selectedUser.id);
    setUserData(updatedUsers);
  };

  // *************

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditFormOpen(true);
    setIsModalOpen(false);
  };

  const handleFormSubmit = (updatedUser) => {
    // Update the user data in the userData array
    const updatedUsers = userData.map((user) =>
      user.id === selectedUser.id ? { ...user, ...updatedUser } : user
    );
    setUserData(updatedUsers);

    // Close the form
    setIsEditFormOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditFormOpen(false);
    // closes modal when 'edit' button is clicked..
    setIsEditFormOpen(false);
  };

  // *************

  //
  return (
    <>
      {/* taking the above userData and mapping over the created object - this will form part of my employee card */}
      {userData.map((user) => (
        <div
          className="cursor-pointer flex items-center  gap-6 p-2.5 bg-blue-400 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          key={user.id}
          id={user.id}
          onClick={() => handleCardClick(user)}
        >
          <img
            className="w-32 h-32 rounded-full  border-4 border-yellow-500"
            src={user.image}
            alt="user-image"
          />
          <div className="text-white flex flex-col gap-4">
            <p>
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>Department:</strong> {user.department}
            </p>
            <p>
              <strong>Title:</strong> {user.title}
            </p>
          </div>
        </div>
      ))}

      {/* Below checks if isModalOpen is true.... If isModalOpen is true, it will render the Modal component.
                the Modal component passes data (user, onClose, onDelete) as props. */}

      {isModalOpen && (
        <Modal
          // below is where we take the object stored in selectedUser and display as the 'focused' user.
          user={selectedUser}
          onClose={handleCloseModal}
          // the below will pass the below to the modal component for editing
          onEdit={handleEditUser}
          //   onDelete passed through from props - see above function that will handle delete
          onDelete={() => {
            handleDeleteUser();
            // will also close my Modal on user deletion...
            handleCloseModal();
          }}
        />
      )}

      {/* Below is simialar to the above code for the Modal - in that it checks if the form is 'true' / open */}

      {isEditFormOpen && (
        <UserForm
          user={selectedUser}
          onSubmit={handleFormSubmit}
          onCancel={handleCancelEdit}
        />
      )}
    </>
  );
};
export default Dashboard;
