import { Link } from "react-router-dom";
import Classes from "./Item.module.css";

const Item = (props)=>{

    return(
        <li className={Classes['list-item']}>
            <Link to={`${props.companyName}`}>
                <div className={Classes['list-item-div1']}>
                    <p className={Classes['sequence-number']}>{props.sequenceNumber}</p>
                    <p className={Classes['company-name']}>{props.companyName}</p>
                </div>
            </Link>
        </li>
    )
}

export default Item;