import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            main
            <Outlet></Outlet>
        </div>
    );
};

export default Main;