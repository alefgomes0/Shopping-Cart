import { ShopNav } from "./ShopNav/ShopNav";
import { ShopBooks } from "./ShopBooks/ShopBooks";

type ShopContentProps = {
  children: React.ComponentType
}

export const ShopContent = () => {
  return (
    <div className="shop-content">
      <ShopNav />
      <ShopBooks />
    </div>
  );
};
