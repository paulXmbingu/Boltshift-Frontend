import React from "react";
import styles from "./ReviewCard.module.css";
import { Badge_PillColor_SM_LeadIcon_Success } from "../Atoms/Badge";
import CheckIcon from "../../assets/Icons/UI/check.svg";

const ReviewCard = () => {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.buyerDetails}>
                <div className={styles.buyerPhoto}> 
                    <img src={`https://i.pinimg.com/564x/94/93/c4/9493c4f74c3f0994401b18716a974cad.jpg`} alt="" className={styles.buyerAvatar} />
                </div>
                <div className={styles.detailsStack}> 
                    <div className={styles.buyerNameVerification}>
                        <div className={styles.buyerName}> Marion Ngayi </div>
                        <Badge_PillColor_SM_LeadIcon_Success LeadingIcon={CheckIcon} Label={`Verified Buyer`} />
                    </div>
                    <div> 
                        <div className={styles.dateWrap}> 
                            <span className={styles.date}> Nov 26, 2023 </span>
                        </div>
                        <div> Rating </div>
                    </div>
                </div>
            </div>
            <div className={styles.testimonialText}>
                We've tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team's workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.
            </div>
        </div>
    );
};

export default ReviewCard;
