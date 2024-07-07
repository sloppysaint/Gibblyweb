import React, { useState } from 'react';

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Elevate Your Teaching with Time-Saving AI Tools!
      </h1>
      <p className="text-center mb-6">
        Save time on lesson prep, boost student engagement, and enhance learning by gamifying your classroom. Reclaim your valuable time with AI-enhanced teaching tools.
      </p>
      <div className="flex justify-center mb-6">
        <span className="mr-2">Monthly</span>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          <span className="slider round"></span>
        </label>
        <span className="ml-2">Yearly</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
        {/* Starter Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center text-orange-500">Starter</h2>
          <p className="text-2xl font-bold text-center">FREE</p>
          <p className="text-center mb-6">$0 / month</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded w-full mb-4">Current Plan</button>
          <ul className="text-left">
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> 10K AI text generation tokens/month</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Host unlimited review games</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Create unlimited quizzes and lessons</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Create unlimited classes</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Unlimited access to Discover content</li>
          </ul>
        </div>
        {/* Premium Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center text-blue-500">Premium</h2>
          <p className="text-2xl font-bold text-center">
            {isYearly ? "$8.99 USD / month" : "$11.99 CAD"}
          </p>
          <p className="text-center mb-6">charged {isYearly ? "yearly" : "monthly"}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4">Upgrade</button>
          <ul className="text-left">
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Everything in Starter</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Unlimited AI text generation tokens/month</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Smarter AI Model</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Translation capabilities</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Future LMS integrations</li>
          </ul>
        </div>
        {/* 20 Premium Licenses Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center text-purple-500">20 Premium Licenses</h2>
          <p className="text-2xl font-bold text-center">
            {isYearly ? "$5.49 USD" : "$7.49 CAD"}
          </p>
          <p className="text-center mb-6">per license, per month, charged {isYearly ? "yearly" : "monthly"}</p>
          <button className="bg-purple-500 text-white py-2 px-4 rounded w-full mb-4">Contact Us</button>
          <ul className="text-left">
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Everything in Premium</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Professional development and training</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Dedicated support and check-ins</li>
            <li className="mb-2"><span role="img" aria-label="check">✔️</span> Customization and branding requests</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
