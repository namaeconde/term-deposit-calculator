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

export const MOCK_1K_DEPOSIT_YEAR_ANNUALLY = {
    depositAmount: 1000,
    interestRate: 1.1,
    investmentTerm: 3,
    investmentTermFormat: InvestmentTermFormat.YEAR,
    interestPaidFrequency: InterestPaidFrequency.ANNUALLY
}