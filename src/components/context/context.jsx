"use client"
const { createContext, useState, useEffect } = require("react");
export const Carditems=createContext(null)



export default function context({children}){
    let [items,setitems] =useState([])
    let [total,settotal]=useState(0)
        function handelsetitem(i){
            if(!items.includes(i)){
                const newItems = [...items, i];
            setitems(newItems);
            }
            
        }
        let a=0
        useEffect(()=>{
            items.map((i)=>{
                a+=i.price
            })
            settotal(a)
        },[items])
    
    let d={items , handelsetitem,total}
    return(
        <Carditems.Provider value={d}>
        {children}
        </Carditems.Provider>
    )
}