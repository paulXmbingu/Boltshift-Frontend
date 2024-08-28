import React, { useState, useEffect, useCallback } from "react";
import styles from "./LandingPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../../Components/Shared/TopNav";
import HeroSection from "../HeroSection";
import HotDealTodaySection from "../HotDealTodaySection";
import PopularCategoriesSection from "../PopularCategoriesSection";
import VendorStoriesSection from "../VendorStoriesSection";
import FeaturedProductsSection from "../FeaturedProductsSection";
import FeaturedStoreSection from "../FeaturedStoreSection";
import PopularProductsSection from "../PopularProductsSection";
import TrendingProductsSection from "../TrendingProductsSection";
import RecentReviewSection from "../RecentReviewSection";
import Footer from "../../../Components/Shared/Footer";
import SpecialOfferSection from "../SpecialOfferSection";
import ConvenienceStore from "../../../assets/Icons/Illustrated/Convenience store.svg";

const LandingPage = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    const handleResize = useCallback(() => {
        setIsLargeScreen(window.innerWidth > 768);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return (
        <div className={styles.pageLayout}>
            {isLargeScreen ? <TopNavLarge /> : <TopNavSmall />}
            <VendorStoriesSection />
            <HeroSection />
            <PopularCategoriesSection />
            <HotDealTodaySection />
            <FeaturedProductsSection />
            <FeaturedStoreSection HeaderIcon={ConvenienceStore} HeaderTitle="Featured Store" />
            <SpecialOfferSection />
            <PopularProductsSection />
            <TrendingProductsSection />
            <RecentReviewSection />
            <Footer/>
        </div>
    );
};

export default LandingPage;
