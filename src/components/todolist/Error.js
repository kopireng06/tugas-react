import { useParams } from "react-router";

const Error = () => {
    const {error} = useParams();
    return (  
        <div className="text-about">{`Halaman ${error} gaada bro`}</div>
    );
}
 
export default Error;