import { useEffect, useState } from "react";

type propsType = {
    handleInfo: (tip: number, total: number) => void;
};

const Calculator = ({ handleInfo }: propsType) => {
    const [bill, setBill] = useState<number>(0.0);
    const [tip, setTip] = useState<number>(0.0);
    const [people, setPeople] = useState<number>(1);

    useEffect(() => {
        const perPeople: number = bill / people;
        const tipAmountPerson: number = perPeople * tip;
        const totalPerson: number = perPeople + tipAmountPerson;

        handleInfo(tipAmountPerson, totalPerson);
    }, [bill, tip, people]);

    return (
        <div className="calculator">
            <div className="bill">
                <h2>Bill</h2>
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
                    <button id="btn1" onClick={() => setTip(0.05)}>
                        5%
                    </button>
                    <button id="btn2" onClick={() => setTip(0.1)}>
                        10%
                    </button>
                    <button id="btn3" onClick={() => setTip(0.15)}>
                        15%
                    </button>
                    <button id="btn4" onClick={() => setTip(0.25)}>
                        25%
                    </button>
                    <button id="btn5" onClick={() => setTip(0.5)}>
                        50%
                    </button>
                    <input
                        type="number"
                        onChange={(e) =>
                            setTip(parseFloat(e.target.value) / 100)
                        }
                        id="btn6"
                        placeholder="Custom"
                        min="0"
                        max="100"
                    />
                </div>
            </div>

            <div className="number-people">
                <h2>Number of People</h2>
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
