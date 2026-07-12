import { RestaurantsList } from './components/RestaurantsList/RestaurantsList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';

export function App() {
    return (
        <div>
            <ScrollProgress />
            <Header />
            <RestaurantsList />
            <Footer />
        </div>
    );
}

export default App;
