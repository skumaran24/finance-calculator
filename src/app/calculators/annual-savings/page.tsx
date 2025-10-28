'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateAnnualSavings } from '@/utils/calculations';
import { TrendingUp, Target, PiggyBank, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AnnualSavingsCalculator() {
  const { t, i18n } = useTranslation();
  const [targetAmount, setTargetAmount] = useState<number>(1000000);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [expectedReturn, setExpectedReturn] = useState<number>(8);
  const [currentSavings, setCurrentSavings] = useState<number>(50000);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    const calculationResult = calculateAnnualSavings({
      targetAmount,
      currentAge,
      retirementAge,
      expectedReturn,
      currentSavings,
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
      title={t('calculators.annualSavings.pageTitle')}
      description={t('calculators.annualSavings.pageDescription')}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">{t('calculators.annualSavings.details')}</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.annualSavings.targetAmount')} ({t('common.currency')})
              </label>
              <input
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.annualSavings.targetAmountPlaceholder')}
              />
              <p className="text-sm text-gray-500 mt-1">
                {t('calculators.annualSavings.targetAmountHelp')}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.annualSavings.currentAge')}
              </label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.annualSavings.currentAgePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.annualSavings.retirementAge')}
              </label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.annualSavings.retirementAgePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.annualSavings.expectedReturn')}
              </label>
              <input
                type="number"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.annualSavings.expectedReturnPlaceholder')}
              />
              <p className="text-sm text-gray-500 mt-1">
                {t('calculators.annualSavings.expectedReturnHelp')}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.annualSavings.currentSavings')} ({t('common.currency')})
              </label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.annualSavings.currentSavingsPlaceholder')}
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('calculators.annualSavings.calculatePlan')}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">{t('calculators.annualSavings.results.title')}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">{t('calculators.annualSavings.results.retirementGoal')}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.targetAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">{t('calculators.annualSavings.results.currentSavings')}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.currentSavings)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">{t('calculators.annualSavings.results.futureValue')}</span>
                  <span className="font-semibold text-green-600">{formatCurrency(result.futureValueCurrentSavings)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">{t('calculators.annualSavings.results.yearsToRetirement')}</span>
                  <span className="font-semibold text-gray-900">{result.yearsToRetirement} {t('common.years')}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">{t('calculators.annualSavings.results.additionalNeeded')}</span>
                  <span className="font-semibold text-red-600">{formatCurrency(result.remainingAmount)}</span>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{t('calculators.annualSavings.results.requiredAnnual')}</span>
                    <span className="font-bold text-xl text-blue-700">{formatCurrency(result.requiredAnnualSavings)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{t('calculators.annualSavings.results.requiredMonthly')}</span>
                    <span className="font-bold text-xl text-blue-700">{formatCurrency(result.requiredMonthlySavings)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Educational Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <PiggyBank className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">{t('calculators.annualSavings.education.title')}</h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                {t('calculators.annualSavings.education.description')}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{t('calculators.annualSavings.education.strategies')}</h4>
                <ul className="space-y-1 ml-4">
                  {(t('calculators.annualSavings.education.strategiesList', { returnObjects: true }) as string[]).map((strategy, index) => (
                    <li key={index}>• {strategy}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{t('calculators.annualSavings.education.ruleOfThumb')}</h4>
                <ul className="space-y-1 ml-4">
                  {(t('calculators.annualSavings.education.rulesList', { returnObjects: true }) as string[]).map((rule, index) => (
                    <li key={index}>• {rule}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm">
                  <strong>{t('calculators.annualSavings.education.disclaimer').split(':')[0]}:</strong> {t('calculators.annualSavings.education.disclaimer').split(':')[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}