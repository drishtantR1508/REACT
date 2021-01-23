import React from "react";

import Button from "./buttons";
import Cards from "./cards";

function Bottom() {
  return (
    <>
      <div className="bg-success text-center">
        <p className="display-4 text-white p-4">Discover the amazing new app</p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
        </p>
        <div className="row  p-4">
          <div className="col-6 text-right">
            <Button title={"Play Store"} />
          </div>
          <Button title={"App Store"} />
          <div className="col-6 text-center"></div>
        </div>
      </div>
      <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">We love new friends!</h2>
          <Cards />
          <Cards />
        </div>
        <br />
        <br />
      </section>
    </>
  );
}
export default Bottom;
