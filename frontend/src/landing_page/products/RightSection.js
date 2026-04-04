import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-5 mt-5">
          <h1 className="h3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
