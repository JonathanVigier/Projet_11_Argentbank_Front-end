import React, { useEffect, useState } from "react";
import BannerHero from "../../containers/BannerHero/BannerHero";
import NavigationBar from "../../containers/NavigationBar/NavigationBar";
import getFeatureData from "../../services/FeatureData/featureData";
import Feature from "../../components/Feature/Feature";

const Home = () => {
  const [features, setFeatures] = useState({});

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const featuresData = await getFeatureData();
      setFeatures(featuresData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <main>
        <BannerHero />
        <section className="features">
          {features.length > 0 &&
            features.map((feature, index) => (
              <Feature
                key={index}
                imgSrc={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
        </section>
      </main>
    </>
  );
};

export default Home;
