import { useState } from "react";
const Dropdown = ({ btnState, setBtnState }) => {
  const [open, setOpen] = useState(false);

  const openHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setOpen(!open);
  };
  return (
    <>
      <div className="dropdownCard">
        <p className={open ? `option` : "showOption"}>{btnState}</p>

        <div>
          <button
            className="open_btn"
            onClick={(e) => openHandler(e)}
            value="open"
          >
            open
          </button>
        </div>
      </div>
    </>
  );
};
export { Dropdown };
