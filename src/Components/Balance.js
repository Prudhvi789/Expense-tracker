import { Card, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const context = useContext(GlobalContext);

    return (
    <div className="balance">    
        <Typography>Your Balance</Typography>   
        <Typography variant="h5">${
            context.transactions.reduce((acc,ele)=>( acc += ele.amount),0).toFixed(2) }</Typography>
        <Card className="card">
            <span>
                <Typography>Income</Typography>
                <Typography style={{color : '#0ad90a'}}>${
            context.transactions.filter(ele => ele.amount > 0 ).reduce((acc,ele)=>( acc += ele.amount),0).toFixed(2) }</Typography>
            </span>
            <span>
                <Typography>Expense</Typography>
                <Typography style={{color : '#ff1212'}}>${
            Math.abs(context.transactions.filter(ele => ele.amount < 0 ).reduce((acc,ele)=>( acc += ele.amount),0)).toFixed(2) }</Typography>
            </span>
        </Card>
    </div>    
)}

export default Balance;