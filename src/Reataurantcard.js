 




const Reataurantcard=(props)=>{
    const {resData}=props;
    const {info}=resData;
    //const {info}=card;
    return (
        <div className="m-4 p-4 w-[260px] rounded-lg bg-gray-200  hover:bg-gray-400  " >
            <img  className="res-logo rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId}  />
            <h3 className="font-bold py-4 text-lg">{info.name}</h3>
            <h4>{info.cuisines.join(",") }</h4>
            <h4>{info.locality}</h4>
            <h4>{info.avgRating}</h4>
        </div>
    )
}



//highger order component  
export const withPromotedlabel=(Reataurantcard)=>{
    return(props)=>{
       return(
       <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                OPENED
           </label>
           <Reataurantcard  {...props}/>
        </div>
       );
};
};





export default Reataurantcard;