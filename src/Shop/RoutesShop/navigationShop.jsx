import { Route, Routes } from "react-router-dom";
import { SHOP_ROUTES } from "../../constans/Routes";
import ShopContextProvider from "../Context/contextShop";
import Shop from "../Shop";
import { NavShop } from "./navShop";

export function NavigationShop() {
  return (
    <nav>
      <ShopContextProvider>
        <NavShop />
        <Routes>
          <Route path={SHOP_ROUTES} element={<Shop />} />
        </Routes>
      </ShopContextProvider>
    </nav>
  );
}
