export const authUser = async (userCredentials) => {
  const request = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(userCredentials),
  });

  const response = await request.json();

  return response.body.token;
};
