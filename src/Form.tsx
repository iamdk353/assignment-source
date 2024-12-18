import React, { useState } from "react";

// Form Component
const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    country: "",
    gender: "",
    subscribe: false,
  });

  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Check if the input is a checkbox, then cast to HTMLInputElement to access `checked`
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData); // Pass data to display component
  };

  return (
    <>
      <form
        className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h3 className="text-lg font-semibold text-gray-800">Contact Form</h3>

        {/* Name */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter your age"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select your country</option>
            <option value="us">United States</option>
            <option value="in">India</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700">Gender</label>
          <div className="flex space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Subscribe to newsletter</span>
          </label>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Render Submitted Data */}
      {submittedData && <DisplayData data={submittedData} />}
    </>
  );
};

// Component to Print Submitted Data
const DisplayData: React.FC<{ data: any }> = ({ data }) => (
  <div className="max-w-lg mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold text-gray-800">Submitted Data</h3>
    <ul className="mt-3 space-y-2">
      <li>
        <strong>Name:</strong> {data.name}
      </li>
      <li>
        <strong>Email:</strong> {data.email}
      </li>
      <li>
        <strong>Password:</strong> {data.password}
      </li>
      <li>
        <strong>Age:</strong> {data.age}
      </li>
      <li>
        <strong>Date of Birth:</strong> {data.dob}
      </li>
      <li>
        <strong>Country:</strong> {data.country}
      </li>
      <li>
        <strong>Gender:</strong> {data.gender}
      </li>
      <li>
        <strong>Subscribe:</strong> {data.subscribe ? "Yes" : "No"}
      </li>
    </ul>
  </div>
);

export default FormComponent;
