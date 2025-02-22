import React, { useState, useEffect, useRef } from "react";
import styles from './TopNav.module.css';
import { Link } from "react-router-dom";
import UserAvatar from "../../Atoms/UserAvatar";
import NotificationIcon from "../../Molecules/NotificationIcon";
import MenuIcon from "./Assets/menu-03.svg";
import Favorite from './Assets/heart.svg';
import Cart from './Assets/shopping-cart-03.svg';
import Bell from './Assets/bell-02.svg';
import Filter from "./Assets/filter-lines.svg"
import SearchInput from "../../Atoms/SearchInput";
import { NavBarDropDownMenu, NavBarDropDownMenuMobileLoggedIn } from "../../Molecules/NavBarDropDownMenu";
import { BrandLogoHor } from "../../Atoms/BrandLogo";
import { Btn_Icon_Only_Sec_LG } from "../../Atoms/Button";

const TopNavLarge = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const handleAvatarClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.desktopNav}>
      <div className={styles.menu}>
        <img src={MenuIcon} alt="Menu Icon" className={styles.desktopMenuIcon} />
      </div>
      <Link to='/' > <BrandLogoHor className={styles.logo} /> </Link>
      <div className={styles.searchFilter}>
      {/* <Btn_Icon_Only_Sec_LG Icon={Filter} /> */}
        <SearchInput />
      </div>
      <div className={styles.notifications}>
        <Link to={`/wishlist`} > <NotificationIcon icon={Favorite} className={styles.notificationsDesktopIcon} /> </Link> 
        <Link to={`/cart`}> <NotificationIcon icon={Cart} /> </Link>
        <NotificationIcon icon={Bell} />
        <div className={styles.notificationAvatar} onClick={handleAvatarClick} ref={dropdownRef}>
          <UserAvatar userPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png`} />
          {showDropDown && <NavBarDropDownMenu className={styles.navBarDropDownMenu} />}
        </div>
      </div>
    </div>
  );
};

const TopNavSmall = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const handleAvatarClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mobileNav}>
      <div className={styles.topNavMobile}>
        <div className={styles.menuLogoMobile}>
          <img src={MenuIcon} alt="Menu Icon" className={styles.menuIconMobile} />
          <Link to='/' > <BrandLogoHor className={styles.brandLogoMobile} /> </Link>
        </div>
        <div className={styles.notificationsMobile}>
          <Link to={`/wishlist`}> <NotificationIcon icon={Favorite} className={styles.notificationsMobileIcon} /> </Link>
          <Link to={`/cart`}> <NotificationIcon icon={Cart} className={styles.notificationsMobileIcon} /> </Link>
          <NotificationIcon icon={Bell} className={styles.notificationsMobileIcon} />
          <div className={styles.notificationAvatar} onClick={handleAvatarClick} ref={dropdownRef}>
            <UserAvatar userPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png`} />
            {showDropDown && (
              <NavBarDropDownMenuMobileLoggedIn className={`${styles.navBarDropDownMenuMobileLoggedIn} ${styles.show}`} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.serchFilterMobile}>
        <Btn_Icon_Only_Sec_LG Icon={Filter} />
        <SearchInput />
      </div>
    </div>
  );
};

export { TopNavLarge, TopNavSmall };
