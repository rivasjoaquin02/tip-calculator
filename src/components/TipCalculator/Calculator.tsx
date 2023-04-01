import { useMemo, useState } from "react";
import { calculateTotals } from "../calculateTotals";

type propsType = {
    handleInfo: (tip: number, total: number) => void;
};

const Calculator = ({ handleInfo }: propsType) => {
    const [bill, setBill] = useState<number>(0.0);
    const [tip, setTip] = useState<number>(0.0);
    const [people, setPeople] = useState<number>(1);

    useMemo(() => {
        const { tipAmountPerson, totalPerson } = calculateTotals(
            bill,
            tip,
            people
        );

        handleInfo(tipAmountPerson, totalPerson);
    }, [bill, tip, people]);

    return (
        <div className="calculator">
            <div className="bill">
                <div>
                    <h2>Bill</h2>
                    {/* <span className="error-message">please enter valid bill</span> */}
                </div>
                <input
                    type="number"
                    step="0.01"
                    onChange={(e) => setBill(parseFloat(e.target.value))}
                    min="0.01"
                    defaultValue="1"
                    required
                />
            </div>
            <div className="select-tip">
                <h2>Select Tip %</h2>
                <div className="btns">
                    {[5, 10, 15, 25, 50].map((tipValue) => (
                        <button
                            key={tipValue}
                            onClick={() => setTip(tipValue / 100)}
                        >
                            {tipValue}%
                        </button>
                    ))}
                    <input
                        type="number"
                        id="custom-tip"
                        placeholder="Custom"
                        min="0"
                        max="100"
                        onChange={(e) =>
                            setTip(parseFloat(e.target.value) / 100)
                        }
                    />
                </div>
            </div>

            <div className="number-people">
                <div>
                    <h2>Number of People</h2>
                    {/* <span>enter a valid number of people</span> */}
                </div>
                <input
                    type="number"
                    min="1"
                    step="1"
                    defaultValue={1}
                    value={people}
                    onChange={(e) => setPeople(parseFloat(e.target.value))}
                    required
                />
            </div>
        </div>
    );
};

export default Calculator;
