const Navbar = ({ setBtnState, setBtnCounter }) => {
  const navBtnHandler = (e) => {
    setBtnCounter(e.target.name);
    setBtnState(e.target.value);
  };

  return (
    <div className="header">
      <h1 className="header_text_color">Royalty</h1>
      <div className="btn_container">
        <button
          className="btn"
          onClick={(e) => navBtnHandler(e)}
          name="1"
          value="Button1"
        >
          Button1
        </button>
        <button
          className="btn"
          onClick={(e) => navBtnHandler(e)}
          name="2"
          value="Button2"
        >
          Button2
        </button>
      </div>
    </div>
  );
};
export { Navbar };
