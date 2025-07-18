import { CompoundingFactor, InterestPaidFrequency, TermDepositInput } from "./types";
import { convertInterestRateInDecimal, convertInvestmentTermInYears } from "../../utils/converters";

/**
 * Calculates balance for simple interest paid at maturity using formula rounded to the nearest value:
 * balance = depositAmount * (1 + ((interestRate/100) * investmentTerm)
 *
 * @param input
 * @returns balance
 */
export function calculateSimpleBalance({ depositAmount, interestRate, investmentTerm, investmentTermFormat,
                                           interestPaidFrequency }: TermDepositInput): number {
    if (interestPaidFrequency !== InterestPaidFrequency.AT_MATURITY) {
        throw new Error("Invalid Interest Paid Frequency, expected AT_MATURITY value.");
    }

    const investmentTermInYears = convertInvestmentTermInYears(investmentTerm, investmentTermFormat);
    const interestInDecimal = convertInterestRateInDecimal(interestRate);

    const balance = depositAmount * (1 + (interestInDecimal * investmentTermInYears));
    return Math.round(balance);
}

/**
 * Calculates balance for compounding interest paid using formula rounded to the nearest value,
 * where:
 * compoundingFactor = 12 if interestPaidFrequency is "monthly"
 * compoundingFactor = 4 if interestPaidFrequency is "quarterly"
 * compoundingFactor = 1 if interestPaidFrequency is "annually"
 *
 * balance = depositAmount * ((1 + (interestRate/100) / compoundingFactor)**(compoundingFactor * investmentTerm))
 *
 * @param input
 * @returns balance
 */
export function calculateCompoundBalance({ depositAmount, interestRate, investmentTerm, investmentTermFormat,
                                             interestPaidFrequency }: TermDepositInput) {
    if (interestPaidFrequency === InterestPaidFrequency.AT_MATURITY) {
        throw new Error("Invalid Interest Paid Frequency, expected to value: MONTHLY, QUARTERLY or ANNUALLY.");
    }

    let compoundingFactor = CompoundingFactor.ANNUALLY;
    if (interestPaidFrequency === InterestPaidFrequency.MONTHLY) compoundingFactor = CompoundingFactor.MONTHLY;
    if (interestPaidFrequency === InterestPaidFrequency.QUARTERLY) compoundingFactor = CompoundingFactor.QUARTERLY;

    const investmentTermInYears = convertInvestmentTermInYears(investmentTerm, investmentTermFormat);
    const interestInDecimal = convertInterestRateInDecimal(interestRate);
    const balance = depositAmount * ((1 + interestInDecimal/compoundingFactor)**(compoundingFactor*investmentTermInYears));
    return Math.round(balance);
}
