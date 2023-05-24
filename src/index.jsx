import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/styles/global.css'
import Home from './components/screens/home/Home'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>
)
