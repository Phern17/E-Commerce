import React from "react";
import Navbar from "../style-components/Navbar";
import Announcement from "../style-components/Announcement";
import Carousel from "../style-components/Carousel";
import Categories from "../style-components/Categories";
import { CategoriesData } from "../data";
import ProductList from "../style-components/ProductList";
import Newsletter from "../style-components/Newsletter";
import Footer from "../style-components/Footer";

function HomeScreen() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories categories={CategoriesData} />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
}


export default HomeScreen;
