import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Header from "./Header";
import SubHeader from "./SubHeader";

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });

  return (
    <nav>
      <Header />
      <SubHeader />
      <Breadcrumbs />
    </nav>
  );
};

export default Nav;