import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Interview Prep
          </Link>
          <div className="flex space-x-4">
            <Link to="/html" className="text-gray-600 hover:text-gray-900">HTML</Link>
            <Link to="/css" className="text-gray-600 hover:text-gray-900">CSS</Link>
            <Link to="/javascript" className="text-gray-600 hover:text-gray-900">JavaScript</Link>
            <Link to="/react" className="text-gray-600 hover:text-gray-900">React</Link>
            <Link to="/node" className="text-gray-600 hover:text-gray-900">Node.js</Link>
            <Link to="/express" className="text-gray-600 hover:text-gray-900">Express</Link>
            <Link to="/mongodb" className="text-gray-600 hover:text-gray-900">MongoDB</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;