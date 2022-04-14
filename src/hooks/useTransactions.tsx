import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface transaction {
    id:number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt:string;
  }

  interface transactionimput{
    title:string;
    amount:number;
    type:string;
    category:string;
  }

  interface transactionproviderprops{
    children:ReactNode;
  }

  interface transactionConTextData{
    transactions:transaction[];
    createTransaction:(transaction:transactionimput) => Promise<void>;
  }

const TransactionsConText = createContext<transactionConTextData>({}as transactionConTextData);

export function TransactionProvider({children}:transactionproviderprops){
    const[transactions,setTransactions] =useState<transaction[]>([]);

    useEffect(() => {
      api.get("transactions")
      .then(response => setTransactions(response.data.transactions))
    }, []);

     async function createTransaction(transactioninput:transactionimput){
     const response = await api.post('/transactions',{
     ...transactioninput,
    createdAt: new Date(),
     })
     
    console.log (response.data.transactions)
     setTransactions([
       ...transactions,
       response.data.transactions,
     ]);
    }

return (
    <TransactionsConText.Provider value={{transactions,createTransaction}}> 
     {children}
    </TransactionsConText.Provider>
);
}

export function usetransaction (){
  const context = useContext(TransactionsConText);

  return context;
}