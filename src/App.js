import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Ubication from './components/Feature/Ubication';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<Products heading='Cheesecake' data={productDataTwo} />
			<Feature />
			<Products heading='Menu' data={productData} />
			<Ubication />
			<Footer />
		</Router>
	);
}

export default App;
