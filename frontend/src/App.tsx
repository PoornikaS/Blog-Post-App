import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './pages/Dashboard';
import PostList from './pages/posts/PostList';
import CreatePost from './pages/posts/CreatePost';
import EditPost from './pages/posts/EditPost';
import PostDetail from './pages/posts/PostDetail';
import UserSettings from './pages/settings/UserSettings';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
          <Navbar />
          <Routes>
            {/* Root page with a more beautiful design */}
            <Route path="/" element={
              <div className="flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-center"
                style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?nature,water")' }}>
                <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-xl">
                  <h1 className="text-5xl font-extrabold text-center mb-4 animate_animated animate_fadeIn">
                    Welcome to BlogPlatform
                  </h1>
                  <p className="text-xl mb-8 animate_animated animatefadeIn animate_delay-1s">
                    Share your thoughts, ideas, and creativity with the world. Join us today!
                  </p>
                  <div className="flex space-x-4">
                    <Link to="/login">
                      <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            } />

            {/* Other routes */}
            <Route path="/login" element={
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <LoginForm />
              </div>
            } />
            <Route path="/register" element={
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <RegisterForm />
              </div>
            } />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/posts" element={<ProtectedRoute><PostList /></ProtectedRoute>} />
            <Route path="/dashboard/posts/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
            <Route path="/dashboard/posts/:id/edit" element={<ProtectedRoute><EditPost /></ProtectedRoute>} />
            <Route path="/dashboard/posts/:id" element={<ProtectedRoute><PostDetail /></ProtectedRoute>} />
            <Route path="/dashboard/settings" element={<ProtectedRoute><UserSettings /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
