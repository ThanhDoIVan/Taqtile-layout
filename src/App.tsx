import Button from './components/Button';
import Features from './components/Features';
import Footer from './components/Footer';
import Offer from './components/Offer';
import Subscription from './components/Subscription';
import { Xmark } from './components/Xmark';
import { useAppSelector } from './store/store';
import featuresPackages from './data/package-features.json';
import offersPackages from './data/package-offers.json';

function App() {
  const page = useAppSelector(state => state.page.value);

  const main = page === 'offer' ? <Features /> : <Offer />;
  const packages = page === 'offer' ? featuresPackages : offersPackages;

  return (
    <div className='container'>
      <div style={{ maxWidth: 430, margin: '0 auto' }}>
        <Xmark />
        {main}
        <Subscription packages={packages} />
        <Button />
        <Footer />
      </div>
    </div>
  );
}

export default App;
