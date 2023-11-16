import { serverErrorHandler } from "../../utils/ErrorHandler/error_handler";

export const fetchUserProfile = async (token) => {
  try {
    const request = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await request.json();

    serverErrorHandler(response);
    return response.body;
  } catch (err) {
    console.error(err.status);
  }
};

export const editUserProfile = async (data) => {
  try {
    const request = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify(data),
    });

    const response = await request.json();
    serverErrorHandler(response);
    return response.body;
  } catch (error) {
    console.error(error);
  }
};
