

const Shimmer=()=>{

    return (
    <div className="container-app">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className="card p-4 animate-pulse">
                    <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                    <div className="mt-3 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}


export default Shimmer;