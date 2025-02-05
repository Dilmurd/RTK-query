import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/store'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <Provider store={store}>
      <Hero/>
    </Provider>
    )
}

export default App
