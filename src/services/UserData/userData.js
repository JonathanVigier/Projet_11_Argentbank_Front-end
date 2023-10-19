export const fetchUserProfile = async (token) => {
  const request = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();

  return response.body;
};

export const editUserProfile = async (token, editedUsername) => {
  const request = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(editedUsername),
  });

  const response = await request.json();

  console.log(response.body);
};
