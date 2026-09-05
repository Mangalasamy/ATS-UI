export const saveAuth = (data) => {

  localStorage.setItem(
    "token",
    data.token
  );
localStorage.setItem("userId", data.userId);
  localStorage.setItem(
    "user",
    JSON.stringify({
      userId: data.userId,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      roles: data.roles
    })
  );
};


export const getUser = () => {

  const user =
    localStorage.getItem("user");

  return user
    ? JSON.parse(user)
    : null;
};


export const getToken = () => {

  return localStorage.getItem("token");
};


export const isAuthenticated = () => {

  return !!localStorage.getItem("token");
};


export const hasRole = (role) => {

  const user = getUser();

  return user?.roles?.includes(role) ?? false;
};


export const logout = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");
};