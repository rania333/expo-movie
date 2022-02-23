import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/style';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from './components/MovieList';
import SingleMovie from './components/SingleMovie';
import MovieProvider from  './context/Context';
import MovieDetails from './components/MovieDetails';
const Router = createNativeStackNavigator();
export default function App() {
  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
    }
  })
  return (
    <MovieProvider>
      <NativeBaseProvider theme={theme}>
        <StatusBar hidden/>
        <NavigationContainer>
          <Router.Navigator initialRouteName='allMovies'>
            <Router.Screen name='allMovies' component={MovieList} />
            <Router.Screen name='details' component={MovieDetails} />
          </Router.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </MovieProvider>
  );
}
