import FaqPart from "./Faq";

const Other = () => {
    return (
        <div className="my-20">
            <h1 className="text-orange-400 text-4xl text-center">Recent  Reviews</h1>
            <div className="md:flex gap-20  md:gap-20 mt-8 mb-16">
                <div className="card w-96 bg-blue-100 text-black">
                    <div className="card-body">
                        <h2 className="card-title">Interactive Spanish Course in Panama City Old Quarter</h2>
                        <p>Hola, My wife and I just had a wonderful time at Casco Antiguo Spanish School. We spent a month and improved our Spanish. The lessons are well structured and interesting. There are also activities....</p>

                    </div>
                </div>
                <div className="card w-96 bg-blue-100 text-black">
                    <div className="card-body">
                        <h2 className="card-title">ITL Learning is this one of the best platform.</h2>
                        <p>In regards to Shanghai. This was THE BEST experience I could have ever imagined having experienced such an ordeal in Singapore. Due to the fear of staying with a host family like the one I had in...</p>

                    </div>
                </div>
                <div className="card w-96 bg-blue-100 text-black">
                    <div className="card-body">
                        <h2 className="card-title">Interactive Spanish Course in Panama City Old Quarter</h2>
                        <p>If you want to improve your Arabic skills with the help of superb teachers, whilst enjoying a very welcoming atmosphere and delicious food, the Excellence Center at Al Khalil/Hebron is your place to...</p>

                    </div>
                </div>
            </div>

            <FaqPart></FaqPart>
        </div>
    );
};

export default Other;