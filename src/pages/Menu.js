import React from 'react';
import MenuList from '../helper/MenuList';

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menuItem">
              <div>
                <img src={menuItem.image} />
              </div>
              <h3> {menuItem.name}</h3>
              <h2>{menuItem.price} TL</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
