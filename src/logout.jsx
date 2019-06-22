import auth from "./services/authServices";
const logout = () => {
    auth.removeToken();
    window.location="/";
    return (null);
}
 
export default logout;