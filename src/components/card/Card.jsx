const Card = () => {
  return (
    <>
      <div className="card">
        <div className="title-container">
          <h1>Title</h1>
        </div>
        <div className="q-a-container">
          <span>Question</span>
        </div>
        <div className="tags-container">
          <span className="tags-title">Tags:</span>
          <span className="tag">Computer</span>
          <span className="tag">Math</span>
          <span className="tag">Science</span>
        </div>
      </div>
    </>
  );
};
export default Card;
