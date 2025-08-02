import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/leaderboard`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          🏆 Leaderboard
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Top contributors and their total donations
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white text-lg">
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-right">Donations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="p-3 font-medium text-gray-700">{idx + 1}</td>
                  <td className="p-3 text-gray-600">{item.name}</td>
                  <td className="p-3 text-right font-semibold text-green-600">
                    ₹{item.donations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          *This leaderboard shows dummy data
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;
