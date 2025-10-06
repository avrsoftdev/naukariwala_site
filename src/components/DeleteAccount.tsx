import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DeleteAccount = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-6">
          Delete Your NaukariWala Account
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <p>
            We're sorry to see you go. Deleting your account will permanently remove all your personal data, including your profile, saved jobs, applications, and preferences from our platform.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Steps to Delete Your Account
          </h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Log in to your account:</strong> Access your NaukariWala account using your registered email and password.
            </li>
            <li>
              <strong>Navigate to Account Settings:</strong> Go to your profile or settings page, typically found in the top-right corner of the platform.
            </li>
            <li>
              <strong>Locate the Delete Account Option:</strong> Look for the "Delete Account" or similar option within the account settings.
            </li>
            <li>
              <strong>Confirm Deletion:</strong> Follow the prompts to confirm your decision. You may be asked to verify your identity or provide a reason for deletion.
            </li>
            <li>
              <strong>Final Confirmation:</strong> Once confirmed, your account and all associated data will be permanently deleted. This action cannot be undone.
            </li>
          </ol>

          <h2 className="text-xl font-semibold text-foreground">
            Important Notes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account deletion is irreversible. Please ensure you want to proceed before confirming.</li>
            <li>If you have an active subscription, cancel it before deleting your account to avoid further charges.</li>
            <li>For assistance, contact our support team at <a href="mailto:support@naukariwala.com" className="text-primary hover:underline">support@naukariwala.com</a>.</li>
          </ul>

          <div className="mt-8">
            <a
              href="mailto:support@naukariwala.com"
              className="inline-block px-6 py-3 gradient-primary text-white rounded-xl hover-glow transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteAccount;