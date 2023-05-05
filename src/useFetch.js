import { useState,useEffect } from "react";

//here we are creating a custom hook--i.e a hook which we can use repeatedly multiple timesat different places
const  useFetch= (url) => {  //url is going to be the link to the server from where we have to fetch the data.

    const [blogs, setBlogs]=useState(null);
    const [error, setError]=useState(null);
    const [pending,setpending]=useState(true); 

    useEffect(()=>{  
        const abortCont= new AbortController();
        

        fetch(url,{signal:abortCont.signal})
        .then(res=>{  
          
            if(!res.ok)
            {
                throw Error('No response')  
            }
            return res.json();
        } )
        .then(data=>{
            setBlogs(data)
            setpending(false)
            setError(null);
        })
        
        .catch(err=>{
            if(err.name==="AbortError")
            {
                console.log('fetch aborted');
            }
            else{
                setpending(false);//we dont want the states to be updated if it is an abort error.i.e basically we dont want react to catch the abortError
                setError(err.message);
            }
         
        }) 
        return () => abortCont.abort();

    },[url])  //useEffect will be invoked at the start and whenever the url changes. 

    return {blogs,error,pending} //we are returning an object

  
}
export default useFetch;
 

//When we are on the home page-- fetching process starts. But if we switch the page before fetching is completed it throws an error as it
//cannot complete the fetching process on the homepage as it is not present in the browser.So in order to solve this problem we must stop the
// fetching process once we switch to another page--and this is done with the help of cleanup and AbortController 
