import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 text-center" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="*">Track Tickets</a>
      </div>
      <div className="row p-3">
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control mt-3"
            placeholder="Eg how do I activate F&O"
          />
          <div className="mt-3">
            <a href="*" className="d-block">
              Track account opening
            </a>
            <a href="*" className="d-block">
              Track segment activation
            </a>
            <a href="*" className="d-block">
              Intraday margins
            </a>
            <a href="*" className="d-block">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-5">Features</h1>
          <ol className="mt-3">
            <li>
              <a
                href="*"
                className="d-block"
                style={{ lineHeight: "2" }}
              >
                Surveillance measure on scrips - February 2025
              </a>
            </li>
            <li>
              <a
                href="*"
                className="d-block"
                style={{ lineHeight: "2" }}
              >
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
