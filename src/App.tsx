import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone, ArrowRight, Menu, X, Sun, Moon, Star, Zap, Heart, Award, Coffee, Users, Clock, MessageCircle, Lightbulb, Target } from 'lucide-react';
import emailjs from 'emailjs-com';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-green-500' },
        { name: 'Kotlin', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'R', level: 75, color: 'from-blue-600 to-cyan-500' },
        { name: 'HTML', level: 90, color: 'from-red-500 to-white-600' },
        { name: 'CSS', level: 85, color: 'from-yellow-500 to-sky-400' },
        { name: 'PHP', level: 75, color: 'from-purple-700 to-pink-500' },
        { name: 'React', level: 88, color: 'from-cyan-400 to-blue-600' },
        { name: 'Node.js', level: 86, color: 'from-green-500 to-emerald-600' },
        { name: 'Express.js', level: 82, color: 'from-gray-400 to-gray-700' }

      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'MySQL', level: 88, color: 'from-blue-500 to-indigo-500' }
      ]
    },
    {
      title: 'IDE & Tools',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Android Studio', level: 90, color: 'from-green-500 to-teal-500' },
        { name: 'GitHub', level: 92, color: 'from-gray-600 to-gray-800' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'Eclipse', level: 80, color: 'from-purple-600 to-indigo-600' },
        { name: 'Figma', level: 85, color: 'from-pink-500 to-purple-500' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: 'Quick Learning', level: 95, color: 'from-yellow-500 to-orange-500', icon: <Lightbulb className="w-4 h-4" /> },
        { name: 'Time Management', level: 90, color: 'from-blue-500 to-purple-500', icon: <Clock className="w-4 h-4" /> },
        { name: 'Communication', level: 88, color: 'from-green-500 to-blue-500', icon: <MessageCircle className="w-4 h-4" /> },
        { name: 'Problem-Solving', level: 92, color: 'from-red-500 to-pink-500', icon: <Target className="w-4 h-4" /> },
        { name: 'Self-Learning', level: 95, color: 'from-purple-500 to-indigo-500', icon: <Coffee className="w-4 h-4" /> },
        { name: 'Teamwork', level: 90, color: 'from-cyan-500 to-blue-500', icon: <Users className="w-4 h-4" /> }
      ]
    }
  ];

  const projects = [
    {
      title: 'Online Stock Management System (Jul 2024 – Oct 2024)',
      description: 'A full-stack inventory and transaction management system built with Java and MySQL. Features include CRUD operations for feedback, cart, shipping, and payment modules, with a focus on transaction efficiency and user experience. Tools used: Java, MySQL, Apache Tomcat, Eclipse IDE.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Java ', ' MySQL', 'Apache Tomcat', 'Eclipse IDE'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Madusha360/Online_StockMangement_System_Payment.git',
      featured: true
    },
    {
      title: 'Tea Factory management system (2/2025 – 6/2025)',
      description: 'A full-stack factory operations system developed with the MERN stack. Key features include supplier profile management and raw material tracking within the supply management module. Tools used: Node.js, React.js, Express.js, MongoDB, VS Code.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'VS Code'],
      liveUrl: '#',
      githubUrl: 'https://github.com/CodeByMonil/ITP-Final.git',
      featured: true
    },
    {
      title: 'Online Coffee Shop System (Mar 2025 – Jun 2025)',
      description: 'A mobile application built for a coffee shop using Kotlin. Features include coffee menu browsing, secure order placement, real-time order tracking, and seamless payment integration, delivering a smooth and intuitive user experience. Tools used: Kotlin, Android Studio.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Kotlin,', 'Android Studio'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Madusha360/Coffee-shop.git',
      featured: false
    },

    {
      title: 'Online Fitness Management System (Feb 2024 – Jun 2024)',
      description: 'A web-based platform developed with PHP to manage fitness-related services. Key features include a responsive customer page, feedback form, and contact page with full CRUD functionality. Tools used: PHP, JavaScript, HTML, CSS, XAMPP, GitHub.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['PHP', 'JavaScript ', 'HTML', ' CSS', ' XAMPP', 'GitHub'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Madusha360/Fitness-Management-System',
      featured: true
    },
    {
      title: 'Finance Tracker App (Feb 2024 – Jun 2024)',
      description: 'A mobile application developed with Kotlin for tracking personal finances. Features include expense and income tracking, category-wise summaries, and a clean, intuitive user interface. Tools used: Kotlin, Android Studio.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Kotlin', 'Android Studio '],
      liveUrl: '#',
      githubUrl: 'https://github.com/Madusha360/Finance-Tracker-App.git',
      featured: true
    },
  ];

  const achievements = [
    { icon: <Award className="w-8 h-8" />, title: '5 Projects', description: 'Successfully delivered' },
    { icon: <Star className="w-8 h-8" />, title: '2 Years', description: 'Experience in development' },
    { icon: <Heart className="w-8 h-8" />, title: '100%', description: 'Client satisfaction' },
    { icon: <Zap className="w-8 h-8" />, title: '24/7', description: 'Available for projects' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_7e5v28w';
    const templateID = 'template_l2g1lok';
    const userID = '-PLHKi1bIpYVa0oji';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} transition-colors duration-500`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-cyan-500/20 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
                Madusha Isuranga
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-blue-600 dark:hover:text-cyan-400 relative group ${activeSection === section ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-300'
                      }`}
                  >
                    {section}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full ${activeSection === section ? 'w-full' : ''
                      }`}></span>
                  </button>
                ))}

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-600" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 dark:text-white"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-cyan-500/20 transition-colors duration-500">
              <div className="px-4 py-2 space-y-2">
                {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 capitalize text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/20 dark:to-cyan-900/20 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-xl animate-float-delayed"></div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-400 rounded-full text-sm font-medium mb-4 animate-pulse">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Madusha Isuranga
                </span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Fullstack Developer
              </div>

              <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
                & Problem Solver
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Crafting innovative digital solutions with cutting-edge technologies.
                Passionate about creating seamless user experiences and robust applications that make a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px]"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am dedicated and motivated undergraduate student pursuing a degree in Information technology, currently in my second year, second semester. Passionate about problem-solving, software development, and innovation, with a strong interest in technology and data
                  management. Equipped with excellent soft skills, including communication, teamwork, adaptability, and critical thinking. Seeking opportunities to apply my knowledge, gain hands-on experience, and
                  contribute to dynamic projects in the tech industry.

                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in full-stack development, with expertise in modern frameworks like
                  React, Node.js, and Python. I'm constantly learning new technologies and staying
                  up-to-date with industry trends to deliver cutting-edge solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community through
                  blog posts and mentoring.
                </p>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.title} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-blue-600 dark:text-cyan-400 mb-2 flex justify-center">
                        {achievement.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 dark:from-cyan-400 dark:to-purple-600 p-1 transform group-hover:scale-105 transition-all duration-500">
                    <img
                      src="/pic.jpg"  // Note the leading slash for public folder
                      alt="Alex Johnson"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 dark:from-cyan-400 dark:to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.title} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="text-blue-600 dark:text-cyan-400 mr-4 p-3 bg-blue-100 dark:bg-cyan-500/20 rounded-xl">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                          {skill.icon && (
                            <div className="text-blue-600 dark:text-cyan-400 mr-3 p-2 bg-blue-100 dark:bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                          )}
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
                          <div
                            className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">Proficiency</span>
                          <span className="text-blue-600 dark:text-cyan-400 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={project.title} className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl ${project.featured ? 'lg:col-span-1 ring-2 ring-blue-500/20 dark:ring-cyan-500/20' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-blue-600 dark:bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-blue-100 dark:bg-purple-600/20 text-blue-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors duration-300 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Download my complete resume or view the summary below
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg transition-colors duration-500">
              <div className="grid md:grid-cols-2 gap-8 text-left">


                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-6">Education</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">BSc (Hons) in Information Technology Specializing in Information Technology</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY (SLIIT) (2023-2027)</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Certifications</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Web-Design For Beginners - university of Moratuwa
                        Python for Beginners – University of Moratuwa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/new updateed cv.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
            >
              <Download className="w-5 h-5" />
              Download Full Resume
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-cyan-400">Let's Work Together</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:isurangamadusha476@gmail.com"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-lg">isurangamadusha476@gmail.com</span>
                  </a>
                  <a
                    href="https:/github.com/Madusha360"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-lg">https:/github.com/Madusha360</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span className="text-lg">www.linkedin.com/in/madu-isuranga-ab129a234</span>
                  </a>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-xl">
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-xl">
                    Failed to send message. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Madusha Isuranga. Built with ❤️ React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
