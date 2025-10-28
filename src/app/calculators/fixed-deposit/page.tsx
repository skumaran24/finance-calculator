'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { calculateFixedDeposit } from '@/utils/calculations';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';

export default function FixedDepositCalculator() {
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Fixed Deposit Calculator"
      description="Calculate returns on your fixed deposits with compound interest. Plan your investments and see how your money grows over time."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Calculator className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Investment Details</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Principal Amount ($)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Enter initial investment"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Enter interest rate"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period (Years)
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Enter time period"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compounding Frequency
              </label>
              <select
                value={compoundingFrequency}
                onChange={(e) => setCompoundingFrequency(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi-annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Calculate Returns
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Investment Results</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Initial Investment:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(result.totalInvestment)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Total Interest Earned:</span>
                  <span className="font-semibold text-green-600">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Final Amount:</span>
                  <span className="font-bold text-xl text-green-700">{formatCurrency(result.finalAmount)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Educational Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Understanding Fixed Deposits</h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                A fixed deposit (FD) is a financial instrument that provides a higher rate of return 
                compared to regular savings accounts, until the given maturity date.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Guaranteed returns with fixed interest rates</li>
                  <li>• Safe investment option with low risk</li>
                  <li>• Flexible tenure options</li>
                  <li>• Loan facility against FD</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Compounding Frequency Impact:</h4>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Daily:</strong> Interest compounded every day (365 times/year)</li>
                  <li>• <strong>Monthly:</strong> Interest compounded every month (12 times/year)</li>
                  <li>• <strong>Quarterly:</strong> Interest compounded every quarter (4 times/year)</li>
                  <li>• <strong>Annually:</strong> Interest compounded once per year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}