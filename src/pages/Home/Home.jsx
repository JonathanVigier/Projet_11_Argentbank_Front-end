import React, { useEffect, useState } from "react";
import NavigationBar from "../../containers/NavigationBar";
import BannerHero from "../../containers/BannerHero";
import Footer from "../../containers/Footer";
import getFeatureData from "../../services/FeatureData";
import Feature from "../../components/Feature";

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
    <div className="body">
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
      <Footer />
    </div>
  );
};

export default Home;
