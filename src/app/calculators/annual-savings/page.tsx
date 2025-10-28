'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateAnnualSavings } from '@/utils/calculations';
import { TrendingUp, Target, PiggyBank, Calendar } from 'lucide-react';

export default function AnnualSavingsCalculator() {
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Annual Savings Calculator"
      description="Plan your retirement and long-term financial goals. Calculate how much you need to save annually to reach your target amount."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Retirement Planning</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Retirement Amount ($)
              </label>
              <input
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Enter your retirement goal"
              />
              <p className="text-sm text-gray-500 mt-1">
                How much money do you want to have when you retire?
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Age
              </label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Enter your current age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Planned Retirement Age
              </label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Enter planned retirement age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Expected investment return"
              />
              <p className="text-sm text-gray-500 mt-1">
                Historical stock market average is around 7-10%
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Retirement Savings ($)
              </label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Enter current savings"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Calculate Savings Plan
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Savings Plan Results</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Retirement Goal:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.targetAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.currentSavings)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Future Value of Current Savings:</span>
                  <span className="font-semibold text-green-600">{formatCurrency(result.futureValueCurrentSavings)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Years to Retirement:</span>
                  <span className="font-semibold text-gray-900">{result.yearsToRetirement} years</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Additional Amount Needed:</span>
                  <span className="font-semibold text-red-600">{formatCurrency(result.remainingAmount)}</span>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Required Annual Savings:</span>
                    <span className="font-bold text-xl text-blue-700">{formatCurrency(result.requiredAnnualSavings)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Required Monthly Savings:</span>
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
              <h3 className="text-xl font-semibold text-gray-900">Retirement Planning Tips</h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Retirement planning is crucial for financial security. The earlier you start, 
                the more time your money has to grow through compound interest.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Strategies:</h4>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Start Early:</strong> Even small amounts can grow significantly over time</li>
                  <li>• <strong>Automate Savings:</strong> Set up automatic transfers to retirement accounts</li>
                  <li>• <strong>Diversify Investments:</strong> Don&apos;t put all eggs in one basket</li>
                  <li>• <strong>Take Advantage of Employer Match:</strong> Free money from 401(k) matching</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Rule of Thumb:</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Save 10-15% of your income for retirement</li>
                  <li>• Aim to replace 70-90% of pre-retirement income</li>
                  <li>• Consider inflation in your planning (3% annually)</li>
                  <li>• Review and adjust your plan annually</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> This calculator provides estimates based on the inputs provided. 
                  Consult with a financial advisor for personalized retirement planning advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}