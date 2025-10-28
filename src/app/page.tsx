'use client';

import Link from 'next/link';
import { Calculator, Shield, TrendingUp, BookOpen, DollarSign, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {
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
                <Link href="/learn" className="text-gray-500 hover:text-gray-900">{t('common.learn')}</Link>
                <Link href="/about" className="text-gray-500 hover:text-gray-900">{t('common.about')}</Link>
              </nav>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('home.heroTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {t('home.tryCalculators')}
            </Link>
            <Link href="/learn" className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
              {t('common.startLearning')}
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('home.calculatorsTitle')}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.calculatorsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fixed Deposit Calculator */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <Calculator className="h-8 w-8 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">{t('calculators.fixedDeposit.title')}</h4>
              </div>
              <p className="text-gray-600 mb-4">
                {t('calculators.fixedDeposit.description')}
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {(t('calculators.fixedDeposit.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <Link href="/calculators/fixed-deposit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block">
                {t('common.calculateNow')}
              </Link>
            </div>

            {/* Emergency Fund Calculator */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">{t('calculators.emergencyFund.title')}</h4>
              </div>
              <p className="text-gray-600 mb-4">
                {t('calculators.emergencyFund.description')}
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {(t('calculators.emergencyFund.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <Link href="/calculators/emergency-fund" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors inline-block">
                {t('common.calculateNow')}
              </Link>
            </div>

            {/* Annual Savings Calculator */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">{t('calculators.annualSavings.title')}</h4>
              </div>
              <p className="text-gray-600 mb-4">
                {t('calculators.annualSavings.description')}
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {(t('calculators.annualSavings.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <Link href="/calculators/annual-savings" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block">
                {t('common.calculateNow')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('home.learningTitle')}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.learningDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Goal Setting</h4>
              <p className="text-gray-600 text-sm">Learn how to set and achieve your financial goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Emergency Planning</h4>
              <p className="text-gray-600 text-sm">Build a safety net for unexpected expenses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Investment Basics</h4>
              <p className="text-gray-600 text-sm">Understand the fundamentals of investing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Calculator className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Financial Planning</h4>
              <p className="text-gray-600 text-sm">Create a comprehensive financial plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-semibold">{t('header.title')}</span>
              </div>
              <p className="text-gray-400">
                {t('header.tagline')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t('footer.quickLinks')}</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/calculators" className="hover:text-white">{t('common.calculators')}</Link></li>
                <li><Link href="/learn" className="hover:text-white">{t('common.learn')}</Link></li>
                <li><Link href="/about" className="hover:text-white">{t('common.about')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t('footer.calculators')}</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/calculators/fixed-deposit" className="hover:text-white">{t('calculators.fixedDeposit.title')}</Link></li>
                <li><Link href="/calculators/emergency-fund" className="hover:text-white">{t('calculators.emergencyFund.title')}</Link></li>
                <li><Link href="/calculators/annual-savings" className="hover:text-white">{t('calculators.annualSavings.title')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}