import React, { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCart, setShowCart] = useState(false);


  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        if (data.length === 0) setError("No data found");
        else setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.title.slice(0, 20)} added to cart!`);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    alert(`Payment of $${cartTotal.toFixed(2)} successful!`);
    setCart([]);
    setShowCart(false);
  };

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div style={{ padding: "20px" }}>

      {/* TOP TOTAL BAR */}
      <div
        style={{
          background: "#f0f0f0",
          padding: "12px 18px",
          marginBottom: "20px",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "600"
        }}
      >
        Cart Total:{" "}
        <span style={{ color: "green" }}>${cartTotal.toFixed(2)}</span>
      </div>

      {/* Toggle Cart View */}
      <button
        onClick={() => setShowCart(!showCart)}
        style={{
          padding: "10px 15px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        🛒 View Cart ({cart.length})
      </button>

      {/* Cart Screen */}
      {showCart && (
        <div>
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <h3 style={{ color: "gray" }}>Your cart is empty.</h3>
          ) : (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px",
                  padding: "20px"
                }}
              >
                {cart.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      borderRadius: "10px",
                      textAlign: "center"
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "contain"
                      }}
                    />
                    <h4>{item.title.slice(0, 30)}...</h4>
                    <p>
                      <b>Price: ${item.price}</b>
                    </p>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: "10px" }}>
                🧾 Total Price:{" "}
                <span style={{ color: "green" }}>${cartTotal.toFixed(2)}</span>
              </h2>

              <button
                onClick={handleCheckout}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  marginTop: "15px"
                }}
              >
                💳 Checkout / Pay
              </button>
            </>
          )}
        </div>
      )}

      {/* Product Screen */}
      {!showCart && (
        <>
          <h2>Products</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
              padding: "20px"
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain"
                  }}
                />

                <h4>{item.title.slice(0, 30)}...</h4>
                <p>
                  <b>${item.price}</b>
                </p>

                <button
                  onClick={() => addToCart(item)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px"
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
