import { Helmet } from "react-helmet-async";
import AllArticle from "../allArticle/AllArticle";
import Banner from "../banner/Banner";
import Publishers from "../publishers/Publishers";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechWave - Home</title>
            </Helmet>
            <Banner></Banner>
            <AllArticle></AllArticle>
            <Publishers></Publishers>
        </div>
    );
};

export default Home;
