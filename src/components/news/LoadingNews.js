import Skeleton from "react-loading-skeleton";

const LoadingNews = ({index}) => {
    return ( 
        <div className="my-2 shadow-card-news rounded-lg p-3 relative col-span-1">
            <figure className="h-52 relative -top-7 w-full mx-auto rounded-lg">
                <Skeleton height={'13rem'}/>
            </figure>
            <div className="mb-2 w-full">
                <Skeleton height={50}/>
            </div>
            <div className="my-2 w-6/12">
                <Skeleton/>
            </div>
            <p className="my-2">
                <Skeleton count={5}/>
            </p>
        </div>
     );
}
 
export default LoadingNews;