import { describe, expect, test } from '@jest/globals';
import { calculateCompoundBalance, calculateSimpleBalance } from './termDeposit';
import { TermDepositInput } from "./types";
import {
    MOCK_1K_DEPOSIT_MONTH_AT_MATURITY,
    MOCK_1K_DEPOSIT_YEAR_AT_MATURITY
} from "./__mocks__/SimpleDepositMock";
import {
    MOCK_1K_DEPOSIT_YEAR_ANNUALLY,
    MOCK_1K_DEPOSIT_YEAR_MONTHLY,
    MOCK_1K_DEPOSIT_YEAR_QUARTERLY,
    MOCK_25K_DEPOSIT_MONTH_ANNUALLY,
    MOCK_25K_DEPOSIT_MONTH_MONTHLY,
    MOCK_25K_DEPOSIT_MONTH_QUARTERLY
} from "./__mocks__/CompoundDepositMock";

describe("calculateSimpleBalance", () => {
    const testCases = [
        // [scenario, input, balance]
        ["1k deposit at maturity for 3 years", MOCK_1K_DEPOSIT_YEAR_AT_MATURITY, 1033],
        ["1k deposit at maturity for 3 months", MOCK_1K_DEPOSIT_MONTH_AT_MATURITY, 1003]
    ]

    test.each(testCases)(
        'should return simple balance for %s',
        (_, input, balance) => {
            expect(calculateSimpleBalance(input as TermDepositInput)).toEqual(balance);
        }
    )

    test('should throw error if interestPaidFrequency is not AT_MATURITY', () => {
        // GIVEN
        const input = MOCK_1K_DEPOSIT_YEAR_ANNUALLY;

        // WHEN
        // THEN
        expect(() =>  calculateSimpleBalance(input))
            .toThrow("Invalid Interest Paid Frequency, expected AT_MATURITY value.");
    });
});

describe("calculateCompoundBalance", () => {
    const testCases = [
        // [scenario, input, balance]
        ["1k deposit monthly for 3 years", MOCK_1K_DEPOSIT_YEAR_MONTHLY, 1034],
        ["1k deposit quarterly for 3 years", MOCK_1K_DEPOSIT_YEAR_QUARTERLY, 1034],
        ["1k deposit annually for 3 years", MOCK_1K_DEPOSIT_YEAR_ANNUALLY, 1033],
        ["1k deposit monthly for 3 months", MOCK_25K_DEPOSIT_MONTH_MONTHLY, 25069],
        ["1k deposit quarterly for 3 months", MOCK_25K_DEPOSIT_MONTH_QUARTERLY, 25069],
        ["1k deposit annually for 3 months", MOCK_25K_DEPOSIT_MONTH_ANNUALLY, 25068],
    ]

    test.each(testCases)(
        'should return compounding balance for %s',
        (_, input, balance) => {
            expect(calculateCompoundBalance(input as TermDepositInput)).toEqual(balance);
        }
    )

    test('should throw error if interestPaidFrequency is not AT_MATURITY', () => {
        // GIVEN
        const input = MOCK_1K_DEPOSIT_MONTH_AT_MATURITY;

        // WHEN
        // THEN
        expect(() =>  calculateCompoundBalance(input))
            .toThrow("Invalid Interest Paid Frequency, expected to value: MONTHLY, QUARTERLY or ANNUALLY.");
    });
})