import Swal from "sweetalert2";

const AddPublisher = () => {
  const handleAddPublisher = (event) => {
    event.preventDefault();
    const form = event.target;
    const publisher = form.publisher.value;
    const image = form.photourl.value;
    
    const addPublisher ={
      publisher,
      image,
    }
    console.log(addPublisher)


  fetch("http://localhost:5000/publishers", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(addPublisher),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Publisher added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });

  }

  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto py-10 px-4 font-stack">
        <form
          onSubmit={handleAddPublisher}
          action=""
          className="container flex flex-col mx-auto space-y-12 "
        >
          <div className="space-y-2  text-center">
            <div className="divider divider-secondary text-3xl my-4 uppercase">
              add publisher
            </div>
          </div>
          <fieldset className="grname gap-6 p-6 rounded-lg shadow-xl  border-2 border-indigo-900 bg-gray-100 animate__animated animate__slnameeInDown">
            <div className="grname  gap-4 col-span-full lg:col-span-3">
              <div className="flex flex-col  md:flex-row  lg:flex-row justify-around">
                <div className="w-full">
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

export default AddPublisher;
