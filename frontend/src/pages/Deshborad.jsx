import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/api/user`).then((res) => {
      setUser(res.data);
    });
  }, []);

  if (!user) return <p className="text-center mt-20 text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Welcome, {user.name} 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Your personalized fundraising dashboard
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm text-center">
            <p className="text-sm text-gray-500">Referral Code</p>
            <p className="text-xl font-semibold text-blue-600">{user.referralCode}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl shadow-sm text-center">
            <p className="text-sm text-gray-500">Total Donations</p>
            <p className="text-xl font-semibold text-green-600">₹{user.donationsRaised}</p>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            🎁 Rewards / Unlockables
          </h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm flex justify-between">
              <span>🥉 Bronze Badge</span> <span>1000₹</span>
            </li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm flex justify-between">
              <span>🥈 Silver Badge</span> <span>2000₹</span>
            </li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm flex justify-between">
              <span>🥇 Gold Badge</span> <span>5000₹</span>
            </li>
          </ul>
        </div>

        {/* Leaderboard Button */}
        <div className="text-center">
          <Link
            to="/leaderboard"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
