import { describe, expect, test } from "@jest/globals";
import { convertInterestRateInDecimal, convertInvestmentTermInYears } from "./converters";
import { InvestmentTermFormat } from "../lib/calculator/types";

describe("convertInvestmentTermInYears", () => {
    test('should convert term in month to year', () => {
        // WHEN
        const result = convertInvestmentTermInYears(3, InvestmentTermFormat.MONTH);

        // THEN
        expect(result).toEqual(0.25);
    });

    test('should return same term value in year', () => {
        // WHEN
        const result = convertInvestmentTermInYears(3, InvestmentTermFormat.YEAR);

        // THEN
        expect(result).toEqual(3);
    });

    test('should throw error for invalid term', () => {
        // WHEN
        // THEN
        expect(() =>  convertInvestmentTermInYears(-3, InvestmentTermFormat.MONTH))
            .toThrow("Invalid investment term, cannot have zero or negative value");
        expect(() =>  convertInvestmentTermInYears(0, InvestmentTermFormat.MONTH))
            .toThrow("Invalid investment term, cannot have zero or negative value");
    });
});

describe("convertInterestRateInDecimal", () => {
    const testCases = [
        // [interestRate, interestInDecimal]
        [0.25, 0.0025],
        [1, 0.01],
        [1.1, 0.011000000000000001],
        [1.15, 0.0115],
        [10, 0.1],
        [100, 1],
        [310, 3.1],
    ];
    test.each(testCases)(
        'should convert %d to %d',
        (interestRate, interestInDecimal) => {
            expect(convertInterestRateInDecimal(interestRate)).toBe(interestInDecimal);
        }
    );
    test('should throw error for invalid interest rate', () => {
        // WHEN
        // THEN
        expect(() =>  convertInterestRateInDecimal(-3))
            .toThrow("Invalid interest rate, cannot have negative value");
    });
});
