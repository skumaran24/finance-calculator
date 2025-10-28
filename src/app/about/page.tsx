import Link from 'next/link';
import { DollarSign, Target, Users, Award, ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Finance Learning Hub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
              <Link href="/calculators" className="text-gray-500 hover:text-gray-900">Calculators</Link>
              <Link href="/learn" className="text-gray-500 hover:text-gray-900">Learn</Link>
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Finance Learning Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals with the knowledge and tools they need to make informed financial decisions and build a secure financial future.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Financial literacy is a crucial life skill that everyone deserves to have. Our mission is to make financial education accessible, 
            practical, and engaging for people at all stages of their financial journey. We believe that with the right tools and knowledge, 
            anyone can take control of their finances and build wealth for the future.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through interactive calculators, educational content, and practical guidance, we aim to demystify personal finance and help 
            you make confident financial decisions that align with your goals and values.
          </p>
        </div>

        {/* What We Offer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-green-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">Interactive Calculators</h4>
            </div>
            <p className="text-gray-600">
              Powerful, easy-to-use calculators for fixed deposits, emergency funds, and annual savings planning. 
              Get instant results with detailed breakdowns and explanations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">Educational Content</h4>
            </div>
            <p className="text-gray-600">
              Comprehensive guides and articles that explain financial concepts in simple terms. 
              Learn at your own pace with practical examples and real-world applications.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-purple-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">Expert Guidance</h4>
            </div>
            <p className="text-gray-600">
              Best practices and strategies developed by financial experts. Get actionable advice 
              that you can implement immediately to improve your financial situation.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Finance Learning Hub was created out of a simple observation: too many people struggle with basic financial concepts 
              not because they lack intelligence, but because they lack access to clear, practical financial education.
            </p>
            <p className="mb-4">
              We noticed that traditional financial education often involves complex jargon, intimidating concepts, and theoretical 
              knowledge that doesn&apos;t translate well to real-world situations. We wanted to change that.
            </p>
            <p>
              Our platform combines interactive tools with educational content to create a learning experience that is both 
              practical and engaging. Whether you&apos;re just starting your financial journey or looking to optimize your existing 
              financial strategy, we&apos;re here to help you succeed.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h4>
              <p className="text-gray-600">
                Financial education should be available to everyone, regardless of their background or current financial situation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Simplicity</h4>
              <p className="text-gray-600">
                We break down complex financial concepts into simple, understandable terms that anyone can grasp.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Practicality</h4>
              <p className="text-gray-600">
                Our tools and content focus on actionable strategies that you can implement in your daily financial life.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h4>
              <p className="text-gray-600">
                We provide clear explanations of how our calculators work and the assumptions behind our recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have questions, suggestions, or feedback? We&apos;d love to hear from you and help you on your financial journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/learn" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Learning
            </Link>
            <Link 
              href="/" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Try Our Calculators
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-semibold">Finance Learning Hub</span>
              </div>
              <p className="text-gray-400">
                Empowering you with financial knowledge and tools for a better future.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/calculators" className="hover:text-white">Calculators</Link></li>
                <li><Link href="/learn" className="hover:text-white">Learning Center</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Calculators</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/calculators/fixed-deposit" className="hover:text-white">Fixed Deposit</Link></li>
                <li><Link href="/calculators/emergency-fund" className="hover:text-white">Emergency Fund</Link></li>
                <li><Link href="/calculators/annual-savings" className="hover:text-white">Annual Savings</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Finance Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}