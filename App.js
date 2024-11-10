
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen02 from './components/Screen02';
import Screen01 from './components/Screen01';
import Screen03 from './components/Screen03';
import Screen04 from './components/Screen04'
import { Provider  } from 'react-redux'
import store from './config/store'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01} />
        <Stack.Screen name='Screen02' component={Screen02} />
        <Stack.Screen name='Screen03' component={Screen03} />
        <Stack.Screen name='Screen04' component={Screen04} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

