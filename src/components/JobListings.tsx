import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Filter, 
  Search,
  Building2,
  Star,
  BookmarkPlus,
  ExternalLink 
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  tags: string[];
  featured?: boolean;
  description: string;
  logo: string;
  rating: number;
}

const JobListings = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobFilters = [
    { id: 'all', label: 'All Jobs' },
    { id: 'remote', label: 'Remote' },
    { id: 'full-time', label: 'Full Time' },
    { id: 'part-time', label: 'Part Time' },
    { id: 'contract', label: 'Contract' },
  ];

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'RAAS Engineers',
      location: 'Greater Noida, UP',
      type: 'Full Time',
      salary: 'Rs 4lpa - Rs 6lpa',
      experience: '2+ years',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
      featured: true,
      description: 'Join our dynamic team to build cutting-edge web applications...',
      logo: '🏢',
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Sales Manager',
      company: 'Reliable Source and Solutions',
      location: 'Greater Noida, UP',
      type: 'Full Time',
      salary: '3lpa - 4lpa',
      experience: '1+ years',
      tags: ['Sales Planning', 'Customer Relationship Management', 'CRM', 'Business Development'],
      description: 'Leads sales teams, drives revenue growth, and builds strong customer relationships',
      logo: '🎨',
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Project Manager',
      company: 'Cross Air Engineers',
      location: 'OnSite',
      type: 'Full Time',
      salary: '5lpa - 6lpa',
      experience: '4+ years',
      tags: ['Communication Skills', 'Team Coordination and SuperVision', 'Decision Making', 'Site Meetings'],
      featured: true,
      description: 'Planning, execution, and completion of HVAC projects, ensuring systems are installed efficiently, on time.',
      logo: '☁️',
      rating: 4.7,
    },
    {
      id: '4',
      title: 'Marketing Manager',
      company: 'Growth Marketing Co',
      location: 'Delhi, India',
      type: 'Full Time',
      salary: '7lpa - 10lpa',
      experience: '3+ years',
      tags: ['Digital Marketing', 'SEO', 'Analytics', 'Growth'],
      description: 'Drive marketing initiatives and customer acquisition...',
      logo: '📈',
      rating: 4.6,
    },
    {
      id: '5',
      title: 'Data Scientist',
      company: 'AI Innovations Lab',
      location: 'Gurgaon, India',
      type: 'Full Time',
      salary: '6lpa - 7lpa',
      experience: '4+ years',
      tags: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
      description: 'Analyze complex data and build predictive models...',
      logo: '🔬',
      rating: 4.8,
    },
    {
      id: '6',
      title: 'Mobile App Developer',
      company: 'AppCraft Studios',
      location: 'Noida, UP',
      type: 'Contract',
      salary: 'Rs 3000 - Rs15000/hr',
      experience: '3+ years',
      tags: ['React Native', 'iOS', 'Android', 'JavaScript'],
      description: 'Develop cross-platform mobile applications...',
      logo: '📱',
      rating: 4.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="jobs" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Latest <span className="gradient-text">Job Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover amazing career opportunities from top companies around the world
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass p-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
              <Button className="gradient-primary hover-glow shadow-primary">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {jobFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'gradient-primary text-white shadow-primary'
                      : 'bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Job Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="glass p-6 rounded-2xl hover-lift group cursor-pointer ring-2 ring-primary/50 shadow-glow"
            >
              {/* Job Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-2xl">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{job.company}</span>
                      <div className="flex items-center ml-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">{job.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {job.featured && (
                    <Badge className="gradient-primary">Featured</Badge>
                  )}
                  <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2">{job.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  {job.experience} experience
                </span>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="hover-lift">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="sm" className="gradient-primary hover-glow">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="glass hover-lift px-8">
            Load More Jobs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobListings;