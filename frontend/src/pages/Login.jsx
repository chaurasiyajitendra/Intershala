import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login, no auth
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Intern Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          *Dummy login, just click Login
        </p>
      </div>
    </div>
  );
}

export default Login;
