import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import JqueryPage from './pages/jquery/Jquery.jsx';
import Router2 from './routers/router2';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<JqueryPage/>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('reactApp'));