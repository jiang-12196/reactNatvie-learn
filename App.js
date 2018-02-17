import { StackNavigator } from 'react-navigation';
import Movie from './Movie';
import Home from './Home'

const App = StackNavigator({
  Home: {
    screen: Home,
  },
  Movie: {
    screen: Movie,
  },
})

export default App;