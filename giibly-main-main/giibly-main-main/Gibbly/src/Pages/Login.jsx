import React, { useState } from "react";
import { Form, Input, message, Button } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios"; // Import axios

function Login() {
  const [text, setText] = useState("password");

  const onFinish = async (values) => {
    try {
      if (values.email && values.password) {
        // Send a POST request to the server
        const response = await axios.post(
          "http://localhost:3000/login",
          values
        );

        if (response.data.success) {
          message.success("Login successful");
          // Redirect to home page
          window.location.href = "/home";
        } else {
          message.error(response.data.message || "Login unsuccessful");
        }
      } else {
        message.error(
          "Login unsuccessful: Please enter both email and password"
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("Login unsuccessful: Server error");
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

            <div className="flex justify-center mt-4">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
              >
                Login
              </Button>
            </div>
            <button
              className="mt-2 text-orange-500 hover:text-orange-700"
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
