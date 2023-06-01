import React from "react";
import ProductList from "./components/productlist/productlist";
import Modal from "./components/modal/modal";

import "./App.css";

class App extends React.Component {
  state = {
    products: [],
    cartItems: [],
    favorites: [],
    showModal: false,
    // selectedProduct: null,
  };

  componentDidMount() {
    this.fetchProducts();
    this.fetchFavorites();
  }

  fetchProducts() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });

        // Retrieve cart items from localStorage
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
          this.setState({ cartItems: JSON.parse(cartItems) });
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  fetchFavorites() {
    // Отримайте дані про обрані товари з localStorage
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      this.setState({ favorites: JSON.parse(favorites) });
    }
  }

  addToCart = (product) => {
    this.setState({ selectedProduct: product, showModal: true });
  };

  confirmAddToCart = () => {
    const { selectedProduct, cartItems } = this.state;
    const updatedCartItems = [...cartItems, selectedProduct];
    this.setState(
      {
        cartItems: updatedCartItems,
        showModal: false,
        selectedProduct: null,
      },
      () => {
        // Save the changes to localStorage inside the callback
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
    );
  };

  cancelAddToCart = () => {
    this.setState({ showModal: false, selectedProduct: null });
  };

  toggleFavorite = (article) => {
    const { favorites } = this.state;
    const updatedFavorites = favorites.includes(article)
      ? favorites.filter((favArticle) => favArticle !== article)
      : [...favorites, article];
    this.setState({ favorites: updatedFavorites });
    // Збережіть зміни в localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // addToCart = (product) => {
  //   const { cartItems } = this.state;
  //   const updatedCartItems = [...cartItems, product];
  //   this.setState({ cartItems: updatedCartItems });
  //   // Збережіть зміни в localStorage
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  // };

  // toggleFavorite = (article) => {
  //   const { favorites } = this.state;
  //   const updatedFavorites = favorites.includes(article)
  //     ? favorites.filter((favArticle) => favArticle !== article)
  //     : [...favorites, article];
  //   this.setState({ favorites: updatedFavorites });
  //   // Збережіть зміни в localStorage
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  // };

  // toggleModal = () => {
  //   this.setState((prevState) => ({
  //     showModal: !prevState.showModal,
  //   }));
  // };

  openModal = (product) => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { products, cartItems, favorites, showModal } = this.state;

    console.log("showModal:", this.state.showModal);

    return (
      <div className="app">
        <header>
          <h1>My Online Store</h1>
          <div className="icons">
            <span className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              <img
                className="backet-image"
                src={"/image/header/bascket.svg"}
              ></img>
              <span className="cart-count">{cartItems.length}</span>
            </span>
            <span className="favorites-icon">
              <i className="fas fa-star"></i>
              <img
                className="backet-image"
                src={"/image/header/heart-svgrepo-com.svg"}
              ></img>
              <span className="favorites-count">{favorites.length}</span>
            </span>
          </div>
        </header>
        <main>
          {showModal && (
            <Modal
              header="Add to Cart"
              closeButton={true}
              text={`Are you sure you want to add to your cart?`}
              actions={
                <>
                  <button onClick={this.confirmAddToCart}>Confirm</button>
                  <button onClick={this.cancelAddToCart}>Cancel</button>
                </>
              }
              onClose={this.cancelAddToCart}
            />
          )}
          <ProductList
            products={products}
            favorites={favorites}
            addToCart={this.openModal}
            onToggleFavorite={this.toggleFavorite}
          />
        </main>
      </div>
    );
  }
}

export default App;
