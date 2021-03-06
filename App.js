import React from 'react';
import MapView from 'react-native-maps'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}
        region={{
          latitude: 37.785834,
          longitude: -122.406417,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
      >

      </MapView>

    </View>
  );
};

export default App;
