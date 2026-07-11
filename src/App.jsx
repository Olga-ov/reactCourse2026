import { RestaurantsList } from './components/RestaurantsList/RestaurantsList';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

export function App() {
    return (
        <div>
            <Header />
            <RestaurantsList />
            <Footer />
        </div>
    );
}

export default App;
