import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login() {},
  logOut() {},
});

function AuthProtected(props) {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogOut = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        login() {
          handleLogin();
        },
        logOut() {
          handleLogOut();
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProtected;
