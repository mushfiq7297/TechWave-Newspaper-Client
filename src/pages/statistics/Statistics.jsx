import { HiMiniUserGroup, HiMiniUsers } from "react-icons/hi2";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { MdWorkspacePremium } from "react-icons/md";
import useNews from "../../hooks/useNews";

const Statistics = () => {
    const [news] = useNews();
  return (
    <div>
      <SectionTitle heading="Statistics"></SectionTitle>
      <div className="flex justify-center w-full ">
        <div className="stat text-center">
          <div className="mx-auto"><HiMiniUserGroup className="w-16 h-16"/></div>
          <div className="stat-value">31K</div>
          <div className="stat-title">All Users</div>
        </div>

        <div className="stat text-center">
        <div className="mx-auto"><HiMiniUsers className="w-16 h-16"/></div>
          <div className="stat-value">4,200</div>
          <div className="stat-title">Normal Users</div>
        </div>

        <div className="stat text-center">
        <div className="mx-auto"><MdWorkspacePremium className="w-16 h-16"/></div>
          <div className="stat-value">1,200</div>
          <div className="stat-title">Premium Users</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
