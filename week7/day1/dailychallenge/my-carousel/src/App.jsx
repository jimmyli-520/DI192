import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hongkong from './assets/hongkong.jpg';
import macao from './assets/macao.webp';
import japan from './assets/japan.webp';
import lasvegas from './assets/lasvegas.webp';

function App() {
  return (
    <div>
      <Carousel>
        <div>
          <img src={hongkong} />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src={macao} />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src={japan} />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src={lasvegas} />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;