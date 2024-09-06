
import { useEffect, useState,useContext } from "react";
import Reataurantcard,{withPromotedlabel} from "../Reataurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";



const Body=()=>{
    const [resList,setresList]=useState([]);
    const [searchtext,setsearchtext]=useState([]);
    const [filterrest,setfilterrest]=useState([]);

    const ReataurantcardPromoted=withPromotedlabel(Reataurantcard);

useEffect(()=>{
    fetchData();
},[]);

const fetchData=async ()=>{
  const data=await fetch(
    "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
  );
  const json=await data.json();
  console.log(json);
  setresList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setfilterrest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
};

const {setUsername,loggedinuser}=useContext(UserContext)

if(resList.length==0){
    return <Shimmer/>;
}

    return(
        <div className="body">
            <div className="filter flex">
                <div className="search  m-4 p-4 flex items-center">
                    <input type="text"  className=" border-solid border-black" 
                     value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                    }}></input>
                    <button className="m-4 bg-green-400 px-4 rounded-lg"
                    onClick={()=>{
                        //filter the ui
                        console.log(searchtext)



                      const filterrest=  resList.filter( (res)=>
                        {
                            return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                            
                            
                            });
                      setfilterrest(filterrest);
                      console.log(filterrest);



                    }}>search</button>
                </div>

                <div  className="m-4 p-4 flex" >

                
                <button className="bg-green-50 px-4 py-2 rounded-lg" 
                                onClick={()=>{
                               const r=resList.filter(
                                    (res)=>res.info.avgRating>4
                                );
                                console.log(r);
                                setresList(r) ;  
                                }}>
                                          top rated restaurants</button>

                                          </div>  






                 <div className="m-4 p-4 flex items-center">
                    <label>username</label>
                    <input className="border border-black p-2"
                    value={loggedinuser}
                    onChange={(e)=> setUsername(e.target.value)}></input>
                    
                    </div>  







             </div>
            <div className="res-container break-words flex flex-wrap ">
               {
                filterrest.map((u)=>(
                   <Link to={"/restaurents/"+u.info.id}>
                   {u.info.isOpen ? <ReataurantcardPromoted   resData={u}/> :<Reataurantcard  resData={u}/>}
                     </Link>
                  )
                )
               }
                
                

            </div>
        </div>
    )
}
 export default Body;