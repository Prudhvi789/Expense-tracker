import { Button, Card, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const context = useContext(GlobalContext);

    return (
    <div >
        <Typography variant="h6">History</Typography>
           {context.transactions.map((ele)=>{
               return (
                <div key={ele.id} className="transaction">
                    <Button onClick={()=>{context.deleteTransaction(ele.id)}}>Delete</Button>
                    <Card className={(ele.amount > 0 ? 'green' : 'red') + 'transactionCard'}  >
                        <span>{ele.text}</span><span>{ele.amount > 0 ? '+' : '-' }{ele.amount}</span>
                    </Card>

                </div>
               )
           })} 
    </div>
)}

export default TransactionList;