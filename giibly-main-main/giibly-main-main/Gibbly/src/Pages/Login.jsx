import { React, useState } from "react";
import { Form, Input, message } from "antd";
import companyLogo from './abc.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Login() {
  let [text, setText] = useState("password")
  const onFinish = (values) => {
    if (values.email && values.password) {
      console.log("Login successful:", values);
      message.success("Login successful");
    } else {
      console.log("Login unsuccessful:", values);
      message.error("Login unsuccessful: Please enter both email and password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-orange-500">
      <div className="card w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-orange-500">
              QUIZ - LOGIN <i className="ri-login-circle-line"></i>
            </h1>
          </div>
          <div className="border-b-2 border-orange-500 my-4"></div>
          <Form layout="vertical" className="mt-4" onFinish={onFinish}>
            <Form.Item name="email" label="Email">
              <Input
                type="text"
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <div style={{display:"flex"}}>
              <Input
                type={text}
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
              <button
                type="button"
                 style={{width:"70px"}}
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                onClick={() => (setText("text"))}
              >
              <VisibilityIcon/>
              </button>
              </div>
            </Form.Item>
            <select
             
              className="w-52 border border-gray-200 shadow-md p-2 rounded"
            >
             <option value="EN" className="text-black">Student</option>
             <option value="IT" className="text-black">Teacher</option>
             
            </select>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                onClick={() => (window.location.href = "/home")}
              >
                Login
              </button>
            </div>
            <button
              onClick={() => {
                window.location.href = "/pages/Register";
              }}
            >
              Not registered?
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;