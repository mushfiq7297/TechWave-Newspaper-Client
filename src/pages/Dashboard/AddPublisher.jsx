import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublisher = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleAddPublisher = async (event) => {
    event.preventDefault();
    const form = event.target;
    const publisher = form.publisher.value;

    if (!imageFile) {
      alert("Please select an image file");
      return;
    }

    try {
      // Upload the image to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbResponse = await axios.post(image_hosting_api, formData);
      const imageUrl = imgbbResponse.data.data.url;

      const addPublisher = {
        publisher,
        image: imageUrl,
      };

      console.log(addPublisher);

      // Sending data to the server
      const response = await fetch("http://localhost:5000/publishers", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addPublisher),
      });

      const data = await response.json();
      console.log(data);

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Publisher added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
        setImageFile(null);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>TechWave - Admin/Add-Publisher</title>
      </Helmet>
      <div className="w-full md:w-1/2 mx-auto py-10 px-4 font-stack">
        <form
          onSubmit={handleAddPublisher}
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="space-y-2 text-center">
            <div className="divider divider-secondary text-3xl my-4 uppercase">
              add publisher
            </div>
          </div>
          <fieldset className="grname gap-6 p-6 rounded-lg shadow-xl border-2 border-indigo-900 bg-gray-100 animate__animated animate__slnameeInDown">
            <div className="grname gap-4 col-span-full lg:col-span-3">
              <div className="flex flex-col md:flex-row lg:flex-row justify-around">
                <div className="w-full">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="publisher" className="text-lg font-bold">
                      Publisher Name
                    </label>
                    <input
                      name="publisher"
                      type="text"
                      placeholder="Publisher name"
                      className="w-full text-black rounded-md p-2 focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                      required
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
                </div>
              </div>
            </div>
          </fieldset>
          <input type="submit" value="Add" className="btn btn-secondary" />
        </form>
      </div>
    </div>
  );
};

export default AddPublisher;
