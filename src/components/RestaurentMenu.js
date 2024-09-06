import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MEN_API } from "../utils/constants";
import Restaurentcategory from "./RestaurentCategory";




const Restaurentmenu=()=>{


    const [resInfo,setresInfo]=useState(null);
const {resId}=useParams();
const [showIndex,setshowIndex]=useState(1);

   console.log(resId);

    useEffect(()=>{
        fetchmenu();
    },[]);
     

    const umesh=MEN_API+resId;

    const fetchmenu=async ()=>{
        const data=await fetch(
            umesh);
    
        const json=await data.json();

    console.log(json)
setresInfo(json);
    };

    if(resInfo==null) return <Shimmer/>

    
    const {name,cuisines,costForTwoMessage}=resInfo.data.cards[2].card.card.info;
     const {itemCards}=resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
console.log(itemCards);
     
const categories=resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(categories);


    return (
       <div className="text-center ">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h3 className="font-bold text-lg">{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
   

   {categories.map((category,index)=>(
    <Restaurentcategory
     key={category.card.card.title} 
      data={category.card.card}
      showItems={index===showIndex?true:false}
        setshowIndex={()=>{setshowIndex(index)}}
      
      />))}
   
        

       </div> 
    );
};



export default Restaurentmenu;