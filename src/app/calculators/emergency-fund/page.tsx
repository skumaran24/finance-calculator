'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateEmergencyFund } from '@/utils/calculations';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function EmergencyFundCalculator() {
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Emergency Fund Calculator"
      description="Build your financial safety net. Calculate how much you need to save for emergencies and create a plan to reach your goal."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Emergency Fund Details</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Expenses ($)
              </label>
              <input
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="Enter your monthly expenses"
              />
              <p className="text-sm text-gray-500 mt-1">
                Include rent, utilities, food, transportation, and other essential expenses
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Emergency Savings ($)
              </label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="Enter current emergency savings"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Months of Expenses
              </label>
              <select
                value={targetMonths}
                onChange={(e) => setTargetMonths(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
              >
                <option value={3}>3 months (Minimum recommended)</option>
                <option value={6}>6 months (Standard recommendation)</option>
                <option value={9}>9 months (Conservative approach)</option>
                <option value={12}>12 months (Maximum security)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="Enter monthly savings amount"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Calculate Emergency Fund
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
                <h3 className="text-xl font-semibold text-gray-900">Emergency Fund Status</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Target Emergency Fund:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.targetAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.currentSavings)}</span>
                </div>
                
                {!result.isTargetMet && (
                  <>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Amount Still Needed:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(result.shortfall)}</span>
                    </div>
                    
                    {result.monthsToTarget > 0 && (
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-600">Months to Target:</span>
                        <span className="font-bold text-xl text-red-700">{result.monthsToTarget} months</span>
                      </div>
                    )}
                  </>
                )}
                
                {result.isTargetMet && (
                  <div className="bg-green-100 p-4 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-semibold">
                        Congratulations! You&apos;ve reached your emergency fund goal.
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
              <h3 className="text-xl font-semibold text-gray-900">Emergency Fund Essentials</h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                An emergency fund is a financial safety net designed to cover unexpected expenses 
                such as medical bills, job loss, or major repairs.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Recommended Timeline:</h4>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>3 months:</strong> Minimum for stable employment</li>
                  <li>• <strong>6 months:</strong> Standard recommendation for most people</li>
                  <li>• <strong>9-12 months:</strong> For irregular income or high-risk jobs</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Best Practices:</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Keep funds in a high-yield savings account</li>
                  <li>• Make it easily accessible but separate from daily spending</li>
                  <li>• Automate monthly contributions</li>
                  <li>• Only use for true emergencies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}