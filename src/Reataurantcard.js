 




const Reataurantcard=(props)=>{
    const {resData}=props;
    const {info}=resData;
    //const {info}=card;
    return (
        <div className="card m-2 sm:m-3 p-4 w-full max-w-[320px] transition-transform hover:-translate-y-0.5" >
            <div className="relative">
              <img  className="res-logo rounded-lg w-full h-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId}  />
            </div>
            <h3 className="font-bold pt-3 text-lg line-clamp-1">{info.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{info.cuisines.join(", ") }</p>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-700">
              <span className="truncate max-w-[60%]">{info.locality}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-green-700 font-medium border border-green-100">★ {info.avgRating}</span>
            </div>
        </div>
    )
}



//highger order component  
export const withPromotedlabel=(Reataurantcard)=>{
    return(props)=>{
       return(
       <div className="relative">
            <span className="absolute left-2 top-2 z-10 rounded-md bg-black/80 text-white px-2 py-1 text-xs tracking-wide">OPENED</span>
           <Reataurantcard  {...props}/>
        </div>
       );
};
};





export default Reataurantcard;