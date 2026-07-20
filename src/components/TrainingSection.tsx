import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Building2, Sparkles, Wrench, Zap, CircuitBoard, Layers3, PanelTop, Blocks, ScanLine, MonitorPlay, RadioTower } from 'lucide-react';
import { Link } from 'react-router-dom';

const trainingCards = [
  { title: 'HVAC Design', description: 'Design climate control systems and MEP layouts for modern infrastructure.', icon: Building2 },
  { title: 'PLC Programming', description: 'Learn industrial control logic and real machine automation.', icon: Cpu },
  { title: 'SCADA', description: 'Build monitoring dashboards and supervisory control interfaces.', icon: MonitorPlay },
  { title: 'AutoCAD', description: 'Draft engineering diagrams and technical layouts with confidence.', icon: ScanLine },
  { title: 'Solar Installer & Technician', description: 'Train for rooftop solar installation, safety, and commissioning.', icon: Sparkles },
  { title: 'Industrial Automation', description: 'Master sensors, drives, control panels, and smart systems.', icon: CircuitBoard },
  { title: 'Industrial Building Automation', description: 'Create efficient building controls and energy management systems.', icon: Layers3 },
  { title: 'Industrial Mechanical Engineering', description: 'Understand plant machinery, maintenance, and operating systems.', icon: Wrench },
  { title: 'Embedded Systems', description: 'Develop low-level electronics and microcontroller-based products.', icon: RadioTower },
  { title: 'Industrial Software Engineering', description: 'Bridge engineering know-how with software and analytics tools.', icon: PanelTop },
  { title: 'Full Stack Development', description: 'Become job-ready in modern web platforms and app development.', icon: Blocks },
  { title: 'MATLAB & Simulink', description: 'Model engineering systems and solve problems with simulation.', icon: Zap },
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 bg-background-secondary/70 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,76,129,0.18),_transparent_40%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary mb-4">Training Programs</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Career with <span className="gradient-text">Industry-Oriented Training</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get practical industry experience through hands-on training, live projects, internships, certifications and placement assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {trainingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group glass p-6 rounded-3xl border border-white/10 hover:border-primary/40 shadow-glass"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white mb-5 shadow-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{card.description}</p>
                <Link to="/training" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
