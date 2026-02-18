
import { useState } from "react";

const useDropDown = (init) => {
  const [show, setShow] = useState(init);

  const DropDown = () => {
    setShow(!show);
  };

  // return the state and the toggle function
  return [show, DropDown];
};

export default useDropDown;
