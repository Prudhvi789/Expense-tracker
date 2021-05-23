import { Button, FormControl, FormGroup, FormLabel, Input, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddForm = () => {
    const context = useContext(GlobalContext);
    const [text,setText] = useState("");
    const [amount,setAmount] = useState("");
    const trans = {
        id : Math.random() * 10000000,
        text : text,
        amount : +amount
    }

    const handler = (e) => {
        e.preventDefault();
        context.addTransaction(trans);
        setText('');
        setAmount('');
    }

    console.log(typeof amount);

    return (
    <FormGroup className="form">
        <Typography variant="h6">Add Transaction</Typography>
        <FormControl>
            <FormLabel >Text</FormLabel>
            <Input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}></Input>
        </FormControl>
        <FormControl>    
            <FormLabel >Amount</FormLabel>
            <Input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}}></Input>
        </FormControl>
        <Button onClick={handler}>Add</Button>
    </FormGroup>
)}

export default AddForm;