type propsType = {
    tipPerson: number;
    totalPerson: number;
    handleReset: () => void;
};

const Info = ({ tipPerson, totalPerson, handleReset }: propsType) => {    
    return (
        <div className="info">
            <div className="price-info">
                <div className="item">
                    <div>
                        <h2>Tip Amount</h2>
                        <p>/ person</p>
                    </div>
                    <span>${tipPerson.toFixed(2)}</span>
                </div>
                <div className="item">
                    <div>
                        <h2>Total</h2>
                        <p>/ person</p>
                    </div>
                    <span>${totalPerson.toFixed(2)}</span>
                </div>
            </div>
            <button onClick={handleReset}>RESET</button>
        </div>
    );
};

export default Info;
