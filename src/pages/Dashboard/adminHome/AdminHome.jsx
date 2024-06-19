import { Helmet } from "react-helmet-async";


const AdminHome = () => {
    return (
        <div>
             <Helmet>
                <title>TechWave - Admin/Home</title>
            </Helmet>
            <h2 className="text-6xl">i am admin</h2>
            
        </div>
    );
};

export default AdminHome;