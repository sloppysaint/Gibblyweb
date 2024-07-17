import React, { useState } from "react";
import { Form, Input, message, Select, Button } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios"; // Import axios

function Register() {
  const [text, setText] = useState("password");

  const onFinish = async (values) => {
    try {
      if (values.name && values.email && values.password && values.role) {
        // Send a POST request to the server
        const response = await axios.post(
          "http://localhost:3000/register",
          values
        );

        if (response.data.success) {
          message.success("Registration successful");
          // Redirect to login page
          window.location.href = "/pages/Login";
        } else {
          message.error(response.data.message || "Registration unsuccessful");
        }
      } else {
        message.error("Registration unsuccessful: Please fill in all fields");
      }
    } catch (error) {
      console.error("Registration error:", error);
      message.error("Registration unsuccessful: Server error");
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
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                type="text"
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="email"
                className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <div style={{ display: "flex" }}>
                <Input
                  type={text}
                  className="border-2 border-orange-500 rounded p-2 focus:border-orange-700"
                />
                <button
                  type="button"
                  style={{ width: "70px" }}
                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                  onClick={() =>
                    setText(text === "password" ? "text" : "password")
                  }
                >
                  <VisibilityIcon />
                </button>
              </div>
            </Form.Item>

            <Form.Item
              name="role"
              label="Role"
              rules={[{ required: true, message: "Please select a role!" }]}
            >
              <Select
                className="w-full border border-gray-200 shadow-md p-2 rounded"
                placeholder="Select a role"
              >
                <Select.Option value="Student" className="text-black">
                  Student
                </Select.Option>
                <Select.Option value="Teacher" className="text-black">
                  Teacher
                </Select.Option>
              </Select>
            </Form.Item>

            <div className="flex justify-center mt-4">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
              >
                Register
              </Button>
            </div>
            <button
              className="mt-2 text-orange-500 hover:text-orange-700"
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
