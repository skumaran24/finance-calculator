'use client';

import Link from 'next/link';
import { DollarSign, Target, Users, Award, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';

export default function About() {
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
                <Link href="/about" className="text-blue-600 font-medium">{t('common.about')}</Link>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{t('about.mission.title')}</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {t('about.mission.paragraph1')} 
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('about.mission.paragraph2')}
          </p>
        </div>

        {/* What We Offer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {(t('about.whatWeOffer', { returnObjects: true }) as any[]).map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {index === 0 && <DollarSign className="h-6 w-6 text-green-600 mr-2" />}
                {index === 1 && <Users className="h-6 w-6 text-blue-600 mr-2" />}
                {index === 2 && <Award className="h-6 w-6 text-purple-600 mr-2" />}
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.ourStory.title')}</h3>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              {t('about.ourStory.paragraph1')}
            </p>
            <p className="mb-4">
              {t('about.ourStory.paragraph2')}
            </p>
            <p>
              {t('about.ourStory.paragraph3')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.values.title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {(t('about.values.valuesList', { returnObjects: true }) as any[]).map((value, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.contact.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('about.contact.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/learn" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('about.contact.buttons.startLearning')}
            </Link>
            <Link 
              href="/" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              {t('about.contact.buttons.tryCalculators')}
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