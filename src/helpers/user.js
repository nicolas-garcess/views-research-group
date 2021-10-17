export const saveUser = (user) => {
  const userData = {
    id: user.id,
    email: user.email,
    rol: user.rol,
    token: user.token,
  };

  localStorage.setItem('user', JSON.stringify(userData));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
};

export const removeUser = () => {
  localStorage.removeItem('user');
};
