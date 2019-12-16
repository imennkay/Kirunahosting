function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component, PropTypes } = React;



class List extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      items: [
        { id: 'item_1001',
          src: './images/1m.jpg',
          name: '1månad BAS WEBBHOTELL',
          cost: 64,
          qty: 0 },
          { id: 'item_1002',
          src: './images/12m.jpg',
          name: '12månad BAS WEBBHOTELL',
          cost: 275,
          qty: 0 },
          { id: 'item_1003',
          src: './images/24m.jpg',
          name: '24månad BAS WEBBHOTELL',
          cost: 431,
          qty: 0 }],
      


          total_items: 0,
          total: 0,
          packaging: 25,
          popup: true,
          thank_popup: true });_defineProperty(this, "add",
    
        (name, cost) => {
    
          this.state.items.map((item, id) => {
            if (item.name == name) {
              item.qty += 1;
            }
    
    
          });
          this.setState({
            total_items: this.state.total_items + 1,
            total: this.state.total + cost });

            
    
    
        });_defineProperty(this, "remove",
        (name, cost) => {
          this.state.items.map((item, id) => {
            if (item.name == name) {
              if (item.qty != 0) {
                item.qty -= 1;
                this.setState({
                  total_items: this.state.total_items - 1,
                  total: this.state.total - cost });
    
              }
            }
    
    
          });
       
            
        });_defineProperty(this, "thank_popup",
        () => {
          this.setState({
            thank_popup: !this.state.thank_popup });
        
    
        });_defineProperty(this, "reload",
        () => {
          window.location.href = window.location.href;
        });}
      render() {
        return (
          React.createElement("div", null,
          React.createElement("div", { className: "navbar" },
          React.createElement("span", { className: "logo" },
          React.createElement("img", { src: "./images/logo2.png", alt: "logo" }),
          React.createElement("h1", null, "Kundvagn")),
    
          React.createElement("button", { className: "popup_btn" }, React.createElement("img", { src: "./images/cart.png" }),
          this.state.total_items != 0 ? React.createElement("span", null, this.state.total_items) : null)),
    
          React.createElement("div", { className: "list-container" },
          this.state.items.map((item, id) => {
            return React.createElement("div", { className: "item-container", key: id },
    
            React.createElement("img", { src: item.src, alt: item.name, className: "img" }),
            React.createElement("h3", null, item.name),
    
            React.createElement("b", null, "kr", item.cost.toFixed(2)),
            React.createElement("button", { onClick: () => this.add(item.name, item.cost) }, "Lägg till i kundvagn"),
            React.createElement("button", { onClick: () => this.remove(item.name, item.cost) }, "ta bort"));
            
    
          })),
    
         
    
          React.createElement("div", { className: "orderpage" },
    
    
          this.state.popup ?
          this.state.total_items != 0 ? React.createElement("div", { className: "order" },
          React.createElement("div", { className: "cart" },
          React.createElement("h1", null, "Kassa"),
          React.createElement("div", { className: "cart_left" },
          this.state.items.map((item1, id1) => {
    
            return (
              React.createElement("div", { key: id1 },
              item1.qty != 0 ?
              React.createElement("div", { key: id1, className: "cart_item" },
              React.createElement("img", { src: item1.src }),
              React.createElement("span", { className: "cart_info" },
              React.createElement("h3", null, item1.name, " x ", item1.qty))) :
    
              null));
    
    
    
          }))),
    
    
          React.createElement("div", { className: "cart_right" },
          React.createElement("div", { className: "final_price" },
          React.createElement("div", { className: "cart_item" },
          React.createElement("h3", null, "Pris:"),
          React.createElement("h3", null, "kr", this.state.total.toFixed(2))),
    
          React.createElement("div", { className: "cart_item" },
          React.createElement("h3", null, ""),
          React.createElement("h3", null, "")),
    
          React.createElement("div", { className: "cart_item" },
          React.createElement("h3", null, "moms:"),
          React.createElement("h3", null, "%", this.state.packaging.toFixed(2)))),
    
    
    
          React.createElement("div", { className: "final_price" },
          React.createElement("h3", null, "Totalt Pris:"),
          React.createElement("h3", null, "kr", (this.state.total.toFixed(2)))),
    
          React.createElement("button", { className: "order_btn", onClick: () => this.reload() }, "ta bort")),
          React.createElement("a", { className: "order_btn", href:"./faktura/Faktura89.pdf", onClick: () => this.pdf() }, "Faktura")) :

          
          
    
          null : null,
    
    
         
          null)));
    
    
    
    
    
      }}
    
    
    
    
    
    
    