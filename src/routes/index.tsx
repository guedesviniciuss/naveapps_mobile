import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Applications from '../pages/Applications';

const Principal = createStackNavigator();

const DashboardRoutes: React.FC = () => (
  <NavigationContainer>
    <Principal.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f7f7f7' },
      }}
      initialRouteName="Dashboard"
    >
      <Principal.Screen name="Dashboard" component={Dashboard} />
      <Principal.Screen name="Applications" component={Applications} />
    </Principal.Navigator>
  </NavigationContainer>
);

export default DashboardRoutes;
