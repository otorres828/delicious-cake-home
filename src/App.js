import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { GlobalStyle } from './globalStyles';
import {  productCheesecake,productTarta2kg,productDataTwo, productTarta1kg, product3Leches } from './components/Products/data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Ubication from './components/Feature/Ubication';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />

			<div style={{ "background": "#D6ECEC","color": "#fff" }}>
				<br/><br/>
				<Products heading='Cheesecake' data={productCheesecake} />
				<Products heading='Tartas 2kg' data={productTarta2kg} />
				<Products heading='Tartas 1kg' data={productTarta1kg} />
				<Products heading='3 Leches' data={product3Leches} />
				<br/><br/>
			</div>

			<Feature />
			<Ubication />
			<Footer />
		</Router>
	);
}

export default App;
