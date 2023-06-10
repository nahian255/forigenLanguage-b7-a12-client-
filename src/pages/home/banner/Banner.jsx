import { Link } from "react-router-dom";
import background from "../../../assets/img.jpg";


const Banner = () => {
    return (
        <div className="h-[700px]">
            <div className="hero min-h-screen"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-orange-400 text-5xl font-bold">WorldSpeak Language Safari</h1>
                        <p className="mb-5">Foreign language learning is an enriching and transformative experience with numerous benefits. One of the key advantages is the cognitive boost it provides. When learning a foreign language....</p>
                        <Link to='/classes'> <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;