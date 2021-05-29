import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserCard from "../../components/userCard/userCard";

function UsersPage() {
  return (
    <div style={{padding:30}}>
        <h2>List of users ..</h2>
      <UserCard name="Leonit" lastname="Kuleta" age={21} />
    </div>
  );
}

export default UsersPage;
