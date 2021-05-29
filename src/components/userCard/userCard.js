import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';

function UserCard({name, lastname, age}) {
  return (
       <div className='userCard'>
           <p>{name} {lastname} - {age} years</p>
        </div>
  );
}

export default UserCard;
