import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing()
{
    const data=useLocation()
    console.log(data.state.user)
 return(
    <div className="bg-black p-16">  
    <div className="bg-[rgb(239,239,239)] p-10 border rounded-md">
  
      {/*Header*/}
      <Header username={data.state.user}/>
  
       {/*card*/}
      <div className="flex justify-between gap-7 my-5 flex-wrap">
    <Card bgcolor={"#8272DA"} title={"23"}subtitle={"Chennai"}/>
    <Card bgcolor={"#FD6663"} title={"December"}subtitle={"14:03:34"}/>
    <Card bgcolor={"#FCA201"} title={"Build Using "}subtitle={"React"}/>
   
  
     </div>
      {/*Todocontainer*/}
  
     <TodoContainer/>
      </div>  
  
  
      </div>
    );

 
}
export default Landing