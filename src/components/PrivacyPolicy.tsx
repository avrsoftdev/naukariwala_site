import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const privacyContent = `
# Privacy Policy

**Effective Date: October 3, 2025**

Naukariwala ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our mobile app (the "App"). By downloading, installing, or using the App, you consent to the practices described herein. If you do not agree, please do not use the App.

## 1. Information We Collect
We collect information to provide and improve our services. This includes:
- **Personal Information**: Name, email address, phone number, resume/CV details (e.g., education, work experience, skills), location (if enabled), and job preferences provided during registration or job applications.
- **Device and Usage Data**: IP address, device type, operating system, app interactions (e.g., searches, applications viewed), and crash reports.
- **Location Data**: Approximate location for job recommendations (e.g., jobs near you), only with your explicit permission via device settings.
- **Third-Party Data**: Information from integrated services like social logins (e.g., Google or LinkedIn) or job boards.

We do not collect sensitive data such as race, religion, or health information unless voluntarily provided in your resume.

## 2. How We Use Your Information
Your data helps us:
- Create and manage your account.
- Match you with relevant job opportunities using AI algorithms.
- Process job applications and communicate with employers on your behalf (with consent).
- Send personalized notifications, newsletters, or promotional content (you can opt out anytime).
- Analyze usage trends to improve the App's features and performance.
- Comply with legal obligations, prevent fraud, and enforce our Terms and Conditions.

## 3. How We Share Your Information
We do not sell your personal data. We may share it with:
- **Service Providers**: Trusted third parties for hosting, analytics (e.g., Google Analytics), or payment processing, bound by confidentiality.
- **Employers**: Resume and application details when you apply to a job, as needed for recruitment.
- **Legal Authorities**: If required by law, subpoena, or to protect our rights/safety.
- **Business Transfers**: In case of merger, acquisition, or sale of assets.

For international users, data may be transferred to servers in India or the US, compliant with local laws.

## 4. Your Rights and Choices
Depending on your location (e.g., under GDPR for EU users or CCPA for California residents):
- Access, update, or delete your data via App settings or by emailing privacy@naukariwala.com.
- Opt out of marketing emails or data sharing.
- Withdraw consent for location tracking anytime through device permissions.
- Request data portability or restriction of processing.

We retain your data only as long as necessary (e.g., 2 years post-last activity) or as required by law.

## 5. Children's Privacy
The App is not intended for users under 18. We do not knowingly collect data from children.

## 6. Security
We use industry-standard measures like encryption and secure servers to protect your data. However, no system is 100% secure, so we cannot guarantee absolute protection.

## 7. Changes to This Policy
We may update this policy periodically. Changes will be posted in the App with the new effective date. Continued use constitutes acceptance.

## 8. Contact Us
For questions, contact our Data Protection Officer at privacy@naukariwala.com.

Your trust is our priority – thank you for choosing Naukariwala!
  `;

  return (
    <section className="py-20 bg-background relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link to="/#contact">
              <Button
                variant="ghost"
                className="hover-glow text-foreground hover:text-primary"
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Back to Contact
              </Button>
            </Link>
          </motion.div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Privacy Policy
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-2xl prose text-foreground"
          >
            {privacyContent.split('\n').map((line, index) => (
              <p key={index} className="mb-4">
                {line.startsWith('# ') ? (
                  <h2 className="text-2xl font-semibold gradient-text">{line.replace('# ', '')}</h2>
                ) : line.startsWith('## ') ? (
                  <h3 className="text-lg font-medium gradient-text">{line.replace('## ', '')}</h3>
                ) : line.startsWith('- ') ? (
                  <li className="ml-4">{line.replace('- ', '')}</li>
                ) : line.startsWith('**') && line.endsWith('**') ? (
                  <strong>{line.replace(/\*\*/g, '')}</strong>
                ) : (
                  line
                )}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <Link to="/">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg gradient-primary hover-glow shadow-primary"
              >
                Agree and Proceed
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;