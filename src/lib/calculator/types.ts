/**
 * Allowed inputs for the term deposit calculator.
 */
export interface TermDepositInput {
    depositAmount: number;
    interestRate: number;
    investmentTerm: number;
    investmentTermFormat: InvestmentTermFormat;
    interestPaidFrequency: InterestPaidFrequency;
}

/**
 * Allowed values as investment term format.
 */
export enum InvestmentTermFormat {
    YEAR = "year",
    MONTH = "month"
}

/**
 * Allowed values as interest paid frequency.
 */
export enum InterestPaidFrequency {
    MONTHLY = "monthly",
    QUARTERLY = "quarterly",
    ANNUALLY = "annually",
    AT_MATURITY = "at_maturity"
}

/**
 * Compounding Factor is the number of times interest is compounded per year.
 * Indicates how often interest is calculated and added to the principle
 * based on the selected interest paid frequency.
 */
export enum CompoundingFactor {
    MONTHLY = 12,
    QUARTERLY = 4,
    ANNUALLY = 1
}