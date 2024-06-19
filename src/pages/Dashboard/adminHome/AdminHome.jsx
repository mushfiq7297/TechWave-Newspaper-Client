import { Helmet } from "react-helmet-async";
import PieChart from "../pieChart/PieChart";
import LineChart from "../../lineChart/LineChart";


const AdminHome = () => {
    return (
        <div>
             <Helmet>
                <title>TechWave - Admin/Home</title>
            </Helmet>
            <div className="border-2 border-secondary flex flex-col justify-center">
            <h2 className="font-bold text-center text-2xl my-4">Publication Article Distribution</h2>
            <PieChart></PieChart>
            <h2 className="font-bold text-center text-2xl my-4">Articles View counts</h2>
            <LineChart></LineChart>
            </div>

          
            
        </div>
    );
};

export default AdminHome;