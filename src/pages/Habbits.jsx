import HabbitCard from '../components/habbits/HabbitCard'
import {useState}from 'react'
import {useEffect}from 'react'
export default function Habits() {

         const[habits,sethabits]=useState( [])
const[newhabit,setnewhabit] =useState("");


 useEffect(() => {

    
      const habits = JSON.parse(
  localStorage.getItem("habits") || "[]"
);

    const today = new Date().toDateString();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayString = yesterday.toDateString();

    const updatedHabits = habits.map((item) => {

        let updatedItem = { ...item };

        if (updatedItem.lastCompleted !== today) {
            updatedItem.completedToday = false;
        }

        if (
            updatedItem.lastCompleted !== today &&
            updatedItem.lastCompleted !== yesterdayString
        ) {
            updatedItem.streak = 0;
        }

        return updatedItem;

    });

    sethabits(updatedHabits);

    localStorage.setItem(
        "habits",
        JSON.stringify(updatedHabits)
    );

}, []);

function handleEdit(id1,val){

  let temp= habits.map((item)=>{

    if(item.id===id1){
 return {
  ...item,
  title:val,

 }

    }

    return item
  })
  localStorage.setItem('habits',JSON.stringify(temp))
  sethabits(temp)
}
function handleDone(id1) {

  let temp = habits.map((item) => {

    if (item.id === id1) {
  if(item.lastCompleted===new Date().toDateString())return item
      return {
        ...item,
        completedToday: true,
        lastCompleted: new Date().toDateString(),
        streak:item.streak+1
      };

    }

    return item;

  });

  sethabits(temp);
  localStorage.setItem('habits',JSON.stringify(temp))

}
function handleAdd(){
    if(newhabit==="")return 
  let temp={
    id:Date.now(),
    title:`${newhabit}`,
     streak: 0,
    completedToday:false,
    lastCompleted: "null"

  }
  let temp1=[...habits,temp]
    sethabits(temp1)
    localStorage.setItem('habits',JSON.stringify(temp1))
    setnewhabit("") 
}

    return (
      <div className='flex flex-col gap-4'>  
      
      <div className='flex gap-2'>
        <input type='text' className='border-1 w-64 ' placeholder='add habit...'   value={newhabit}onChange={(e)=>{setnewhabit(e.target.value)}}  onKeyDown={
            (e)=>{
                 if(e.key==='Enter')  handleAdd()
            }
        }></input>
        <button className='bg-blue-200 hover:bg-blue-400  border-2 rounded-xl p-2' onClick={handleAdd} >add</button>
      </div>
      
      
      <div  className='grid grid-cols-2 gap-4'>
         {
  habits.map(item => (
    <HabbitCard
      key={item.id}
      item={item}
      handleDone={handleDone}
      handleEdit={handleEdit}
    />
  ))
}
         
        </div></div>
    );
}
