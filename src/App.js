import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Classes from './App.module.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FullTime, {loader as fullTimeLoader} from "./pages/FullTime";
import Internship, {loader as internshipLoader} from "./pages/Internship";
import RootLayOut from "./pages/RootLayOut";
import InternStudentList from './pages/InternStudentsList';
import FullTimeStudentsList from './pages/FullTimeStudentsList';


const router = createBrowserRouter([
    {
        path : "/nit-patna-placement-status",
        element : <RootLayOut />,
        children : [
            {
                path : "",
                id : 'full-time-compaines-list',
                loader :  fullTimeLoader,
                children : [
                    {
                        path : "",
                        element : <FullTime />
                    },
                    {
                        path : ":companyName",
                        element : <FullTimeStudentsList />
                    }
                ]
            },
            {
                path : "internship",
                id : "internship-comapines-list",
                loader : internshipLoader,
                children : [
                    {
                        path : "",
                        element : <Internship />
                    },
                    {
                        path : ":companyName", // can't put "-", if you start name with ":"
                        element : <InternStudentList />
                    }
                ]
            }
        ]
    }
]);



const App = ()=>{
    return <RouterProvider  router={router}/>
}

export default App;


