export interface CalculatorResult {
  finalAmount: number;
  totalInterest: number;
  totalInvestment: number;
}

export interface FixedDepositParams {
  principal: number;
  rate: number;
  time: number;
  compoundingFrequency: number;
}

export interface EmergencyFundParams {
  monthlyExpenses: number;
  currentSavings: number;
  targetMonths: number;
  monthlyContribution: number;
}

export interface AnnualSavingsParams {
  targetAmount: number;
  currentAge: number;
  retirementAge: number;
  expectedReturn: number;
  currentSavings: number;
}