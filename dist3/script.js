function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class PizzaBuilder extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      toppingOptions: {
        HTML: {
          icons: ['gluten free'],
          amount: 12 },

        'HTML-And-CSS': {
          icons: ['gluten free'],
          amount: 27 },

        'HTML-And-CSS-And-JS': {
          icons: ['gluten free'],
          amount: 52 },

        OurSecret: {
          icons: ['gluten free'],                                       
          amount: 51 },

         },


      selectedToppings: [],
      basePrice: 1000,
      toppingPrice: 150,
      discount: {
        userCode: '',
        applied: false,
        codes: {
          codepen: 25,
          css: 20,
          george: 30,
          html: 10,
          javascript: 15,
          pizza: 40,
          react: 35 } },


      orderConfirmed: false });_defineProperty(this, "confirmOrderBtnRef",


    React.createRef());_defineProperty(this, "closeConfirmationBtnRef",
    React.createRef());_defineProperty(this, "handleToppingOptionClick",

    e => {
      if (e.target.className === 'topping-input') {

        const selectedTopping = e.target.id;

        this.state.selectedToppings.includes(selectedTopping) ?
        this.setState(prevState => ({ selectedToppings: prevState.selectedToppings.filter(topping => topping !== selectedTopping) })) :
        this.setState(prevState => ({ selectedToppings: [...prevState.selectedToppings, selectedTopping] }));
      }
    });_defineProperty(this, "handleDiscountInput",

    e => {

      const value = e.target.value.trim().toLowerCase();

      this.setState(prevState => ({ discount: { ...prevState.discount, userCode: value } }));
      if (this.state.discount.applied) {
        this.setState(prevState => ({ discount: { ...prevState.discount, applied: false } }));
      }
    });_defineProperty(this, "handleDiscountClick",

    () => this.setState(prevState => ({ discount: { ...prevState.discount, applied: true } })));_defineProperty(this, "handleOrderSubmit",

    () => {
      this.setState((prevState) => (
      { orderConfirmed: !prevState.orderConfirmed }),
      () => {
        this.state.orderConfirmed ?
        this.closeConfirmationBtnRef.current.focus() :
        this.confirmOrderBtnRef.current.focus();
      });
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement("main", null, /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement(ToppingSelect, {
        toppingOptions: Object.entries(this.state.toppingOptions),
        toppingPrice: (this.state.toppingPrice / 100).toFixed(2),
        handleToppingOptionClick: this.handleToppingOptionClick }), /*#__PURE__*/
      React.createElement(Pizza, {
        selectedToppings: this.state.selectedToppings,
        toppingOptions: this.state.toppingOptions }), /*#__PURE__*/
      // React.createElement(OrderDetails, {
      //   selectedToppings: this.state.selectedToppings,
      //   totalPrice: ((this.state.basePrice + this.state.toppingPrice * this.state.selectedToppings.length) / 100).toFixed(2),
      //   discount: this.state.discount,
      //   confirmOrderBtnRef: this.confirmOrderBtnRef,
      //   handleDiscountInput: this.handleDiscountInput,
      //   handleDiscountClick: this.handleDiscountClick,
      //   handleOrderSubmit: this.handleOrderSubmit }),


      // this.state.orderConfirmed ? /*#__PURE__*/
      // React.createElement(OrderConfirmation, {
      //   handleOrderSubmit: this.handleOrderSubmit,
      //   closeConfirmationBtnRef: this.closeConfirmationBtnRef }) :

      null))));





  }}


function Header() {
  return /*#__PURE__*/(
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/React.createElement("span", { "aria-hidden": true }, "\uD83C\uDF55"), "Website Builder", /*#__PURE__*/React.createElement("span", { "aria-hidden": true }, "\uD83C\uDF55"))));


}

function ToppingSelect({ toppingOptions, toppingPrice, handleToppingOptionClick }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "topping-select" }, /*#__PURE__*/
    React.createElement("h2", null, "TOPPINGS"), /*#__PURE__*/
   // React.createElement("ul", { className: "toppings-info" }, /*#__PURE__*/
    //React.createElement("li", null, /*#__PURE__*/React.createElement(ToppingIcon, { iconType: 'vegetarian' }), " Vegetarian"), /*#__PURE__*/
    //React.createElement("li", null, /*#__PURE__*/React.createElement(ToppingIcon, { iconType: 'gluten free' }), " Gluten Free"), /*#__PURE__*/
    //React.createElement("li", null, /*#__PURE__*/React.createElement(ToppingIcon, { iconType: 'hot' }), " Hot & Spicy")), /*#__PURE__*/

   // React.createElement("p", { className: "toppings-info" }, "Toppings charged at ", `$${toppingPrice}`, " each."), /*#__PURE__*/
    React.createElement("ul", { className: "topping-options", onClick: handleToppingOptionClick },
    toppingOptions.map(topping => /*#__PURE__*/React.createElement(ToppingOption, { key: topping[0], topping: topping[0], toppingIcons: topping[1].icons })))));



}

function ToppingOption({ topping, toppingIcons }) {
  return /*#__PURE__*/(
    React.createElement("li", { className: "topping-option" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", id: topping, className: "topping-input" }), /*#__PURE__*/
    React.createElement("label", { className: "topping-label", htmlFor: topping, "aria-label": `${topping} (${toppingIcons.map(icon => icon)})` }, /*#__PURE__*/
    React.createElement("div", { className: "topping-image" }, /*#__PURE__*/
    React.createElement("div", { className: `${topping} topping-image-item` })), /*#__PURE__*/

    React.createElement("span", { className: "topping-label-content" }, /*#__PURE__*/
    React.createElement("span", { className: "topping-label-text" },
    topping), /*#__PURE__*/

    React.createElement("span", { className: "topping-label-icons" },
    toppingIcons.map(icon => /*#__PURE__*/React.createElement(ToppingIcon, { key: icon, iconType: icon })))))));





}

function ToppingIcon({ iconType }) {
  return /*#__PURE__*/(
    React.createElement("span", { className: `topping-icon ${iconType.split(' ')[0]}`, "aria-label": iconType },
    iconType.charAt(0).toUpperCase()));


}

function Pizza({ toppingOptions, selectedToppings }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "pizza-container" }, /*#__PURE__*/
    React.createElement("div", { className: "pizza" },
    selectedToppings.map((topping) => /*#__PURE__*/
    React.createElement(PizzaTopping, { key: topping, topping: topping, toppingAmount: toppingOptions[topping].amount })))));



}

function PizzaTopping({ topping, toppingAmount }) {

  let toppings = [];

  for (let i = 1; i <= toppingAmount; i++) {
    toppings.push( /*#__PURE__*/React.createElement("div", { key: `${topping + i}`, className: `topping ${topping} ${topping}-${i} ` }));
  }

  return toppings;
}

function OrderDetails({ selectedToppings, totalPrice, discount, confirmOrderBtnRef, handleDiscountInput, handleDiscountClick, handleOrderSubmit }) {

  const validDiscount = Object.keys(discount.codes).includes(discount.userCode);

  return /*#__PURE__*/(
    React.createElement("div", { className: "order" }, /*#__PURE__*/
   // React.createElement("h2", null, "Order Details"), /*#__PURE__*/
    React.createElement("div", { className: "order-toppings" }, /*#__PURE__*/
   // React.createElement("h3", null, "Toppings:"), /*#__PURE__*/
    React.createElement("ul", { className: "order-toppings-list" }, /*#__PURE__*/
   // React.createElement("li", null, "Cheese"),
    selectedToppings.map(topping => /*#__PURE__*/React.createElement("li", { key: topping }, topping)))), /*#__PURE__*/


    React.createElement("div", { className: "order-discount" }, /*#__PURE__*/
    //React.createElement("h3", null, "Discount Code:"), /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "discount-input",
      spellCheck: "false",
      value: discount.userCode,
      maxLength: "10",
      onChange: handleDiscountInput,
      "aria-label": "Discount Code",
      "aria-describedby": "discount-message",
      "aria-invalid": discount.applied && !validDiscount }),


    discount.applied ?
    validDiscount ? /*#__PURE__*/
    React.createElement("p", { id: "discount-message", className: "discount-message discount-message--valid", role: "alert" }, "Valid Code: ",
    discount.codes[discount.userCode], "% Off") : /*#__PURE__*/


    React.createElement("p", { id: "discount-message", className: "discount-message discount-message--invalid", role: "alert" }, "Invalid Code") :


    null, /*#__PURE__*/

    React.createElement("button", { className: "btn discount-btn", onClick: handleDiscountClick, "aria-label": "Apply Discount" }, "")), /*#__PURE__*/

    React.createElement("div", { className: "order-price" }, /*#__PURE__*/
   // React.createElement("h3", null, "Total Price:"), /*#__PURE__*/
    React.createElement("p", { className: "price" },

    `$${discount.applied && validDiscount ?
    (totalPrice - totalPrice * (discount.codes[discount.userCode] / 100)).toFixed(2) : totalPrice}`), /*#__PURE__*/


    React.createElement("button", {
      className: "btn order-btn",
      onClick: handleOrderSubmit,
      "aria-label": "Confirm Order",
      ref: confirmOrderBtnRef }, ""))));






}

function OrderConfirmation({ closeConfirmationBtnRef, handleOrderSubmit }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "" }, /*#__PURE__*/
    // React.createElement("h2", null, "Order Confirmed"), /*#__PURE__*/
    // React.createElement("p", null, "Your pizza will be with you shortly!"), /*#__PURE__*/
    React.createElement("", {
      className: "",
      
      ref: closeConfirmationBtnRef }, ""))));






}

ReactDOM.render( /*#__PURE__*/React.createElement(PizzaBuilder, null), document.querySelector('#root'));