import React from "react";

function Button({ title = "nothing" }) {
  return <button class="btn btn-warning btn-lg">{title}</button>;
}
export default Button;
