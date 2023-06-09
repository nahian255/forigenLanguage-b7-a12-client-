
import Banner from '../banner/Banner';
import PopularInst from '../popularInst/PopularInst';
import Slider from '../Top slider/Slider';


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <div className='my-24 '>
                <Slider></Slider>
            </div>
            <PopularInst></PopularInst>

        </div>
    );
};

export default Home;