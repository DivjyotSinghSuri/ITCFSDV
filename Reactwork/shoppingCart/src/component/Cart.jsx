import React from "react";
import { useLocation, Link } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const gridStyle = {display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",padding:"20px"};
  const boxStyle = {border:"1px solid #ccc",padding:"10px",borderRadius:"10px",textAlign:"center",display:"flex",flexDirection:"column",height:"100%"};

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/" style={{ textDecoration:"none" }}>
        <button style={{padding:"10px 15px",backgroundColor:"blue",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>
          ⬅ Back to Products
        </button>
      </Link>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <h3 style={{ color: "gray" }}>Your cart is empty.</h3>
      ) : (
        <>
          <h3>Total Price: <span style={{ color: "green" }}>${totalPrice.toFixed(2)}</span></h3>

          <div style={gridStyle}>
            {cart.map((item, index) => (
              <div key={index} style={boxStyle}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
                <h4>{item.title.slice(0, 30)}...</h4>
                <p><b>${item.price}</b></p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;