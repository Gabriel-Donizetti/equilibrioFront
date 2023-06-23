import { Route, Routes } from "react-router-dom";
import { CompanyLists } from "../components/CompanyLists/CompanyLists";
import { Dashboard } from "../components/Dashboard/Dashboard";
const MainRoutes = () => {
   return(
       <Routes>
           <Route path="/"  element = { <CompanyLists />} />
           <Route path="/dashboard/:id/:nome/" element = { <Dashboard/> } />
       </Routes>
   )
}

export { MainRoutes };