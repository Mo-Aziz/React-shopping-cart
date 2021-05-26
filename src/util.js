
// adding dollar sign to the price
export default function formatCurrency(num){
    return "$"+ Number(num.toFixed(1)).toLocaleString() + " ";
}