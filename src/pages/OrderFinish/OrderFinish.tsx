import { useShoppingCart } from "../../components/context/CartContext"

export const OrderFinish = () => {
  const { cartQuantity } = useShoppingCart();
  const shipment = Math.floor(Math.random() * 10);

  return (
    <div className="order-finish">
      <div className="cart-full-view">
        <h2>My cart</h2>
      </div>
      <div className="purchase-summary">
        <h3>Purchase summary</h3>
        <div className="purchase-summary-items">
          <h4>Products<span> ({cartQuantity})</span></h4><h5>$ 34.33</h5>
        </div>
        <div className="purchase-summary-items">
          <h4>Shipment</h4><h5>$ {shipment}</h5>
        </div>
        <hr />
        <div className="purchase-summary-items order-total">
          <h3>Total</h3><h4>Order-Total</h4>
        </div>
        <button>Buy</button>
      </div>
    </div>
  )
}