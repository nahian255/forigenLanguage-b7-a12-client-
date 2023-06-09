import Banner from '../banner/Banner';
import Other from '../other/Other';
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
            <Other></Other>
        </div>
    );
};

export default Home;