import "animate.css";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

import swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddArticles = () => {
  const { user } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);

  const handleAddArticle = async (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const publisher = form.publisher.value;
    const description = form.description.value;
    const tag = form.tag.value;
    const email = form.email.value;

    if (!imageFile) {
      alert('Please select an image file');
      return;
    }

    try {
      // Upload the image to ImgBB
      const formData = new FormData();
      formData.append('image', imageFile);

      const imgbbResponse = await axios.post(image_hosting_api, formData);
      const imageUrl = imgbbResponse.data.data.url;

      const addArticles = {
        title,
        publisher,
        description,
        image: imageUrl,
        tag,
        email,
      };

      console.log(addArticles);

      // Sending data to the server
      const response = await fetch("http://localhost:5000/addArticles", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addArticles),
      });

      const data = await response.json();
      console.log(data);

      if (data.insertedId) {
        swal.fire({
          title: "Success!",
          text: "Article added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
        setImageFile(null);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  

  return (
    <div>
       <Helmet>
                <title>TechWave - Add Article</title>
            </Helmet>
      <div className="w-full md:w-4/5 mx-auto py-10 px-4 font-stack">
        <form
          onSubmit={handleAddArticle}
          action=""
          className="container flex flex-col mx-auto space-y-12 "
        >
          <div className="space-y-2  text-center ">
            <div className="divider divider-secondary text-3xl my-4 uppercase">
              add article
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
                      placeholder="Publisher name"
                      className="w-full   text-black rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>

                  <div className="col-span-full">
                  <label htmlFor="imageFile" className="text-lg font-bold">
                      Photo
                    </label>
                    <input
                      name="imageFile"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files[0])}
                      className="w-full text-black rounded-md p-2 focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                      required
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

export default AddArticles;
