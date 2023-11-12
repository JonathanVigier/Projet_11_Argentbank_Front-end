const getFeatureData = async () => {
  try {
    const response = await fetch("features.json");

    if (response.ok) {
      const data = await response.json();
      const features = data.features;
      return features;
    }
  } catch (err) {
    console.error(err);
  }
};

export default getFeatureData;
