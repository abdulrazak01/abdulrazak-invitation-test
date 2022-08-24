import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./component/Sidebar";
import Dashboard from "./view/Dashboard";
import Users from "./view/Users";

function App() {
  return (
    <BrowserRouter>
     <SideBar>
      <Routes>
      <Route path="/" element={<Dashboard/>}>
        </Route>
        <Route path="/users" element={<Users/>}>
        </Route>
      </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
