import React from "react";
import { useState, useRef } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);
  const loginRef = useRef(null);

  function clicked(e) {
    if (e.target === loginRef.current) {
      return setValue(true);
    }
    setValue2(false);
    return setValue(false);
  }

  return (
    <AuthContext.Provider
      value={{ value, setValue, value2, setValue2, clicked, loginRef }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
