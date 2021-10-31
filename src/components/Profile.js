import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";


const Profile = () => {

    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <h1><span><img src={user.picture} alt={user.name} /></span> Welcome {user.name}</h1>
                <p>{user.email}</p>
            </div>
            )
    )
}
 
export default Profile;