import { useEffect, useState } from "react";

const useOnline = () => {
    const [IsOnline, SetIsOnline] = useState(true)
    
    useEffect(() => {

        const handlerOnline = () => {
            SetIsOnline(true)
        };
        const handlerOffline = () => {
            SetIsOnline(false);
        };
         
            window.addEventListener("online", handlerOnline);
       
            window.addEventListener("offline",handlerOffline) 
      
        return () => {
            window.removeEventListener("online", handlerOnline)
            window.removeEventListener("online", handlerOffline)
        };
    },[])


    return IsOnline;  //return true || flase
}
export default useOnline;