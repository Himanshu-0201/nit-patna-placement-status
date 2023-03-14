import { useParams, useRouteLoaderData } from "react-router-dom";
import SelectedStudents from "../components/SelectedStudents/SelectedStudents";

const FullTimeStudentsList = ()=>{

    const companiesList = useRouteLoaderData('full-time-compaines-list');
    const param = useParams();

    
    let company;



    for(let i=0; i<companiesList.length; i++){
        if(companiesList[i].companyName === param.companyName){
            company = companiesList[i]; break;
        }
    }

    const selectedStudents = company.selectedStudents;

    selectedStudents.sort((a,b)=>{
        if(a.name > b.name) return 1;
        else return -1;
    })

    return (
        <SelectedStudents 
            companyName = {company.companyName}
            selectedStudents = {selectedStudents} 
        />
)};

export default FullTimeStudentsList;