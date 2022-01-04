// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Saved from './screens/Saved';
import News from './screens/News';


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function AppNavigation() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="NEWS"
          component={News}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Saved"
          component={Saved}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
