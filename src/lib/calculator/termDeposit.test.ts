import { describe, expect, test } from '@jest/globals';
import { calculateSimpleBalance } from './termDeposit';
import { TermDepositInput } from "./types";
import {
    MOCK_1K_DEPOSIT_MONTH_AT_MATURITY,
    MOCK_1K_DEPOSIT_YEAR_ANNUALLY, MOCK_1K_DEPOSIT_YEAR_AT_MATURITY,
} from "./__mocks__/SimpleDepositMock";

describe("calculateSimpleBalance", () => {
    const testCases = [
        [MOCK_1K_DEPOSIT_YEAR_AT_MATURITY, 1033], // [input, balance]
        [MOCK_1K_DEPOSIT_MONTH_AT_MATURITY, 1003]
    ]

    test.each(testCases)(
        'should return simple balance',
        (input, balance) => {
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
})