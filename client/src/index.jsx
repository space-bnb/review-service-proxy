import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer.jsx';
import Header from './header/Header.jsx';
import Address from './address/Address.jsx';

ReactDOM.render(<Header />, document.getElementById('layout-header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Address />, document.getElementById('layout-header-address'));