import { serverErrorHandler } from "../../utils/ErrorHandler/error_handler";

export const authUser = async (userCredentials) => {
  try {
    const request = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(userCredentials),
    });

    const response = await request.json();

    serverErrorHandler(response);
    return response.body.token;
  } catch (error) {
    console.error(error);
  }
};
