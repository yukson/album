import { Outlet } from "react-router-dom";
import Heading from "../componets/Heading";

export default () =>{
    return (<div>
        <Heading />        
        <Outlet />
    </div>);
}