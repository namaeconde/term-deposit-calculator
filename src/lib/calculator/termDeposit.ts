import { InterestPaidFrequency, TermDepositInput } from "./types";
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

    return Math.round(depositAmount * (1 + (interestInDecimal * investmentTermInYears)));
}