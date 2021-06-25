import React, { Component } from "react";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: null,
    searchQuery: "",
    detailProduct: detailProduct,
    cart: [],
    modelOpen: false,
    modelProduct: detailProduct,
    cartSubTotal: 0
  };
     
  handleCategorySelect = category => {
    this.setState({ selectedCategory: category, searchQuery: "" });
  };
  
  handleSearch = query => {
    this.setState({ searchQuery: query, selectedCategory: null });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  openModel = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modelProduct: product, modelOpen: true };
    });
  };
  closeModel = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };
  
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({ products: tempProducts });
  };
  setCategories = () => {
    let tempCategories = [];
    storeCategories.forEach(item => {
      const singleItem = { ...item };
      tempCategories = [...tempCategories, singleItem];
    });
    this.setState({ categories: tempCategories });
  };

  getPageData = () => {
    const { searchQuery, selectedCategory, products: allProducts } = this.state;
    let filtered = allProducts;
    if (searchQuery) {
      filtered = allProducts.filter(p =>
        p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedCategory && selectedCategory.id)
      filtered = allProducts.filter(m => m.category.id === selectedCategory.id);
    return { products: filtered };
  };

  componentDidMount() {
    this.setProducts();
    this.setCategories();
  }

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotal();
        }
        
      );
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));

    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };
  
  checkCart = (price) => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        alert("Thank you for your payment, the order is on the way :)");
window.location="/";
      }
    );
  };


  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const total = subTotal;
    this.setState({ cartSubTotal: subTotal, cartTotal: total });
  };

  render() {
    const { products } = this.getPageData();
    const { searchQuery } = this.state;
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          products: products,
          searchQuery: searchQuery,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          checkCart: this.checkCart,
          handleCategorySelect: this.handleCategorySelect,
          handleSearch: this.handleSearch}}>

        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
