import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const UpdateArticle = () => {
    const {user} = useContext(AuthContext)
  const updateArticle = useLoaderData();
  const { title, publisher, description, image, tag,_id} = updateArticle;
  console.log(updateArticle);

  const handleUpdateArticle = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const publisher = form.publisher.value;
    const description = form.description.value;
    const image = form.photourl.value;
    const email = form.email.value;
    const tag = form.tag.value;

    const UpdateArticle = {
      title,
      publisher,
      description,
      image,
      tag,
      email,
    };
    console.log(UpdateArticle);

    // //sending data to the server
    fetch(`http://localhost:5000/allArticle/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateArticle),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal.fire({
            title: "Success!",
            text: "Tourists Article Updated successfully",
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
          onSubmit={handleUpdateArticle}
          action=""
          className="container flex flex-col mx-auto space-y-12 "
        >
          <div className="space-y-2  text-center ">
            <div className="divider divider-secondary text-3xl my-4 uppercase">
              Update article
            </div>
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
                      defaultValue={title}
                      placeholder="Title"
                      className="w-full  text-black rounded-md p-2 focus:ring p-2-opacity-75 t focus:dark:ring-violet-600 dark:border-gray-300  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-lg font-bold">
                      Publisher Name
                    </label>
                    <input
                      name="publisher"
                      type="text"
                      defaultValue={publisher}
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
                      defaultValue={image}
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
                      defaultValue={tag}
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
                      defaultValue={description}
                      placeholder="Description"
                      className="w-full  text-black rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="city" className="text-lg font-bold">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Email"
                      className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <input
            type="submit"
            value="Add"
            className="btn btn-secondary"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default UpdateArticle;
