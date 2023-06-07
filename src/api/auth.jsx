// import useAxiosSecure from '../hooks/useAxiosSecure';
//     const [axiosSecur] = useAxiosSecure


export const saveUser = (user) => {

    const currentUser = {
        email: user.email
    }
    // console.log(user.email);

    fetch(`http://localhost:3000/user`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
        .then(data => console.log(data))
}

//     axiosSecur.put(`/user/${user.email}`).then(data => console.log(data.data))