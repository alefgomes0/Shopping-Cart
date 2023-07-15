import { useShoppingCart } from "../../components/context/CartContext";
import { ShopData } from "../../data/ShopData";

export const OrderFinish = () => {
  let total: number = 0;

  const {
    cartQuantity,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const shipment = Math.floor(Math.random() * 10);

  return (
    <div className="order-finish">
      <div className="cart-full-view">
        <h2>My cart</h2>
        {cartItems.map((item) => {
          const currentBook = ShopData.find((book) => book.id === item.id);
          if (currentBook === undefined) return -1;
          return (
            <div className="order-finish-item">
              <img src={currentBook.url} alt={currentBook.alt} />
              <div className="order-finish-name">
                <h4>{currentBook.title}</h4>
                <h5>{currentBook.author}</h5>
              </div>
              <div className="cart-stepper fs">
                <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                <div>{item.quantity}</div>
                <button onClick={() => increaseCartQuantity(item.id)}>+</button>
              </div>
              <div className="fs-price">
                <h5>$ {item.quantity * currentBook.price * 100 / 100}</h5>
                <p style={{ display: "none" }}>{total += item.quantity * currentBook.price * 100 / 100}</p>
              </div>
              <svg
                onClick={() => removeFromCart(item.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8Z"
                />
                <path
                  fill="currentColor"
                  d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32ZM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416ZM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="purchase-summary">
        <h3>Purchase summary</h3>
        <div className="purchase-summary-items">
          <h4>
            Products<span> ({cartQuantity})</span>
          </h4>
          <h5>$ {total}</h5>
        </div>
        <div className="purchase-summary-items">
          <h4>Shipment</h4>
          <h5>$ {shipment}</h5>
        </div>
        <div className="testando"></div>
        <div className="purchase-summary-items order-total">
          <h3>Total</h3>
          <h4>$ {total + shipment}</h4>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
};
