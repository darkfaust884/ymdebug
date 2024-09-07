import React, { useState, useEffect } from "react";
import cl from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const router = useLocation();


  return (
    <div style={{ background: "#fff", position: "sticky", top: 0 }}>

      <div className={cl.navbar}>
        <div className="navbarContainer">
          <div className={cl.navbarBrand}>
            <Link to="" className={cl.navbarBrandItem}>
              <h1>Preks Studio</h1>
            </Link>
          </div>
          <div className={cl.navbarContacts}>
            <ul className={cl.navbarContactsList}>
              <li className={cl.navbarContactsListItem}>
                <span className="icon-envelope"></span>
                <a
                  className={cl.navbarInfo}
                  href="mailto:preksstudiocoop@memele.com"
                >
                  preksstudiocoop@memele.com
                </a>
              </li>
              <li className={cl.navbarContactsListItem}>
                <span className="icon-phone" style={{ marginLeft: 10 }}></span>
                <a className={cl.navbarInfo} href="tel:89008558585">
                  +7 (900) 855-85-85
                </a>
              </li>
            </ul>
          </div>
          <div className={cl.navbarMenu}>
            <ul className={cl.navbarMenuList}>
              <li className={cl.navbarMenuListItem}>
                <NavLink to="/" className={(active) => (active.isActive ? `${cl.navbarMenuListItemLink} ${cl.active}` : `${cl.navbarMenuListItemLink}`)}>
                  Главная
                </NavLink>
              </li>
              <li className={`${cl.navbarMenuListItem} ${cl.hasChildrenCatalog}`}>
                <span  className={
                    router.pathname === "/microdata" ||
                    router.pathname === "/jsonld" ||
                    router.pathname === "/opengraph"
                      ? `${cl.navbarMenuListItemLink} ${cl.active}`
                      : `${cl.navbarMenuListItemLink}`
                  }>
                  Контент
                  <i
                    className="fas fa-chevron-down"
                    style={{
                      marginLeft: "5px",
                      position: "relative",
                      right: 0,
                      top: 2,
                    }}
                    aria-hidden="true"
                  ></i>
                </span>
                <ul className={cl.dropdownCatalog}>
                  <li  className={`${cl.dropdownCatalogItem} ${cl.dropdown_item1}`}>
                    <Link to="/microdata" className={cl.dropdownCatalogItemLink}>
                      Microdata
                    </Link>
                  </li>
                  <li  className={`${cl.dropdownCatalogItem} ${cl.dropdown_item2}`}>
                    <Link to="/jsonld" className={cl.dropdownCatalogItemLink}>
                      JSON-LD
                    </Link>
                  </li>
                  <li  className={`${cl.dropdownCatalogItem} ${cl.dropdown_item2}`}>
                    <Link to="/opengraph" className={cl.dropdownCatalogItemLink}>
                      Opengraph
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
