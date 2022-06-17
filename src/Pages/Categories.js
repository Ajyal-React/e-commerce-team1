import React from "react";
import FeaturedCategories from "../Components/CategoriesPage/FeaturedCategories";
import NavTwo from "../Components/NavTwo/NavTwo";

import { MainContainer } from "../Global.Style";

const Categories = () => {
  return (
    <div>
      <MainContainer>
        <NavTwo />
        <FeaturedCategories />
      </MainContainer>
    </div>
  );
};

export default Categories;
