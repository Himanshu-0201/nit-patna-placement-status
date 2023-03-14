import { useRouteLoaderData } from "react-router-dom";
import ItemList from "../components/ItemList/itemList";


const Internship = ()=>{

    const comapinesLoaderList = useRouteLoaderData('internship-comapines-list');

    return (
        <ItemList 
            companiesList = {comapinesLoaderList}
        />
        
)};

export default Internship;

export const loader = async()=>{
    const response = await fetch('https://nit-patna-placement-data-default-rtdb.firebaseio.com/intern.json');
    const data = await response.json();

    const loadedData = [];

    for(const key in data){
        loadedData.push({
            id : key,
            identifier : "internship",
            companyName : data[key].companyName,
            selectedStudents : data[key].selectedStudents
        });
    }

    loadedData.sort((a,b)=>{
        if(a.companyName > b.companyName) return 1;
        else return -1;
    });

    return loadedData;
}