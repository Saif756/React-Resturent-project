import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from "./Menucard.js";
import Navbar from "./navbar.js";

const uniqueList = [
   ... new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar menuList={menuList} filterItem={filterItem}/>
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Resturant;

