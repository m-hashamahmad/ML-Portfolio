import React, { useState, useEffect, useCallback } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Terminal, 
  ChevronDown, 
  Moon, 
  Sun,
  Cpu,
  Layers,
  BarChart,
  FileText,
  Download,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "R", "C++", "JavaScript"] },
    { category: "ML/DL Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "Fastai"] },
    { category: "Data Engineering", items: ["Pandas", "NumPy", "Apache Spark", "Airflow", "Docker"] },
    { category: "Visualization", items: ["Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"] }
  ];

  const projects = [
    {
      title: "Heart Disease Prediction",
      category: "Tabular Data",
      description: "Implemented a robust predictive model using Logistic Regression and Random Forest algorithms for early diagnosis of heart diseases, achieving an 85% accuracy rate.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
      icon: <Layers size={40} className="text-blue-500" />
    },
    {
      title: "Plant Disease Detection",
      category: "Computer Vision",
      description: "Developed an image processing pipeline for identifying plant diseases. Integrated advanced image preprocessing techniques and created interactive visualizations using Power BI.",
      tech: ["TensorFlow", "OpenCV", "Power BI", "Python"],
      icon: <BarChart size={40} className="text-green-500" />
    },
    {
      title: "Academic Performance Analysis",
      category: "Data Analysis",
      description: "Leveraged Python and Pandas to uncover key insights and trends in academic results, enabling data-driven decision-making for educational institutions.",
      tech: ["Pandas", "NumPy", "Seaborn", "Python"],
      icon: <Database size={40} className="text-cyan-500" />
    },
    {
      title: "Medical Image Segmentation",
      category: "Computer Vision",
      description: "U-Net architecture for semantic segmentation of MRI scans to identify tumor regions. Achieved a DICE coefficient of 0.92 on the test set.",
      tech: ["TensorFlow", "Keras", "NumPy"],
      icon: <Brain size={40} className="text-pink-500" />
    },
    {
      title: "Chatbot Assistant",
      category: "NLP",
      description: "RAG (Retrieval-Augmented Generation) based chatbot that allows users to query their own PDF documents. Built with LangChain and OpenAI API.",
      tech: ["LangChain", "OpenAI", "React", "Pinecone"],
      icon: <Terminal size={40} className="text-orange-500" />
    },
    {
      title: "Neural Style Transfer",
      category: "Computer Vision",
      description: "An implementation of artistic style transfer using Convolutional Neural Networks (VGG19). Transforms ordinary photos into artwork in the style of famous painters.",
      tech: ["PyTorch", "OpenCV", "Python"],
      icon: <Cpu size={40} className="text-purple-500" />
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/90 shadow-lg backdrop-blur-sm' : 'bg-white/90 shadow-lg backdrop-blur-sm') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-blue-500">Dev</span>ML
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://mhashamahmad.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-colors ${darkMode ? 'text-gray-300 hover:text-white hover:bg-slate-800' : 'text-gray-700 hover:text-black hover:bg-gray-200'}`}
                title="Main Website"
              >
                <Globe size={18} />
                <span className="hidden sm:inline">Main Site</span>
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-slate-900'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-screen -mt-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${darkMode ? 'bg-blue-900/30 text-blue-400 border border-blue-800' : 'bg-blue-100 text-blue-700'}`}>
            Data Science & Machine Learning Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Muhammad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hasham Ahmad
            </span>
          </h1>
          <p className={`text-lg mb-8 max-w-lg mx-auto md:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            xGoogle DSC Lead @KFUEIT | AI Engineer at Nerosec Innovations. Crafting intelligent solutions through Python, TensorFlow, and PyTorch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
              View Projects <ChevronDown size={18} />
            </button>
            <button className={`px-8 py-3 rounded-lg font-medium transition-all border flex items-center justify-center gap-2 ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-gray-300 hover:bg-gray-100 text-gray-900'}`}>
              <Download size={18} /> Download Resume
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
            <a href="https://github.com/m-hashamahmad" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/muhammad-hasham-ahmad/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Linkedin size={24} /></a>
            <a href="mailto:contact@mhashamahmad.me" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Mail size={24} /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
            <div className={`relative z-10 w-full h-full rounded-2xl border backdrop-blur-sm p-6 flex items-center justify-center ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-gray-200'}`}>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 ${darkMode ? 'bg-slate-700/50' : 'bg-white shadow-sm'}`}>
                  <Brain size={32} className="text-pink-500" />
                  <span className="font-semibold text-sm">Deep Learning</span>
                </div>
                <div className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 ${darkMode ? 'bg-slate-700/50' : 'bg-white shadow-sm'}`}>
                  <BarChart size={32} className="text-green-500" />
                  <span className="font-semibold text-sm">Analytics</span>
                </div>
                <div className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 ${darkMode ? 'bg-slate-700/50' : 'bg-white shadow-sm'}`}>
                  <Cpu size={32} className="text-blue-500" />
                  <span className="font-semibold text-sm">ML Ops</span>
                </div>
                <div className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 ${darkMode ? 'bg-slate-700/50' : 'bg-white shadow-sm'}`}>
                  <Database size={32} className="text-orange-500" />
                  <span className="font-semibold text-sm">Big Data</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${darkMode ? 'bg-slate-800' : 'bg-white shadow-sm'}`}
          >
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I have honed my expertise in Python, TensorFlow, Streamlit, Scikit-Learn, and PyTorch. My background includes hands-on experience in predictive modeling, data analysis, and implementing machine learning algorithms to solve real-world problems.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Throughout my journey, including my time at Knowledge Streams, I have developed strong skills in data preprocessing, exploratory data analysis (EDA), and deep learning techniques. I am passionate about transforming data into actionable insights and contributing to innovative, data-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-xl border transition-all hover:shadow-lg ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-slate-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : (darkMode ? 'bg-slate-800 text-gray-400 hover:bg-slate-700' : 'bg-white text-gray-600 hover:bg-gray-100')
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
                >
                  <div className={`h-48 flex items-center justify-center ${darkMode ? 'bg-slate-900' : 'bg-gray-100'}`}>
                    {project.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{project.category}</span>
                        <h3 className="text-xl font-bold mt-1 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                      </div>
                    </div>
                    <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded border ${darkMode ? 'border-slate-600 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className={`flex items-center gap-1 text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
                        <Github size={16} /> Code
                      </a>
                      <a href="#" className={`flex items-center gap-1 text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
                        <ExternalLink size={16} /> Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {[
            {
              role: "Artificial Intelligence Engineer",
              company: "Nerosec Innovations",
              period: "March 2026 - Present",
              desc: "Building and deploying advanced AI models to solve complex business challenges. Focused on integrating machine learning workflows into production environments."
            },
            {
              role: "Datasience with Machine learning Trainee",
              company: "Knowledge Streams",
              period: "July 2024 - September 2024",
              desc: "Developed predictive models for heart disease and plant disease detection. Performed extensive EDA and visualization using Power BI and Pandas."
            },
            {
              role: "Google Developers Student Club Lead",
              company: "Google Developers (KFUEIT)",
              period: "August 2023 - July 2024",
              desc: "Led the GDSC chapter at KFUEIT, organizing technical workshops, hackathons, and fostering a developer community on campus."
            },
            {
              role: "UI/UX Intern",
              company: "UVIZON",
              period: "August 2023 - December 2023",
              desc: "Created intuitive user interfaces and experiences, bridging the gap between design and development for various digital products."
            },
            {
              role: "Management Lead",
              company: "Google DSC (KFUEIT)",
              period: "September 2022 - August 2023",
              desc: "Managed core operations and team coordination, ensuring successful delivery of multiple tech events and community projects."
            },
            {
              role: "Intern",
              company: "NGS Technologies",
              period: "December 2022 - December 2023",
              desc: "Gained foundational experience in software development and data-driven processes within a professional engineering environment."
            }
          ].map((job, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative pl-8 border-l-2 ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{job.period}</span>
              </div>
              <h4 className="text-blue-500 font-medium mb-2">{job.company}</h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-slate-800/20' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Bachelor's degree, Computer Science",
                institution: "Khwaja Fareed University of Engineering and Information Technology (KFUEIT)",
                period: "March 2020 - February 2024",
              },
              {
                degree: "Aspire Leadership Program",
                institution: "Aspire Institute",
                period: "January 2024",
              }
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</span>
                </div>
                <h4 className="text-blue-500 font-medium">{edu.institution}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:contact@mhashamahmad.me" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-blue-500/25">
            <Mail size={20} /> Say Hello
          </a>
          
          <div className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${darkMode ? 'border-slate-800 text-gray-500' : 'border-gray-100 text-gray-400'}`}>
             <p>
               © {new Date().getFullYear()} <a href="https://mhashamahmad.me" className="hover:text-blue-500 font-medium transition-colors">M Hasham Ahmad</a>. All rights reserved.
             </p>
             <div className="flex gap-6">
               <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
               <a href="https://github.com/m-hashamahmad" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">GitHub</a>
               <a href="https://www.linkedin.com/in/muhammad-hasham-ahmad/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
