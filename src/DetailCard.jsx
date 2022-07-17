const DetaiCard = ({ btnCounter }) => {
  return (
    <div className="datailCard">
      <div className="text_div">
        <p>
          A royalty payment is a payment made by one party to another that owns
          a particular asset, for the right to ongoing use of that asset.
        </p>
        <h1 className="btn_Count">{btnCounter}</h1>
      </div>
      <img
        className="image"
        alt="babyImage"
        src="https://images.edexlive.com/uploads/user/imagelibrary/2020/2/27/original/nature_and_child.jpg?w=400&dpr=2.6"
      />
    </div>
  );
};
export { DetaiCard };
