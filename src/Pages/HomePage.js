import React from "react";
import Button from "../Componenets/Button";
import BannerComponenet from "../Componenets/BannerComponenet";
import CardHolderComponenet from "../Componenets/CardHolderComponenet";
import ModernBanner from "../Componenets/ModernBanner";
import GallaryComponenet from "../Componenets/GallaryComponenet";
import IconRow from "../Componenets/IconRow";
function HomePage() {
  return (
    <>
      <BannerComponenet />
      <CardHolderComponenet />
      <ModernBanner />
      <GallaryComponenet />
      <IconRow />
    </>
  );
}

export default HomePage;
