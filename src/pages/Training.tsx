import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Briefcase, Building2, CalendarRange, Clock3, Compass, FileText, GraduationCap, Handshake, Layers3, Rocket, Sparkles, Target, Users, Zap, Factory, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trainingCourses, trainingHighlights, studentBenefits, industrySegments } from '@/data/trainingPrograms';
import { Badge as UIBadge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useEffect, useMemo } from 'react';

const iconMap = {
  Users,
  Zap,
  Building2,
  Briefcase,
  FileText,
  GraduationCap,
  Layers3,
  Award: BadgeCheck,
  CalendarRange,
  Factory,
  Rocket,
  BadgeCheck,
  Handshake,
  UserRound: Users,
  Compass,
  Clock3,
  Target,
};

const TrainingPage = () => {
  const { slug } = useParams();
  const course = useMemo(() => trainingCourses.find((item) => item.slug === slug) ?? null, [slug]);
  const relatedCourses = useMemo(() => (course ? trainingCourses.filter((item) => course.relatedCourseSlugs.includes(item.slug)).slice(0, 3) : trainingCourses.slice(0, 3)), [course]);

  useEffect(() => {
    const title = course ? `${course.title} | Naukariwala Training` : 'Training Programs | Naukariwala';
    const description = course ? course.shortDescription : 'Explore industry-oriented training programs with practical projects, placement guidance, and certifications.';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', course ? 'article' : 'website');
  }, [course]);

  const heroTitle = course ? course.title : 'Industry-Oriented Professional Training Programs';
  const heroSubtitle = course ? course.shortDescription : 'Learn from experts. Work on Live Projects. Get Certified. Get Placed.';
  const heroDescription = course ? course.overview : 'Join premium training programs that lead to placements, internships, and confident career growth.';

  const renderSection = (title: string, items: string[]) => (
    <div className="glass rounded-3xl p-6">
      <h3 className="text-2xl font-semibold mb-5">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/training" className="hover:text-primary">Training</Link>
            {course && <><span>/</span><span className="text-foreground">{course.title}</span></>}
          </div>
        </nav>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background/70 to-accent/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,76,129,0.2),_transparent_35%)]" />
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                Naukariwala Training Academy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
                {heroSubtitle}
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mb-8">{heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-primary hover-glow shadow-primary px-6">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary/30 bg-white/5 px-6">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {!course ? (
          <>
            <section className="container mx-auto px-4 py-20">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {trainingCourses.map((item, index) => (
                  <motion.article key={item.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} className="glass rounded-3xl overflow-hidden hover-lift">
                    <img loading="lazy" src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-primary mb-3">
                        <UIBadge variant="outline" className="border-primary/20">{item.category}</UIBadge>
                        <UIBadge variant="outline" className="border-primary/20">{item.level}</UIBadge>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                      <p className="text-muted-foreground mb-4">{item.shortDescription}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{item.duration}</span>
                        <span>{item.mode}</span>
                      </div>
                      <Link to={`/training/${item.slug}`} className="inline-flex items-center text-primary font-semibold">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Us</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">A premium learning experience designed for placements, practical skills, and industry credibility.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {trainingHighlights.map((item, index) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] || Users;
                  return (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="glass rounded-3xl p-6 text-center hover-lift">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
              <div className="glass rounded-3xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row justify-between gap-5 items-start">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary mb-3">Placement Pathway</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Journey to Placement</h2>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-8">
                  {['Training', 'Live Projects', 'Resume Building', 'Mock Interviews', 'Technical Interview', 'HR Interview', 'Placement Assistance', 'Job Offers'].map((step, index) => (
                    <div key={step} className="glass rounded-2xl p-4 text-center">
                      <div className="text-sm font-semibold text-primary">{step}</div>
                      {index < 7 && <div className="mt-3 text-muted-foreground">↓</div>}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Benefits</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {studentBenefits.map((item, index) => {
                      const Icon = iconMap[item.icon as keyof typeof iconMap] || Users;
                      return (
                        <div key={item.title} className="glass rounded-3xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-2xl bg-primary/10 p-2"><Icon className="w-5 h-5 text-primary" /></div>
                            <h3 className="font-semibold">{item.title}</h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-5">Industries We Prepare You For</h3>
                  <div className="flex flex-wrap gap-3">
                    {industrySegments.map((industry) => (
                      <span key={industry} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-foreground">{industry}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4 pb-24">
              <div className="glass rounded-3xl p-8 md:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary mb-3">Inquiry Form</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tell us about your career goals</h2>
                    <p className="text-muted-foreground">Share your details and our advisors will guide you toward the best training path.</p>
                  </div>
                  <form className="grid gap-4 md:grid-cols-2">
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Name" />
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Email" />
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Phone" />
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="City" />
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Highest Qualification" />
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Interested Course" />
                    <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Preferred Batch" />
                    <textarea className="md:col-span-2 rounded-2xl border border-border bg-background/60 px-4 py-3 min-h-[120px]" placeholder="Message" />
                    <div className="md:col-span-2">
                      <Button className="gradient-primary">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="container mx-auto px-4 py-20 space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: course.title, description: course.shortDescription, provider: { '@type': 'Organization', name: 'Naukariwala' }, coursePrerequisites: course.whoCanJoin.join(', '), hasCourseInstance: { '@type': 'CourseInstance', courseMode: course.mode, courseWorkload: course.trainingDuration } }) }} />
            <div className="glass rounded-3xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary mb-3">Course Overview</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{course.overview}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <UIBadge className="gradient-primary">{course.duration}</UIBadge>
                    <UIBadge variant="outline" className="border-primary/20">{course.mode}</UIBadge>
                    <UIBadge variant="outline" className="border-primary/20">{course.level}</UIBadge>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="glass rounded-2xl p-4"><div className="flex items-center gap-2 text-primary mb-2"><Clock3 className="w-4 h-4" /> Duration</div><div>{course.trainingDuration}</div></div>
                    <div className="glass rounded-2xl p-4"><div className="flex items-center gap-2 text-primary mb-2"><BadgeCheck className="w-4 h-4" /> Certification</div><div>{course.certification}</div></div>
                    <div className="glass rounded-2xl p-4"><div className="flex items-center gap-2 text-primary mb-2"><Handshake className="w-4 h-4" /> Placement</div><div>{course.placementAssistance}</div></div>
                  </div>
                </div>
                <div className="lg:max-w-md w-full">
                  <img loading="lazy" src={course.image} alt={course.title} className="h-72 w-full rounded-3xl object-cover" />
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {renderSection('Who Can Join', course.whoCanJoin)}
              {renderSection('Course Curriculum', course.curriculum)}
              {renderSection('Practical Labs', course.practicalLabs)}
              {renderSection('Software Covered', course.softwareCovered)}
              {renderSection('Live Projects', course.liveProjects)}
              {renderSection('Career Opportunities', course.careerOpportunities)}
            </div>

            {course.topics && (
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-5">Topics Covered</h3>
                <div className="flex flex-wrap gap-3">
                  {course.topics.map((topic) => (
                    <span key={topic} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">{topic}</span>
                  ))}
                </div>
              </div>
            )}

            {course.careerRoles && (
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-5">Career Roles</h3>
                <div className="flex flex-wrap gap-3">
                  {course.careerRoles.map((role) => (
                    <span key={role} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">{role}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-5">FAQ</h3>
              <div className="space-y-4">
                {course.faq.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-border/60 p-4">
                    <p className="font-semibold mb-2">{item.question}</p>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-5">Apply Now</h3>
              <form className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Name" />
                <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Email" />
                <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="Phone" />
                <input className="rounded-2xl border border-border bg-background/60 px-4 py-3" placeholder="City" />
                <textarea className="md:col-span-2 rounded-2xl border border-border bg-background/60 px-4 py-3 min-h-[120px]" placeholder="Tell us about your background" />
                <Button className="gradient-primary">Submit Application</Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">Related Courses</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedCourses.map((item) => (
                  <Link key={item.slug} to={`/training/${item.slug}`} className="glass rounded-3xl p-6 hover-lift">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;
