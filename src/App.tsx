import { useEffect, useState } from "react";
import { InterestPaidFrequency, InvestmentTermFormat } from "./lib/calculator/types";
import { calculateCompoundBalance, calculateSimpleBalance } from "./lib/calculator/termDeposit";

export default function App() {
    const [depositAmount, setDepositAmount] = useState(10000);
    const [interestRate, setInterestRate] = useState(1.10);
    const [investmentTerm, setInvestmentTerm] = useState(3);
    const [investmentTermFormat, setInvestmentTermFormat] = useState(InvestmentTermFormat.YEAR);
    const [interestPaidFrequency, setInterestPaidFrequency] = useState(InterestPaidFrequency.AT_MATURITY);
    const [finalBalance, setFinalBalance] = useState(0);

    useEffect(() => {
        const input = {depositAmount, interestRate, investmentTerm, investmentTermFormat, interestPaidFrequency};
        if (interestPaidFrequency === InterestPaidFrequency.AT_MATURITY) {
            const balance = calculateSimpleBalance(input);
            setFinalBalance(balance);
        } else {
            const balance = calculateCompoundBalance(input);
            setFinalBalance(balance);
        }
    }, [depositAmount, interestRate, investmentTerm, investmentTermFormat, interestPaidFrequency]);

    return (
        <div className="container">
            <h1>Term Deposit Calculator</h1>
            <div className="form">
                <label>Deposit Amount in $</label>
                <input type="number" value={depositAmount}
                       onChange={(e) => setDepositAmount(+e.target.value)}/>
                <label>Interest Rate % p.a</label>
                <input type="number" value={interestRate}
                       onChange={(e) => setInterestRate(+e.target.value)}/>
                <label>Investment term</label>
                <input type="number" value={investmentTerm}
                       onChange={(e) => setInvestmentTerm(+e.target.value)}/>
                <div className="radio-button-group">
                    <input type="radio" id="month" name="investment-term-format" value={InvestmentTermFormat.MONTH}
                           checked={investmentTermFormat === InvestmentTermFormat.MONTH}
                           onChange={() => setInvestmentTermFormat(InvestmentTermFormat.MONTH)}/>
                    <label htmlFor="month">MONTH</label>
                    <div> | </div>
                    <input type="radio" id="year" name="investment-term-format" value={InvestmentTermFormat.YEAR}
                           checked={investmentTermFormat === InvestmentTermFormat.YEAR}
                           onChange={() => setInvestmentTermFormat(InvestmentTermFormat.YEAR)}/>
                    <label htmlFor="year">YEAR</label>
                </div>
                <div>Interest Paid</div>
                <div className="radio-button-group">
                    <input type="radio" id="monthly" name="interest-paid-frequency" value={InterestPaidFrequency.MONTHLY}
                           checked={interestPaidFrequency === InterestPaidFrequency.MONTHLY}
                           onChange={() => setInterestPaidFrequency(InterestPaidFrequency.MONTHLY)}/>
                    <label htmlFor="monthly">MONTHLY</label>
                    <div> | </div>
                    <input type="radio" id="quarterly" name="interest-paid-frequency" value={InterestPaidFrequency.QUARTERLY}
                           checked={interestPaidFrequency === InterestPaidFrequency.QUARTERLY}
                           onChange={() => setInterestPaidFrequency(InterestPaidFrequency.QUARTERLY)}/>
                    <label htmlFor="quarterly">QUARTERLY</label>
                    <div> | </div>
                    <input type="radio" id="annually" name="interest-paid-frequency" value={InterestPaidFrequency.ANNUALLY}
                           checked={interestPaidFrequency === InterestPaidFrequency.ANNUALLY}
                           onChange={() => setInterestPaidFrequency(InterestPaidFrequency.ANNUALLY)}/>
                    <label htmlFor="annually">ANNUALLY</label>
                    <div> | </div>
                    <input type="radio" id="at_maturity" name="interest-paid-frequency" value={InterestPaidFrequency.AT_MATURITY}
                           checked={interestPaidFrequency === InterestPaidFrequency.AT_MATURITY}
                           onChange={() => setInterestPaidFrequency(InterestPaidFrequency.AT_MATURITY)}/>
                    <label htmlFor="at_maturity">AT MATURITY</label>
                </div>
                <div><b>Final Balance: ${finalBalance.toLocaleString()}</b></div>
            </div>
        </div>
    )
}