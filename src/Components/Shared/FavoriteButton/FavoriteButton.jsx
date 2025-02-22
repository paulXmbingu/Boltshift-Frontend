import React, { useState } from "react";
import styles from "./FavoriteButton.module.css";
import WishilistIcon from "./Assets/heart-rounded.svg";
import WishilistIconFilled from "./Assets/heart-rounded-filled.svg";

function FavoriteButton() {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        setIsFilled(!isFilled);
    };

    return (
        <div className={styles.favStyling} onClick={handleClick}>
            <div className={styles.featuredIcon}>
                <img
                    src={isFilled ? WishilistIconFilled : WishilistIcon}
                    alt="Wishlist Icon"
                    className={styles.wishilistIcon}
                />
            </div>
        </div>
    );
}

export default FavoriteButton;
