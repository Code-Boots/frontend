import React, { useState } from "react";
import axios from "axios";

const URL = "https://credito-backend.onrender.com";

const index = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [pan, setPan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = async () => {
    if (fullName === "" || phone === "" || dob === "" || pan === "") {
      alert("Fill all the fields");
      return;
    }
    const dateData = new Date(dob);
    console.log(dateData.toISOString());
    // submit the data to the server
    try {
      const response = await axios.put(
        URL + "/user/info",
        {
          fullName,
          phone,
          dateData,
          pan,
        },
        {
          headers: {
            Authorization: "Bearer " + "hgtsisdfawsfhuawhefma",
          },
        }
      );
      console.log(response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center	justify-center h-screen bg-gray-50">
      {isSubmitted === false ? (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Fill up your details
            </h5>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={fullName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Imon Roy"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your phone no
              </label>
              <input
                type="text"
                value={phone}
                id="phone"
                placeholder="+91 9837467300"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your date-of-birth
              </label>
              <input
                type="date"
                id="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="pan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your PAN no.
              </label>
              <input
                type="text"
                name="pan"
                id="pan"
                placeholder="EZOPR3298Q"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => {
                  setPan(e.target.value);
                }}
              />
            </div>
            <div
              onClick={submitHandler}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Save your details
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl font-medium text-gray-900 p-3">
          Your details have been saved successfully
        </div>
      )}
    </div>
  );
};

export default index;
