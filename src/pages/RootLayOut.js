import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/UI/Header/Header";
import Navbar from "../components/UI/Navbar/Navbar";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const RootLayOut = ()=>{

    const navigation = useNavigation();

    // console.log(navigation);

    return <>
        <Navbar />
        {navigation.state === 'loading' ? <LoadingSpinner /> :  <Outlet />}
    </>
};

export default RootLayOut;