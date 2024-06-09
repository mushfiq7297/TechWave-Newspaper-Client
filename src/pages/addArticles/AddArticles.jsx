import "animate.css";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

import swal from "sweetalert2"

const AddArticles = () => {

    const handleAddArticle = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const title = form.title.value;
        const publishername = form.publishername.value;
       
        const description = form.description.value;
        const photourl = form.photourl.value;
        
        const tag = form.tag.value;
        
    
        const addArticles = {
          title,
          publishername,
          location,
          description,
          photourl,
          tag
        };
        console.log(addArticles);
    
        // //sending data to the server
        fetch("http://localhost:5000/addArticles", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addArticles),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              swal.fire({
                title: "Success!",
                text: "Tourists spot added successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
             
            }
          });
      };

  return (
    <div>
      <div className="w-4/5 mx-auto py-10 px-4 font-stack">
        <form
          onSubmit={handleAddArticle}
          action=""
          className="container flex flex-col mx-auto space-y-12 "
        >
          <div className="space-y-2  text-center ">
          <div className="divider divider-secondary text-3xl my-4 uppercase">add article</div> 
            
          </div>
          <fieldset className="grname gap-6 p-6 rounded-lg shadow-xl  border-2 border-indigo-900 bg-gray-100 animate__animated animate__slnameeInDown">
            <div className="grname  gap-4 col-span-full lg:col-span-3">
              <div className="flex flex-col  md:flex-row  lg:flex-row justify-around">
                <div className="w-full">
                  <div className="">
                    <label htmlFor="firstname" className="text-lg font-bold">
                      Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      placeholder="Title"
                      className="w-full  text-black rounded-md p-2 focus:ring p-2-opacity-75 t focus:dark:ring-violet-600 dark:border-gray-300  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-lg font-bold">
                      Publisher Name
                    </label>
                    <input
                      name="publishername"
                      type="text"
                      placeholder="Publisher name"
                      className="w-full   text-black rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  
                  <div className="col-span-full">
                    <label htmlFor="address" className="text-lg font-bold">
                      Photo URL
                    </label>
                    <input
                      name="photourl"
                      type="text"
                      placeholder="Photo URL"
                      className="w-full  text-black rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full ">
                    <label htmlFor="city" className="text-lg font-bold">
                     Tag
                    </label>
                    <input
                      name="tag"
                      type="text"
                      placeholder="Tag"
                      className="w-full  text-black rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="w-full flex-1">
                    <label htmlFor="address" className="text-lg font-bold">
                      Description
                    </label>
                    <input
                      name="description"
                      type="text"
                      placeholder="Description"
                      className="w-full  text-black rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </fieldset>
          <input type="submit" value="Add" className="btn btn-secondary"></input>
        </form>
      </div>
    </div>
  );
};

export default AddArticles;
