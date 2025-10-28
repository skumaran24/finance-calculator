import { FixedDepositParams, EmergencyFundParams, AnnualSavingsParams, CalculatorResult } from '@/types/calculator';

export function calculateFixedDeposit(params: FixedDepositParams): CalculatorResult {
  const { principal, rate, time, compoundingFrequency } = params;
  const annualRate = rate / 100;
  const periodicRate = annualRate / compoundingFrequency;
  const totalPeriods = compoundingFrequency * time;
  
  const finalAmount = principal * Math.pow(1 + periodicRate, totalPeriods);
  const totalInterest = finalAmount - principal;
  
  return {
    finalAmount: Math.round(finalAmount * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalInvestment: principal,
  };
}

export function calculateEmergencyFund(params: EmergencyFundParams) {
  const { monthlyExpenses, currentSavings, targetMonths, monthlyContribution } = params;
  const targetAmount = monthlyExpenses * targetMonths;
  const shortfall = Math.max(0, targetAmount - currentSavings);
  const monthsToTarget = monthlyContribution > 0 ? Math.ceil(shortfall / monthlyContribution) : 0;
  
  return {
    targetAmount: Math.round(targetAmount * 100) / 100,
    currentSavings: Math.round(currentSavings * 100) / 100,
    shortfall: Math.round(shortfall * 100) / 100,
    monthsToTarget,
    isTargetMet: currentSavings >= targetAmount,
  };
}

export function calculateAnnualSavings(params: AnnualSavingsParams) {
  const { targetAmount, currentAge, retirementAge, expectedReturn, currentSavings } = params;
  const yearsToRetirement = retirementAge - currentAge;
  const annualReturn = expectedReturn / 100;
  
  // Future value of current savings
  const futureValueCurrentSavings = currentSavings * Math.pow(1 + annualReturn, yearsToRetirement);
  
  // Amount still needed
  const remainingAmount = Math.max(0, targetAmount - futureValueCurrentSavings);
  
  // Required annual savings (PMT calculation)
  let requiredAnnualSavings = 0;
  if (remainingAmount > 0 && yearsToRetirement > 0) {
    if (annualReturn === 0) {
      requiredAnnualSavings = remainingAmount / yearsToRetirement;
    } else {
      requiredAnnualSavings = remainingAmount * annualReturn / (Math.pow(1 + annualReturn, yearsToRetirement) - 1);
    }
  }
  
  const requiredMonthlySavings = requiredAnnualSavings / 12;
  
  return {
    targetAmount: Math.round(targetAmount * 100) / 100,
    currentSavings: Math.round(currentSavings * 100) / 100,
    futureValueCurrentSavings: Math.round(futureValueCurrentSavings * 100) / 100,
    remainingAmount: Math.round(remainingAmount * 100) / 100,
    requiredAnnualSavings: Math.round(requiredAnnualSavings * 100) / 100,
    requiredMonthlySavings: Math.round(requiredMonthlySavings * 100) / 100,
    yearsToRetirement,
  };
}