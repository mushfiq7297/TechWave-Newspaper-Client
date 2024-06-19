import { GrDocumentUpdate } from "react-icons/gr";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const ArticleRow = ({ article, handleDelete,index }) => {
  const { _id, title, status, declineReason,isPremium } = article;

  return (
    <div>
      <tr className="hover flex justify-between ">
        <td className="flex justify-center items-center  w-1/5">{index+1}</td>
        <td className="flex justify-center items-center  w-1/5">{title}</td>
        <td className="flex justify-center items-center  w-1/5">
       <Link to={`/articleDetails/${_id}`}>
          <button className="btn  btn-square btn-outline"><TbDetails className="w-5 h-5" /></button>
          </Link>
          
        </td>
        <td className="flex justify-center items-center w-1/5">
          {/* <Link to={`/updatePage/${_id}`}>
            <button className="btn btn-info">Update</button>
          </Link> */}
           <Link to={`/updateArticle/${_id}`}>
          <button className="btn  btn-square btn-outline"><GrDocumentUpdate className="w-5 h-5"/></button>
          </Link>
        </td>
        <td className="flex justify-center items-center w-1/5">
          
          <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td className="flex justify-center items-center w-1/5">{
          status === "approved" &&
            <span className="text-green-500">Approved</span>
        }
          { status === "declined" &&  

              <>
                
                <button
                  onClick={() => alert(`Reason: ${declineReason}`)}
                  className={`btn btn-rose-200 rounded-none text-red-500`}
                >
                  Declined
                </button>
              </>
}
          {!status && <span className="text-blue-500">Pending</span>
        }
        
        </td>
        <td className="flex justify-center items-center w-1/5">{isPremium}</td>
      </tr>
    </div>
  );
};

export default ArticleRow;
