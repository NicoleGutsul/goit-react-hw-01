import propTypes from 'prop-types';
import { Table, Thead, Th, Tr} from "./Transactions.styled";

// const Transaction = ({transactions: {id, type, amount, currency} }) => {
//     return (
//         <Tr key={id}>
//             <td>{type}</td>
//             <td>{amount}</td>
//             <td>{currency}</td>
//         </Tr>
//     )
// };

export const Transactions = ({transactions}) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Tr>
            </Thead>
            <tbody>
                {transactions.map(tr => (
                   <Tr key={tr.id}>
                        <td>{tr.type}</td>
                        <td>{tr.amount}</td>
                        <td>{tr.currency}</td>
                   </Tr>   
                ))}
                
            </tbody>

        </Table>
    )
}

Transactions.propTypes = {
    type: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
}.isRequired