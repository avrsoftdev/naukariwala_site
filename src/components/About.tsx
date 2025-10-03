import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Award, 
  TrendingUp,
  Heart,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Our AI-powered algorithm ensures perfect job-candidate matches based on skills, experience, and culture fit.'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with top companies and talented professionals from around the world in our expanding ecosystem.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast job searches and applications with our optimized  platform.'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security and privacy measures you can trust.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe in putting people at the center of everything we do, creating meaningful connections.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology to revolutionize job hunting.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional experiences for both job seekers and employers.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Empowering career growth and helping businesses scale with the right talent.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '5K+', label: 'Partner Companies', icon: Target },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">NaukariWala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
         At Naukariwala, we believe finding the right job or talent should be simple. Our AI-powered platform connects job seekers with roles that match their skills and aspirations, while helping employers reach qualified candidates effortlessly. From personalized job recommendations and one-click applications to career tools, insights, and easy job postings, Naukariwala empowers professionals to grow and businesses to hire smarter—all in one intuitive platform.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To transform the traditional job search experience by creating an immersive, 
            platform that makes finding the perfect job as engaging and intuitive as it should be. 
            We believe that the right opportunity should find you, not the other way around.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass p-6 rounded-2xl text-center hover-lift"
            >
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </h4>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">NaukariWala?</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of job searching with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at NaukariWala
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover-lift group"
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;