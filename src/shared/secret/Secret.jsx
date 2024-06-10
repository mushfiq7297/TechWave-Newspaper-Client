import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ArticleRow from "./ArticleRow";
import Swal from 'sweetalert2'
const Secret = () => {
  const { user } = useContext(AuthContext);
  const [articles, setArticles] = useState([]);
  const url = `http://localhost:5000/myArticles?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [url]);




  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myArticles/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your article has been deleted.", "success");
              const remaining = articles.filter((article) => (article._id !== _id));
              setArticles(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full min-h-screen">
          <table className="table w-full">
            {/* head */}
            <tbody>
              <tr className="flex justify-between  text-base font-bold">
                <td className="flex justify-center items-center  w-1/5 ">
                  Title
                </td>
                <td className="flex justify-center items-center w-1/5">
                  Details
                </td>
                <td className="flex justify-center items-center w-1/5">
                  Update
                </td>
                <td className="flex justify-center items-center w-1/5">
                  Delete
                </td>
                <td className="flex justify-center items-center  w-1/5">
                  Status
                </td>
                
              </tr>
            </tbody>
            <tbody>
              {articles.map((article) => (
                <ArticleRow
                  key={article._id}
                  article={article}
                 handleDelete={handleDelete}
                  //   handlearticleConfirm={handlearticleConfirm}
                ></ArticleRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Secret;
