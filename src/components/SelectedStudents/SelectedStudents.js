
import Classes from "./SelectedStudents.module.css";

const SelectedStudents = (props)=>{

    const selectedStudentsTable = props.selectedStudents.map((selectedStudent,index) => {

      const arr = selectedStudent.name.toLowerCase().split(' ');

      for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      const studentName = arr.join(' ');

        return (
        <tr key = {index}>
            <td className={Classes['first-child']}>{++index}</td>
            <td>{studentName}</td>
            <td>{selectedStudent.rollNumber}</td>
        </tr>)

    })

    return  (

    <div>
      <div className={Classes['company-detail']}>
          <p>Company : {props.companyName}</p>
      </div>

      <div className={Classes['table-box']}>
        <table className={Classes.Table}>
          <thead>
            <tr>
              <th className={Classes['sequence-number']}>S.N</th>
              <th>Name</th>
              <th>Roll Number</th>
            </tr>
          </thead>
          <tbody>
            {selectedStudentsTable}
          </tbody>
        </table>
    </div>
  </div>


  )}

export default SelectedStudents;


