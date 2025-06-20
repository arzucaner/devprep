import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaJs, 
  FaReact, 
  FaMobile, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt,
  FaPython,
  FaJava
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import InfoRotator from '../components/InfoRotator';
import './Home.css';

const Home = () => {
  const topics = [
    { 
      name: 'JavaScript', 
      icon: <FaJs />, 
      path: '/javascript',
      description: 'Master JavaScript fundamentals and advanced concepts'
    },
    { 
      name: 'React', 
      icon: <FaReact />, 
      path: '/react',
      description: 'Learn React.js and modern frontend development'
    },
    { 
      name: 'React Native', 
      icon: <FaMobile />, 
      path: '/react-native',
      description: 'Build cross-platform mobile apps with React Native'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript />, 
      path: '/typescript',
      description: 'Add type safety to your JavaScript applications'
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs />, 
      path: '/nodejs',
      description: 'Server-side JavaScript and backend development'
    },
    { 
      name: 'Python', 
      icon: <FaPython />, 
      path: '/python',
      description: 'Learn Python programming and backend development'
    },
    { 
      name: 'Java', 
      icon: <FaJava />, 
      path: '/java',
      description: 'Master Java programming and enterprise development'
    },
    { 
      name: 'HTML', 
      icon: <FaHtml5 />, 
      path: '/html',
      description: 'Structure and semantic markup for web pages'
    },
    { 
      name: 'CSS', 
      icon: <FaCss3Alt />, 
      path: '/css',
      description: 'Style and layout your web applications'
    }
  ];

  return (
    <div className="home">
      <h1>Welcome to DevPrep</h1>
      <p className="subtitle">Practice. Learn. Get Hired.</p>
      <InfoRotator />
      <div className="topics-grid">
        {topics.map((topic) => (
          <Link 
            key={topic.path} 
            to={topic.path} 
            className="topic-card"
          >
            <div className="topic-icon">
              {topic.icon}
            </div>
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home; 