// import useAxiosSecure from '../hooks/useAxiosSecure';
//     const [axiosSecur] = useAxiosSecure


export const saveUser = (user, name, imgURL) => {

    console.log(user);

    const currentUser = {
        email: user.email,
        gName: user.displayName,
        gImg: user.photoURL,
        name: name,
        img: imgURL,
    }

    fetch(`https://fress-server.vercel.app/user`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
        .then(data => console.log(data))
}

//     axiosSecur.put(`/user/${user.email}`).then(data => console.log(data.data))