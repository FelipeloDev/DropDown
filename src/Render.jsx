import React, { useState } from "react";
import Cosa from "./cosa/cosa";
import Dropdown from "./dropdown/dropdown";
import Modal from "./modal/Modal";

const Render = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>

      <Dropdown
        placeholder="select"
        multiple
        items={[
          {
            id: "1",
            value: "some value",
            disabled: false,
          },
          {
            id: "2",
            value: "some other value",
            disabled: false,
          },
        ]}
      />
    </div>
  );
};

export default Render;
