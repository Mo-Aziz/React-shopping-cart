import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     // products: data.products,
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //     // size: "",
  //     // sort: "",
  //   };
  // }

  // create order
  // createOrder = (order) => {
  //   alert("Need to save order for" + order.name);
  // };
  // remove item
  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((x) => x._id !== product._id),
  //   });
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  //   );
  // };
  // add to cart
  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  // sorting filter
  // sortProducts = (event) => {
  //   console.log(event.target.value);
  //   const sort = event.target.value;
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id > b._id
  //           ? 1
  //           : -1
  //       ),
  //   }));
  // };

  //  filtering by size
  // filterProducts = (event) => {
  //   console.log(event.target.value);
  //   if (event.target.value === "") {
  //     this.setState({ size: event.target.value, product: data.products });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
             
                  <Link to="/"> 4 HER</Link>
                  <Link to="/admin">Admins</Link>
            
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
              
            </main>
            <footer>All right reserved for M.Aziz.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
