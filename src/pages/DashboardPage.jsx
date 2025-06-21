import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert("Chiqishda xatolik: " + error.message);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        Xush kelibsiz, bu sizning dashboardingiz 🎯
      </p>
    </div>
  );
};

export default DashboardPage;
