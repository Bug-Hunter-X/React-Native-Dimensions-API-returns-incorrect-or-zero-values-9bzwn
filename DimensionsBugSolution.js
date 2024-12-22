import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenDimensions({ width: window.width, height: window.height });
    });
    // Get initial dimensions
    setScreenDimensions({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;