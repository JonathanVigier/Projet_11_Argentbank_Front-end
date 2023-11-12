import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUsername } from "../../redux/Slicers/userSlice.js";

const UserInfos = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const token = sessionStorage.getItem("user_tkn");
  const user = {
    firstName: sessionStorage ? sessionStorage.getItem("user_firstName") : null,
    lastName: sessionStorage ? sessionStorage.getItem("user_lastName") : null,
  };

  const toggleEditModal = () => {
    setShowModal(!showModal);
  };

  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { token: token, userName: userName };
    dispatch(editUsername(data));
    setUserName("");
    toggleEditModal();
  };

  return (
    <div className="header">
      <h1>
        Welcome back <br /> {user.firstName} {user.lastName} !
      </h1>
      <button className="edit-button" onClick={toggleEditModal}>
        Edit Name
      </button>
      {showModal ? (
        <aside className="modal-wrapper">
          <div className="modal-content">
            <div className="close-modal-button" onClick={toggleEditModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <h3 className="modal-form title">Edit your username</h3>
              <input
                className="modal-form input"
                type="text"
                name="edited-username"
                onBlur={handleInput}
              />
              <button className="modal-form button" type="submit">
                Edit
              </button>
            </form>
          </div>
        </aside>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserInfos;
