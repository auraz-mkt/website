export const useCredentialsEncoder = () => {
  return function (username: string, password: string) {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    return `username=${encodedUsername}&password=${encodedPassword}`;
  };
};
