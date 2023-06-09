
import Banner from '../banner/Banner';
import PopularClasses from '../popularClass/PopularClasses';
import PopularInst from '../popularInst/PopularInst';
import Slider from '../Top slider/Slider';


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <div className='my-24 '>
                <Slider></Slider>
            </div>
            <PopularClasses></PopularClasses>
            <PopularInst></PopularInst>

        </div>
    );
};

export default Home;