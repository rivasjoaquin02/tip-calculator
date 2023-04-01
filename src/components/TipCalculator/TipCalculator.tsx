import Calculator from "./Calculator";
import Info from "./Info";
import "../../styles/tip-calculator.css";
import { useState } from "react";

const TipCalculator = () => {
    const [tipPerson, setTipPerson] = useState<number>(0.0);
    const [totalPerson, setTotalPerson] = useState<number>(0.0);

    const handleInfo = (tip: number, total: number) => {
        setTipPerson(tip);
        setTotalPerson(total);
    };

    const handleReset = () => {
        setTipPerson(0.0);
        setTotalPerson(0.0);
    };

    return (
        <div className="tip-calculator">
            <Calculator handleInfo={handleInfo} />
            <Info
                tipPerson={tipPerson}
                totalPerson={totalPerson}
                handleReset={handleReset}
            />
        </div>
    );
};

export default TipCalculator;
