import React from "react";
import { Form, Input, message } from "antd";

function Register() {
  const onFinish = (values) => {
    if (values.name && values.email && values.password) {
      console.log("Registration successful:", values);
      message.success("Registration successful");
    } else {
      console.log("Registration unsuccessful:", values);
      message.error("Registration unsuccessful: Please fill in all fields");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-orange-500">
      <div className="card w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-orange-500">
              QUIZ - REGISTER <i className="ri-user-add-line"></i>
            </h1>
          </div>
          <div className="border-b-2 border-orange-500 my-4"></div>
          <Form layout="vertical" className="mt-4" onFinish={onFinish}>
            <Form.Item name="name" label="Name">
              <Input
                type="text"
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input
                type="text"
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input
                type="password"
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
            </Form.Item>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                onClick={() => (window.location.href = "/pages/Login")}
              >
                Register
              </button>
            </div>
            <button
              onClick={() => {
                window.location.href = "/pages/Login";
              }}
            >
              Already registered?
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
