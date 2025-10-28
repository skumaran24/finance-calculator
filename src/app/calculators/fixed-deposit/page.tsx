'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateFixedDeposit } from '@/utils/calculations';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FixedDepositCalculator() {
  const { t, i18n } = useTranslation();
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(7.5);
  const [time, setTime] = useState<number>(3);
  const [compoundingFrequency, setCompoundingFrequency] = useState<number>(4);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    const calculationResult = calculateFixedDeposit({
      principal,
      rate,
      time,
      compoundingFrequency,
    });
    setResult(calculationResult);
  };

  const formatCurrency = (amount: number) => {
    const currency = i18n.language === 'ms' ? 'MYR' : 'USD';
    const currencySymbol = i18n.language === 'ms' ? 'RM' : '$';
    
    return new Intl.NumberFormat(i18n.language === 'ms' ? 'ms-MY' : 'en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title={t('calculators.fixedDeposit.pageTitle')}
      description={t('calculators.fixedDeposit.pageDescription')}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Calculator className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">{t('calculators.fixedDeposit.investmentDetails')}</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.fixedDeposit.principalAmount')} ({t('common.currency')})
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.fixedDeposit.principalPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.fixedDeposit.annualInterestRate')}
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.fixedDeposit.interestRatePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.fixedDeposit.timePeriod')}
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder={t('calculators.fixedDeposit.timePeriodPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('calculators.fixedDeposit.compoundingFrequency')}
              </label>
              <select
                value={compoundingFrequency}
                onChange={(e) => setCompoundingFrequency(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              >
                <option value={1}>{t('calculators.fixedDeposit.frequencies.annually')}</option>
                <option value={2}>{t('calculators.fixedDeposit.frequencies.semiAnnually')}</option>
                <option value={4}>{t('calculators.fixedDeposit.frequencies.quarterly')}</option>
                <option value={12}>{t('calculators.fixedDeposit.frequencies.monthly')}</option>
                <option value={365}>{t('calculators.fixedDeposit.frequencies.daily')}</option>
              </select>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              {t('calculators.fixedDeposit.calculateReturns')}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">{t('calculators.fixedDeposit.results.title')}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">{t('calculators.fixedDeposit.results.initialInvestment')}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.totalInvestment)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">{t('calculators.fixedDeposit.results.totalInterestEarned')}</span>
                  <span className="font-semibold text-green-600">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">{t('calculators.fixedDeposit.results.finalAmount')}</span>
                  <span className="font-bold text-xl text-green-700">{formatCurrency(result.finalAmount)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Educational Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">{t('calculators.fixedDeposit.education.title')}</h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                {t('calculators.fixedDeposit.education.description')}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{t('calculators.fixedDeposit.education.benefits')}</h4>
                <ul className="space-y-1 ml-4">
                  {(t('calculators.fixedDeposit.education.benefitsList', { returnObjects: true }) as string[]).map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{t('calculators.fixedDeposit.education.compoundingImpact')}</h4>
                <ul className="space-y-1 ml-4">
                  {(t('calculators.fixedDeposit.education.compoundingList', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index}>• {item}</li>
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