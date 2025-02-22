import React, { useState } from "react";
import styles from './ProductMediaConfigurator.module.css';
import { Link } from "react-router-dom";
import { ProductMediaThumbnailMD } from "../ProductMediaThumbnail";
import {
    Btn_Pri_XL,
    Btn_Sec_Color_XL
} from "../../Atoms/Button";
import {
    Badge_PillColor_SM_Error,
    Badge_PillColor_SM_Indigo,
    Badge_PillColor_SM_Orange,
    Badge_PillColor_SM_Warning,
    Badge_PillOutline_LG_LeadingIcon_BrandColor
} from "../../Atoms/Badge";
import { StarRating4 } from "../../Molecules/StarRating";
import { ButtonGroup } from "../../Atoms/ButtonGroup";
import StoreLabel from "../StoreLabel";
import arrowdown from "./Assets/arrow-down.svg";
import shoppingcart03 from "./Assets/shopping-cart-03 Brand.svg";
import minus from "./Assets/minus.svg";
import plus from "./Assets/plus fgSec700.svg";
import RadioInput from "../../Atoms/RadioInput";
import TagCheckboxSM from "../../Atoms/Tag";

const ProductMediaConfigurator = () => {
    const [quantity, setQuantity] = useState(1);
    const [productPrice] = useState(9600);
    const [selectedRadio, setSelectedRadio] = useState('option1');
    const [selectedTag, setSelectedTag] = useState('tag1');
    const [mainProductImage, setMainProductImage] = useState('https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg');

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleSubtract = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    const calculatePrice = () => (productPrice * quantity).toLocaleString();

    const handleThumbnailClick = (Image) => {
        setMainProductImage(Image);
    };

    const productThumbnails = [
        'https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg',
        'https://i.pinimg.com/736x/2b/21/ac/2b21ac39398f6ede03e66c708610835d.jpg',
        'https://i.pinimg.com/736x/a7/cd/c8/a7cdc8f41910734cfdeb5c42258a029c.jpg',
        'https://i.pinimg.com/736x/0d/97/c5/0d97c54c0e0f845a6f5741b6b78598b3.jpg',
        'https://i.pinimg.com/736x/8e/57/c0/8e57c01507456463c55da3dcf21c78d2.jpg',
        'https://i.pinimg.com/736x/b9/a4/1c/b9a41c493e385d96a3a470c3662dd6c8.jpg',
        'https://i.pinimg.com/736x/67/ff/16/67ff16257c0fbb21bde0af00c7524a3c.jpg',
        'https://i.pinimg.com/736x/dc/ce/4a/dcce4aefc6aa896485a4942b7ebcfcdb.jpg'
    ];

    return (
        <div className={styles.ProductMediaConfiguratorWrap}>
            <div className={styles.productMediaBrowser}>
                <div className={styles.mainProductImageWrap}>
                    <img src={mainProductImage} alt="Main Product Image" className={styles.mainProductImage} />
                </div>
                <div className={styles.thumbnailsContainer}>
                    {productThumbnails.map((url, index) => (
                        <ProductMediaThumbnailMD
                            key={index}
                            ThumbNailMedia={url}
                            clickedThumbnail={handleThumbnailClick}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.productDetails}>
                <Badge_PillOutline_LG_LeadingIcon_BrandColor BadgeLabel={`50% Discount`} LeadingIcon={arrowdown} />
                <StoreLabel StoreName={`Senjes Cuisines Store`} />
                <div className={styles.productRatingSummary}>
                    <div className={styles.productName}> Xpluswear Design Plus Size Mother Of The Bride Elegant Champagne Long Sleeve Split Pocket Satin Two Piece Dress Set View </div>
                    <div className={styles.starRatingReviewCounter}>
                        <StarRating4 />
                        <div className={styles.reviewCounter}> (123.46k reviews) </div>
                    </div>
                    <div className={styles.productDescriptionSummary}> Unleash your inner diva with Xpluswear's stunning champagne dress! Crafted for curves, it dazzles with luxe fabric, a flawless fit, and irresistible sparkle. </div>
                </div>
                <div className={styles.productTags}>
                    <Badge_PillColor_SM_Error BadgeLabel={`Popular`} />
                    <Badge_PillColor_SM_Warning BadgeLabel={`Clearance`} />
                    <Badge_PillColor_SM_Indigo BadgeLabel={`Free Shipping`} />
                    <Badge_PillColor_SM_Orange BadgeLabel={`Top Rated`} />
                </div>
                <div className={styles.productOption1}>
                    <div className={styles.opt1Label}>
                        <div className={styles.opt1Text}> Color </div>
                    </div>
                    <div className={styles.opt1Selector}>
                        <RadioInput
                            color="var(--Colors-Background-bg-brand-solid,#DA154D)"
                            checked={selectedRadio === 'option1'}
                            onChange={() => setSelectedRadio('option1')}
                        />
                        <RadioInput
                            color="var(--Component-colors-Utility-Warning-utility-warning-500, #F79009)"
                            checked={selectedRadio === 'option2'}
                            onChange={() => setSelectedRadio('option2')}
                        />
                        <RadioInput
                            color="var(--Component-colors-Utility-Success-utility-success-500, #17B26A)"
                            checked={selectedRadio === 'option3'}
                            onChange={() => setSelectedRadio('option3')}
                        />
                        <RadioInput
                            color="var(--Component-colors-Utility-Blue-light-utility-blue-light-500, #0BA5EC)"
                            checked={selectedRadio === 'option4'}
                            onChange={() => setSelectedRadio('option4')}
                        />
                        <RadioInput
                            color="var(--Component-colors-Utility-Fuchsia-utility-fuchsia-500, #D444F1)"
                            checked={selectedRadio === 'option5'}
                            onChange={() => setSelectedRadio('option5')}
                        />
                    </div>
                </div>
                <div className={styles.productOption2}>
                    <div className={styles.opt2Label}>
                        <div className={styles.opt2Text}> Size </div>
                    </div>
                    <div className={styles.opt2Selector}>
                        <TagCheckboxSM
                            Label={`Extra Small`}
                            checkedTag={selectedTag === 'tag1'}
                            onChange={() => setSelectedTag('tag1')}
                        />
                        <TagCheckboxSM
                            Label={`Small`}
                            checkedTag={selectedTag === 'tag2'}
                            onChange={() => setSelectedTag('tag2')}
                        />
                        <TagCheckboxSM
                            Label={`Medium`}
                            checkedTag={selectedTag === 'tag3'}
                            onChange={() => setSelectedTag('tag3')}
                        />
                        <TagCheckboxSM
                            Label={`Large`}
                            checkedTag={selectedTag === 'tag4'}
                            onChange={() => setSelectedTag('tag4')}
                        />
                        <TagCheckboxSM
                            Label={`Extra Large`}
                            checkedTag={selectedTag === 'tag5'}
                            onChange={() => setSelectedTag('tag5')}
                        />
                        <TagCheckboxSM
                            Label={`Double XL`}
                            checkedTag={selectedTag === 'tag6'}
                            onChange={() => setSelectedTag('tag6')}
                        />
                        <TagCheckboxSM
                            Label={`Tripple XL`}
                            checkedTag={selectedTag === 'tag7'}
                            onChange={() => setSelectedTag('tag7')}
                        />
                    </div>
                </div>
                <div className={styles.price}>
                    <div className={styles.currency}> Ksh. </div>
                    <div className={styles.priceValue}> {calculatePrice()} </div>
                </div>
                <div className={styles.CTAs}>
                    <div className={styles.secondaryCTAs}>
                        <div className={styles.itemButtonGroup}>
                            <ButtonGroup
                                LeadingIcon={minus}
                                handleClick={handleSubtract}
                            />
                            <input
                                type="number"
                                className={styles.countInput}
                                value={quantity}
                                readOnly
                            />
                            <ButtonGroup
                                LeadingIcon={plus}
                                handleClick={handleAdd}
                            />
                        </div>
                        <Btn_Sec_Color_XL LeadingIcon={shoppingcart03} ButtonCTA={`Add to Cart`} />
                    </div>
                    <Link to='/checkout' className={styles.buyNowCTA}> <Btn_Pri_XL ButtonCTA={`Buy Now`} /> </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductMediaConfigurator;
