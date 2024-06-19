import { Helmet } from "react-helmet-async";
import AllArticle from "../allArticle/AllArticle";
import Banner from "../banner/Banner";
import Publishers from "../publishers/Publishers";
import Statistics from "../statistics/Statistics";
import Plans from "../plans/Plans";
import Modal from "../../components/Modal";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechWave - Home</title>
            </Helmet>
            <Modal></Modal>
            <Banner></Banner>
            <AllArticle></AllArticle>
            <Publishers></Publishers>
            <Statistics></Statistics>
            <Plans></Plans>
        </div>
    );
};

export default Home;
