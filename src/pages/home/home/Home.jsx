import Banner from '../banner/Banner';
import Other from '../other/Other';
import PopularClasses from '../popularClass/PopularClasses';
import PopularInst from '../popularInst/PopularInst';
import Slider from '../Top slider/Slider';
import { useState } from 'react';
import '../home/darkCss/dark.css'; // Import your CSS file



const Home = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <button className='bg-orange-100' onClick={toggleMode}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <Banner></Banner>
            <div className='my-24 '>
                <h1 className="text-orange-400 text-4xl my-2 -mt-10 text-center">The Multilingual Advantage of Foreign language learning</h1>
                <p className='text-center mb-4'>Learning a foreign language challenges you to step out of your comfort zone and engage with new linguistic and cultural concepts. It fosters personal growth by boosting self-confidence, resilience, and adaptability. Studying a foreign language helps you gain a deeper understanding and appreciation of your native language. You become more aware of grammar rules, vocabulary nuances, and language structure.</p>
                <Slider></Slider>
            </div>
            <PopularClasses></PopularClasses>
            <PopularInst></PopularInst>
            <Other></Other>
        </div>
    );
};

export default Home;