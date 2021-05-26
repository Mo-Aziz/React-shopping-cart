 import React from "react";
import Products from "./components/Products";
 import data from "./data.json";

 

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: data.products,
      size: "",
      sort: "",
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/"> 4 Her</a>
        </header>
        <main>
         <div className="content">
           <div className="main">
 <Products products={this.state.products}></Products>
           </div>
           <div className="sidebar">
cart items
           </div>
         </div>
        </main>
        <footer>
          All right reserved for M.Aziz.
        </footer>
      </div>
    );
  }
  
}

export default App;
