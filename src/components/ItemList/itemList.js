import Classes from './itemList.module.css';
import Item from '../Item/Item';
// import {useRouteLoaderData} from 'react-router-dom';

  
  const ItemList = (props)=>{

    // const companiesList = useRouteLoaderData('companies-list');

    const companiesList = props.companiesList;
    
    const  items = companiesList.map( (company, index) => {
      return (
        <Item 
          key={company.id}
          sequenceNumber = {++index}
          companyName = {company.companyName}
          selectedStudents = {company.selectedStudents}
        />
      )
    });
   
    return (
      <ul className={Classes.list}>
        {items}
      </ul>
    )

  };

  export default ItemList;

























// import Classes from './itemList.module.css';
// import Item from '../Item/Item';
// import {useRouteLoaderData} from 'react-router-dom';

  
//   const ItemList = ()=>{

//     const companiesList = useRouteLoaderData('companies-list');
  
//     const  items = companiesList.map( (company, index) => {
//       return (
//         <Item 
//           key={company.id}
//           sequenceNumber = {++index}
//           companyName = {company.companyName}
//           selectedStudents = {company.selectedStudents}
//         />
//       )
//     });
   
//     return (
//       <ul className={Classes.list}>
//         {items}
//       </ul>
//     )

//   };


export const loader = async ()=>{

  const response = await fetch('https://nit-patna-placement-data-default-rtdb.firebaseio.com/companies.json');
  const data = await response.json();

  const loadedCompainesList = [];

  for(const key in data){

    loadedCompainesList.push({
      id : key,
      companyName : data[key].companyName,
      selectedStudents : data[key].selectedStudents
    });
  }

  return loadedCompainesList;

} 
  
// export default ItemList;


