'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateEmergencyFund } from '@/utils/calculations';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function EmergencyFundCalculator() {
  const { t, i18n } = useTranslation();
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(3000);
  const [currentSavings, setCurrentSavings] = useState<number>(5000);
  const [targetMonths, setTargetMonths] = useState<number>(6);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    const calculationResult = calculateEmergencyFund({
      monthlyExpenses,
      currentSavings,
      targetMonths,
      monthlyContribution,
    });
    setResult(calculationResult);
  };

  const formatCurrency = (amount: number) => {
    const currency = i18n.language === 'ms' ? 'MYR' : 'USD';
    
    return new Intl.NumberFormat(i18n.language === 'ms' ? 'ms-MY' : 'en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title={t('calculators.emergencyFund.pageTitle')}
      description={t('calculators.emergencyFund.pageDescription')}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">{t('calculators.emergencyFund.details')}</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.emergencyFund.monthlyExpenses')} ({t('common.currency')})
              </label>
              <input
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.emergencyFund.monthlyExpensesPlaceholder')}
              />
              <p className="text-sm text-gray-500 mt-1">
                {t('calculators.emergencyFund.monthlyExpensesHelp')}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.emergencyFund.currentSavings')} ({t('common.currency')})
              </label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.emergencyFund.currentSavingsPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.emergencyFund.targetMonths')}
              </label>
              <select
                value={targetMonths}
                onChange={(e) => setTargetMonths(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              >
                <option value={3}>{t('calculators.emergencyFund.targetOptions.3months')}</option>
                <option value={6}>{t('calculators.emergencyFund.targetOptions.6months')}</option>
                <option value={9}>{t('calculators.emergencyFund.targetOptions.9months')}</option>
                <option value={12}>{t('calculators.emergencyFund.targetOptions.12months')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.emergencyFund.monthlyContribution')} ({t('common.currency')})
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.emergencyFund.monthlyContributionPlaceholder')}
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              {t('calculators.emergencyFund.calculateFund')}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <div className={`rounded-xl shadow-lg p-8 border ${
              result.isTargetMet 
                ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200' 
                : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
            }`}>
              <div className="flex items-center mb-6">
                {result.isTargetMet ? (
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                )}
                <h3 className="text-xl font-semibold text-gray-900">{t('calculators.emergencyFund.results.title')}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">{t('calculators.emergencyFund.results.targetFund')}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.targetAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">{t('calculators.emergencyFund.results.currentSavings')}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.currentSavings)}</span>
                </div>
                
                {!result.isTargetMet && (
                  <>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">{t('calculators.emergencyFund.results.amountNeeded')}</span>
                      <span className="font-semibold text-red-600">{formatCurrency(result.shortfall)}</span>
                    </div>
                    
                    {result.monthsToTarget > 0 && (
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-600">{t('calculators.emergencyFund.results.monthsToTarget')}</span>
                        <span className="font-bold text-xl text-red-700">{result.monthsToTarget} {t('common.months')}</span>
                      </div>
                    )}
                  </>
                )}
                
                {result.isTargetMet && (
                  <div className="bg-green-100 p-4 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-semibold">
                        {t('calculators.emergencyFund.results.congratulations')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Educational Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">{t('calculators.emergencyFund.education.title')}</h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                {t('calculators.emergencyFund.education.description')}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{t('calculators.emergencyFund.education.timeline')}</h4>
                <ul className="space-y-1 ml-4">
                  {(t('calculators.emergencyFund.education.timelineList', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{t('calculators.emergencyFund.education.bestPractices')}</h4>
                <ul className="space-y-1 ml-4">
                  {(t('calculators.emergencyFund.education.practicesList', { returnObjects: true }) as string[]).map((practice, index) => (
                    <li key={index}>• {practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}