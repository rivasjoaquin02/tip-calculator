export const calculateTotals = (
    bill: number,
    tip: number,
    people: number
): { tipAmountPerson: number; totalPerson: number } => {
    const perPeople: number = people >= 1 ? bill / people : bill;
    const tipAmountPerson: number = tip > 0 ? perPeople * tip : perPeople;
    const totalPerson: number = perPeople + tipAmountPerson;

    return { tipAmountPerson, totalPerson };
};
