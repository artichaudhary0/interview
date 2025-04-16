import { Link } from 'react-router-dom';

function Home() {
  const topics = [
    { name: 'HTML', path: '/html', description: 'Master HTML fundamentals and semantic markup' },
    { name: 'CSS', path: '/css', description: 'Learn advanced CSS and modern layouts' },
    { name: 'JavaScript', path: '/javascript', description: 'Deep dive into JavaScript concepts' },
    { name: 'React', path: '/react', description: 'Understand React patterns and best practices' },
    { name: 'Node.js', path: '/node', description: 'Server-side JavaScript with Node.js' },
    { name: 'Express', path: '/express', description: 'Build robust APIs with Express.js' },
    { name: 'MongoDB', path: '/mongodb', description: 'Work with NoSQL databases' }
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Prepare for Your Tech Interview
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Practice with common interview questions for web development positions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <Link 
            key={topic.name} 
            to={topic.path}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{topic.name}</h2>
            <p className="text-gray-600">
              {topic.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;