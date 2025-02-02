import React from "react";
import pexels from "../../images/pexels.png";
import Boy1 from "../../images/boy1.png";
import Boy2 from "../../images/boy2.png";
import clock from "../../images/clock.png";
import game from "../../images/game.png";
import snake from "../../images/snack.png";

const Contentone = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 position-relative">
            <img src={pexels} className="img-fluid w-100" alt="pexels" />
            <img
              src={Boy1}
              className="w-25 img-fluid position-absolute top-50 start-0 translate-middle"
              alt="boy1"
            />
            <img
              src={Boy2}
              className="w-25 img-fluid position-absolute top-50 end-10 translate-middle"
              alt="boy2"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="text-black fw-medium fs-2">
              Best creative working<br /> environments that suit<br /> your business.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit eius mod tempor
              incididunt ut labore.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <img src={clock} className="img-fluid w-25" alt="clock" />
              <div className="together">
                <h3>Open 24 hours</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <img src={game} className="img-fluid w-25" alt="game" />
              <div className="together">
                <h3>Free Snack & Drink</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <img src={snake} className="img-fluid w-25" alt="snake" />
              <div className="together">
                <h3>Enjoy Game Zone</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contentone };
