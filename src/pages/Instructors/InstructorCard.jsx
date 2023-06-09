
const InstructorCard = ({ item }) => {

    const { img, name, gImg, gName, email } = item
    return (
        <div>
            <div className="card w-96  shadow-xl">
                <figure className="px-10 pt-10">
                    {/* {
                        <img src={img} alt="teacher" className="rounded-xl" /> || 

                    } */}
                    <img src={gImg || img} alt="teacher" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name || gName}</h2>
                    <h3> email: {email}</h3>
                    {/* <h3> Avaliable seats : {seats}</h3>
                    <h3> Price : {price}</h3> */}

                    {/* todo ........ */}
                    <div className="card-actions my-4">
                        <button className="btn btn-primary">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;