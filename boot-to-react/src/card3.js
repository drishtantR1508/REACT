import React from "react";

function Card3() {
  return (
    <div className="col-4">
      <div className="card round" style={{ width: "18rem" }}>
        <img
          src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card3;
