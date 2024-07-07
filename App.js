import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
      <View>
        <Text>Hello World</Text>
      </View>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{headerTitle: 'Restoran Uygulaması'}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='SearchScreen' component={SearchScreen}/>
          <Stack.Screen name='ResultsShowScreen' component={ResultsShowScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
