import React from 'react';

import HomePageTheme from "../../components/HonePageTheme/HomePageTheme";
import CarouselImageSlider from "../../components/CarouselImageSlider/CarouselımageSlider";
import SliderBrands from "../../components/SliderBrands/SliderBrands";
import SliderCards from "../../components/PerfumeCardsSlider/PerfumeCardsSlider";

const Home = () => {
    return (
        <div>
            <CarouselImageSlider/>
            <SliderBrands/>
            <HomePageTheme/>
            <SliderCards/>
        </div>
    );
}

export default Home;