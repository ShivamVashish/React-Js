import { use, useState } from "react"
import FoodCart from "./Foodcart"
const Fooditems = [
    {id:1,food:'Pizza',Price:'200'},
    {id:2,food:'Pasta',Price:'150'},
    {id:3,food:'Momos',Price:'60'},
    {id:4,food:'Barfi',Price:'350'},
    {id:5,food:'Panner',Price:'200'},
    {id:6,food:'Chawmin',Price:'50'},
    {id:7,food:'Burger',Price:'600'},
    {id:8,food:'Chilli',Price:'100'},
    {id:9,food:'Smosa',Price:'40'},
    {id:10,food:'Bread',Price:'250'}
]

export default function Card(){
    return(
        <div className="flex justify-center flex-wrap gap-[20px]">
            {Fooditems.map((value)=>{
                return(
                    <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })
            }
        </div>
    )
}