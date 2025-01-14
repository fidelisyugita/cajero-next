import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Monday", sales: 150 },
  { name: "Tuesday", sales: 200 },
  { name: "Wednesday", sales: 250 },
  { name: "Thursday", sales: 300 },
  { name: "Friday", sales: 400 },
  { name: "Saturday", sales: 500 },
  { name: "Sunday", sales: 350 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Weekly Sales</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={salesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
