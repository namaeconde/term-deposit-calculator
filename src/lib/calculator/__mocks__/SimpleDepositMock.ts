import { InterestPaidFrequency, InvestmentTermFormat } from "../types";

export const MOCK_1K_DEPOSIT_YEAR_AT_MATURITY = {
    depositAmount: 1000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.YEAR,
    interestPaidFrequency: InterestPaidFrequency.AT_MATURITY
}

export const MOCK_1K_DEPOSIT_MONTH_AT_MATURITY = {
    depositAmount: 1000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.MONTH,
    interestPaidFrequency: InterestPaidFrequency.AT_MATURITY
}

export const MOCK_1K_DEPOSIT_YEAR_MONTHLY = {
    depositAmount: 1000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.YEAR,
    interestPaidFrequency: InterestPaidFrequency.MONTHLY
}

export const MOCK_25K_DEPOSIT_MONTH_MONTHLY = {
    depositAmount: 25000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.MONTH,
    interestPaidFrequency: InterestPaidFrequency.MONTHLY
}

export const MOCK_1K_DEPOSIT_YEAR_QUARTERLY = {
    depositAmount: 1000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.YEAR,
    interestPaidFrequency: InterestPaidFrequency.QUARTERLY
}

export const MOCK_25K_DEPOSIT_MONTH_QUARTERLY = {
    depositAmount: 25000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.MONTH,
    interestPaidFrequency: InterestPaidFrequency.QUARTERLY
}

export const MOCK_1K_DEPOSIT_YEAR_ANNUALLY = {
    depositAmount: 1000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.YEAR,
    interestPaidFrequency: InterestPaidFrequency.ANNUALLY
}

export const MOCK_25K_DEPOSIT_MONTH_ANNUALLY = {
    depositAmount: 25000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.MONTH,
    interestPaidFrequency: InterestPaidFrequency.ANNUALLY
}
