import { useRouteLoaderData } from "react-router-dom";
import ItemList from "../components/ItemList/itemList";

const FullTime = ()=>{

    const comapinesLoaderList = useRouteLoaderData('full-time-compaines-list');


    return (
        <ItemList
            companiesList = {comapinesLoaderList}
        />
    )};

export default FullTime;

export const loader = async ()=>{
    const response = await fetch('https://nit-patna-placement-data-default-rtdb.firebaseio.com/full-time.json');
    const data = await response.json();

    const loadedData = [];

    for(const key in data){

        loadedData.push({
            id : key,
            companyName : data[key].companyName,
            selectedStudents : data[key].selectedStudents
        })
    }
    
    loadedData.sort((a,b)=>{
        if(a.companyName > b.companyName) return 1;
        else return -1;
    });

    return loadedData;

}