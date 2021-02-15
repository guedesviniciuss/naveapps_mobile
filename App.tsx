import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Routes from './src/routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#ccd2e4" />
    <View style={{ backgroundColor: '#ccd2e4', flex: 1 }}>
      <Routes />
    </View>
  </>
);

export default App;
