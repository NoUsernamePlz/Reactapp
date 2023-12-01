import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const filteredPosts = response.data.filter((post) => post.userId === 1);
      setPosts(filteredPosts);
    });
  }, []);

  //  number of posts written by user ID 1
  const postsCount = posts.length;

  const data = [
    { name: "User 1", value: postsCount },
    { name: "Others", value: 100 - postsCount },
  ];

  const COLORS = ["#32cd32", "#0000ff"];

  return (
    <div className="w-[100vw] flex items-center justify-center flex-col pb-5">
      <table className="w-[90vw] border border-black bg-gray-300">
        <thead className="border border-black bg-slate-500 text-white">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border border-black p-8">{post.id}</td>
              <td className="border border-black p-8">{post.title}</td>
              <td className="border border-black p-8">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* piechart code starts here */}

      <ResponsiveContainer width="100%" height={500}>
        <h2 className="text-xl font-bold p-8 m-8">Chart:</h2>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Data;
