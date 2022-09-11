import faker from "faker";

import getMockContext from "./utils/mockContext";

const mount = (el, context) => {
  console.log("Mounted Cart !!");
  el.innerHTML =
    `<h3>Rendered from Cart Sub-App !!</h3><br/>` +
    "Theme set in context is " +
    `<b>` +
    context.misc.theme +
    `</b>` +
    `<br/>` +
    "Font Size set in context is " +
    `<b>` +
    context.misc.fontSize +
    `</b>` +
    `<br/><br/>` +
    "There are " +
    faker.datatype.number() +
    " items in your cart ";
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  const cartMockContext = getMockContext();
  if (el) {
    mount(el, cartMockContext);
  }
}

export { mount };
