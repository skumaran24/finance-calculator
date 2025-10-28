'use client';

import Link from 'next/link';
import { DollarSign, BookOpen, Target, Shield, TrendingUp, Calculator, PiggyBank, CreditCard, Home, GraduationCap, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';

export default function Learn() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">{t('header.title')}</h1>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-500 hover:text-gray-900">{t('common.home')}</Link>
                <Link href="/calculators" className="text-gray-500 hover:text-gray-900">{t('common.calculators')}</Link>
                <Link href="/learn" className="text-blue-600 font-medium">{t('common.learn')}</Link>
                <Link href="/about" className="text-gray-500 hover:text-gray-900">{t('common.about')}</Link>
              </nav>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('common.backToHome')}
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('learn.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('learn.description')}
          </p>
        </div>

        {/* Learning Path */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Your Financial Learning Path</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Basics</h4>
              <p className="text-gray-600 text-sm">Learn financial fundamentals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Budgeting</h4>
              <p className="text-gray-600 text-sm">Master money management</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Saving</h4>
              <p className="text-gray-600 text-sm">Build your financial foundation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Investing</h4>
              <p className="text-gray-600 text-sm">Grow your wealth</p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Emergency Fund */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Emergency Fund Basics</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn why emergency funds are crucial and how to build one that protects you from financial disasters.
            </p>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-900">What You&apos;ll Learn:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Why emergency funds matter</li>
                <li>• How much to save (3-6 months rule)</li>
                <li>• Where to keep emergency money</li>
                <li>• When to use your emergency fund</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <Link 
                href="/calculators/emergency-fund" 
                className="text-red-600 hover:text-red-800 font-medium flex items-center"
              >
                Try Calculator <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Fixed Deposits */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Fixed Deposit Investment</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understand how fixed deposits work and learn to maximize your returns through compound interest.
            </p>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-900">What You&apos;ll Learn:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• How compound interest works</li>
                <li>• Choosing the right FD tenure</li>
                <li>• Comparing interest rates</li>
                <li>• Tax implications of FDs</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <Link 
                href="/calculators/fixed-deposit" 
                className="text-green-600 hover:text-green-800 font-medium flex items-center"
              >
                Try Calculator <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Retirement Planning */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Retirement Planning</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Plan for your golden years with smart saving strategies and investment growth projections.
            </p>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-900">What You&apos;ll Learn:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Setting retirement goals</li>
                <li>• Power of starting early</li>
                <li>• Investment allocation strategies</li>
                <li>• 401(k) and employer matching</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <Link 
                href="/calculators/annual-savings" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                Try Calculator <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Budgeting */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <PiggyBank className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Budgeting Fundamentals</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Master the art of budgeting to take control of your money and achieve your financial goals.
            </p>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-900">Key Concepts:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 50/30/20 budgeting rule</li>
                <li>• Tracking your expenses</li>
                <li>• Zero-based budgeting</li>
                <li>• Budgeting tools and apps</li>
              </ul>
            </div>
          </div>

          {/* Debt Management */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Debt Management</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn strategies to pay off debt efficiently and avoid the debt trap that keeps many people stuck.
            </p>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-900">Strategies Covered:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Debt snowball vs. avalanche</li>
                <li>• Credit card management</li>
                <li>• Debt consolidation options</li>
                <li>• Building good credit</li>
              </ul>
            </div>
          </div>

          {/* Home Buying */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Home Buying Guide</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Navigate the home buying process with confidence, from saving for a down payment to closing.
            </p>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-900">What&apos;s Included:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Down payment strategies</li>
                <li>• Mortgage types explained</li>
                <li>• Home affordability calculations</li>
                <li>• First-time buyer programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Tips Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Essential Financial Tips</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <strong>Track Your Spending:</strong> Know where your money goes before you can control it.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <strong>Build an Emergency Fund:</strong> Start with $1,000, then work toward 3-6 months of expenses.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <strong>Pay Off High-Interest Debt:</strong> Focus on credit cards and other high-interest debt first.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Building Wealth</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <div>
                    <strong>Start Investing Early:</strong> Time is your greatest asset when building wealth.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                  <div>
                    <strong>Automate Your Savings:</strong> Pay yourself first by automating transfers to savings.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">6</span>
                  <div>
                    <strong>Diversify Your Investments:</strong> Don&apos;t put all your eggs in one basket.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take Action?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Knowledge without action is just potential. Start applying what you&apos;ve learned with our interactive calculators 
            and begin building your financial future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculators/emergency-fund" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Start with Emergency Fund
            </Link>
            <Link 
              href="/calculators/fixed-deposit" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Calculate FD Returns
            </Link>
            <Link 
              href="/calculators/annual-savings" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Plan for Retirement
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