import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore'
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();
const jsx = (
	<Provider store= { store } >
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(
	jsx, 
	document.getElementById('root')
);
registerServiceWorker();
