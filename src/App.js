import { StackNavigator } from 'react-navigation';
import Home from './Home'
import Movie from './Movie';

const App = StackNavigator({
  Home: {
    screen: Home,
  },
  Movie: {
    screen: Movie,
  },
})

export default App;