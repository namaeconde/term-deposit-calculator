import { InvestmentTermFormat } from "../lib/calculator/types";

/**
 * Returns investment term in years.
 *
 * If investmentTermFormat is set in "month", investmentTerm will be converted to "year" equivalent,
 * otherwise investmentTerm will be returned as is.
 *
 * @param investmentTerm - value of investment term
 * @param investmentTermFormat - format of the investment term in "year" or "month"
 */
export function convertInvestmentTermInYears(investmentTerm: number, investmentTermFormat: InvestmentTermFormat) {
    if (isNaN(investmentTerm) || investmentTerm <= 0) {
        throw new Error("Invalid investment term, cannot have zero or negative value.")    ;
    }

    if (investmentTermFormat === InvestmentTermFormat.MONTH) {
        return investmentTerm/12;
    }

    return investmentTerm;
}

/**
 * Returns interest rate in decimal equivalent.
 *
 * @param interestRate - value of interest rate in percentage
 */
export function convertInterestRateInDecimal(interestRate: number): number {
    if (isNaN(interestRate) || interestRate < 0) {
        throw new Error("Invalid interest rate, cannot have negative value.")    ;
    }

    return interestRate/100;
}