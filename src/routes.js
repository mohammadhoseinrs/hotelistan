import DataTable from "./components/dataTable/DataTable";
import FirstPage from "./components/firstPage/FirstPage";
import SecondPage from "./components/secondPage/SecondPage";

let routes=[
    {path:'/',element:<FirstPage />},
    {path:'/secondpage',element:<SecondPage />},
    {path:'/datatable',element:<DataTable />},

]

export default routes