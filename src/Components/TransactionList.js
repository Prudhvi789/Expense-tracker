import { Button, Card, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const context = useContext(GlobalContext);

    return (
    <div className="transaction">
        <Typography variant="h6">History</Typography>
           {context.transactions.map((ele)=>{
               return (
                <>
                    <Card className={ele.amount > 0 ? 'green' : 'red'} key={ele.id}>
                        <span>{ele.text}</span><span>{ele.amount > 0 ? '+' : '-' }{ele.amount}</span>
                    </Card>
                    <Button onClick={()=>{context.deleteTransaction(ele.id)}}>Delete</Button> 
                </>
               )
           })} 
    </div>
)}

export default TransactionList;