import { useState } from "react";

const usePasswordVisibilityToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return [showPassword, togglePasswordVisibility];
};

export default usePasswordVisibilityToggle;
