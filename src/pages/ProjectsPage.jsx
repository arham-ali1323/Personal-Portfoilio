import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaCodeBranch, FaSpinner, FaSearch, FaFilter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [sortBy, setSortBy] = useState('updated');

  const username = 'arham-ali1323';

  useEffect(() => {
    fetchRepositories();
  }, []);

  useEffect(() => {
    filterAndSortRepos();
  }, [repos, searchTerm, selectedLanguage, sortBy]);

  const fetchRepositories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      
      const data = await response.json();
      setRepos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortRepos = () => {
    let filtered = repos.filter(repo => !repo.fork && !repo.archived);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by language
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(repo => 
        repo.language === selectedLanguage
      );
    }

    // Sort repositories
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'forks':
          return b.forks_count - a.forks_count;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'updated':
        default:
          return new Date(b.updated_at) - new Date(a.updated_at);
      }
    });

    setFilteredRepos(filtered);
  };

  const getLanguages = () => {
    const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
    return ['all', ...languages];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-6xl text-primary"
        >
          <FaSpinner />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Error Loading Projects</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={fetchRepositories}
            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
              <span>← Back to Home</span>
            </Link>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">All Projects</span>
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore my complete collection of {filteredRepos.length} open-source projects on GitHub. 
              From web applications to tools and experiments, discover what I've been building.
            </p>
            
            {/* GitHub Link */}
            <motion.a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/80 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
              Visit My GitHub Profile
            </motion.a>
          </div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search repositories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white/20 transition-all"
                />
              </div>

              {/* Language Filter */}
              <div className="relative">
                <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/20 transition-all appearance-none cursor-pointer"
                >
                  {getLanguages().map(lang => (
                    <option key={lang} value={lang} className="bg-slate-800">
                      {lang === 'all' ? 'All Languages' : lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/20 transition-all appearance-none cursor-pointer"
              >
                <option value="updated" className="bg-slate-800">Recently Updated</option>
                <option value="stars" className="bg-slate-800">Most Stars</option>
                <option value="forks" className="bg-slate-800">Most Forks</option>
                <option value="name" className="bg-slate-800">Name (A-Z)</option>
              </select>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{filteredRepos.length}</div>
              <div className="text-gray-300">Repositories</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {filteredRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
              </div>
              <div className="text-gray-300">Total Stars</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {filteredRepos.reduce((sum, repo) => sum + repo.forks_count, 0)}
              </div>
              <div className="text-gray-300">Total Forks</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {getLanguages().length - 1}
              </div>
              <div className="text-gray-300">Languages</div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl overflow-hidden group"
              >
                {/* Repository Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <FaCode className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                          {repo.name}
                        </h3>
                        {repo.language && (
                          <span className="text-sm text-gray-400">{repo.language}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {repo.description || 'No description available.'}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaStar className="w-4 h-4 text-yellow-500" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCodeBranch className="w-4 h-4 text-blue-500" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Updated {formatDate(repo.updated_at)}</span>
                    </div>
                  </div>
                </div>

                {/* Repository Actions */}
                <div className="p-6 flex gap-3">
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </motion.a>
                  {repo.homepage && (
                    <motion.a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredRepos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl text-gray-500 mb-4">
                <FaCode />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No repositories found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
