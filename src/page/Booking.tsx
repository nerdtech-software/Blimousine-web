import { useState } from "react";

const Booking = () => {

    const [selectedCar, setSelectedCar] = useState("");

    const cars = [
      { id: 1, name: "Tesla Model S" },
      { id: 2, name: "Ford Mustang" },
      { id: 3, name: "Chevrolet Camaro" },
      { id: 4, name: "BMW 3 Series" },
      { id: 5, name: "Audi A4" },
    ];
    const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCar(event.target.value);
      };
    
  
  return (
    <div>
      {/* <!-- component --> */}
<div className="flex items-center justify-center p-12">
  {/* <!-- Author: eam --> */}
  {/* <!-- Learn More: https://om --> */}
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST" />
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ff004f] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ff004f] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Number
        </label>
        <input
         type="tel"
          name="Number"
          id="Number"
          placeholder="Enter Your Number"
        
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ff004f] focus:shadow-md"
        />
      </div>



      <div className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <input
          type="Email"
          name="Email"
          id="Email"
          placeholder="Enter Your Email "

          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ff004f] focus:shadow-md"
        />
      </div>


      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
             
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label

              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>




      <div className=" mb-5">
      <label htmlFor="car-select" className="mb-3 block text-base font-medium text-[#07074D]">
        Select Your Car:
      </label>
      <select
        id="car-select"
        value={selectedCar}
        onChange={handleCarChange}
        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ff004f] focus:shadow-md"
      >
        <option value="disabled">
          Choose a car
        </option>
        {cars.map((car) => (
          <option key={car.id} value={car.name}>
            {car.name}
          </option>
        ))}
      </select>
      {selectedCar && (
        <p className="mt-4 text-lg text-[#07074D]">
          You selected: <span className="font-bold   ">{selectedCar}</span>
        </p>
      )}
    </div>


      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
        Term and Condition?
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
           className="pl-3 text-base font-medium text-[#ff004f]"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
             
              className="pl-3 text-base font-medium text-[#ff004f]"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:shadow-ed-md border-Fire  rounded-lg transition-colors duration-500 hover:bg-[#ff004f] py-3 px-8 text-center text-base font-semibold text-black outline-none border "
        >
          Submit
        </button>
      </div>
    <div>
</div>
    </div>
    </div>
    </div>

    
  )
}

export default Booking
