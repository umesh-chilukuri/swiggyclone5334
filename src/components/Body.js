
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
            <div className="container-app">
                <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 w-full max-w-xl">
                        <input type="text"  className="input" 
                         placeholder="Search restaurants..."
                         value={searchtext} onChange={(e)=>{
                            setsearchtext(e.target.value);
                        }}></input>
                        <button className="btn-primary"
                        onClick={()=>{
                            //filter the ui
                            console.log(searchtext)



                          const filterrest=  resList.filter( (res)=>
                            {
                                return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                                
                                
                                });
                          setfilterrest(filterrest);
                          console.log(filterrest);



                        }}>Search</button>
                    </div>

                    <div  className="flex items-center gap-2" >
                        <button className="btn-secondary" 
                                        onClick={()=>{
                                       const r=resList.filter(
                                            (res)=>res.info.avgRating>4
                                        );
                                        console.log(r);
                                        setresList(r) ;  
                                        }}>
                                                  Top rated</button>
                    </div>  

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input className="input"
                        value={loggedinuser}
                        onChange={(e)=> setUsername(e.target.value)}></input>
                    </div>  
                </div>
            </div>
            <div className="container-app">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
        </div>
    )
}
 export default Body;