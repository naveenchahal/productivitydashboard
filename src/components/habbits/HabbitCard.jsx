import {useState}from 'react'

export default function HabbitCard({ item, handleDone,handleEdit }) {

     const[edit,setedit]= useState(false)
     const[input,setinput]=useState(item.title)

     function handle(){
           handleEdit(item.id,input)
           setedit(false);
     }
     
      return edit?  (<div className='flex gap-4 h-12'><input className='border-2 ' type='text'   value={input}
  onChange={(e) => setinput(e.target.value)} ></input> 
      
      <button className='border-2 rounded-xl bg-blue-300' onClick={ handle}>set</button></div>): (
    <div
      className="flex flex-col gap-3 border-2 bg-cyan-300
                 hover:bg-pink-500
                 hover:scale-105
                 hover:shadow-xl
                 transition-all duration-300
                 relative hover:z-50
                 items-center rounded-xl p-4"
    >
      <h2>{item.title}</h2>

      <h3>{`🔥 Streak: ${item.streak}`}</h3>

      <h3>
        {item.completedToday
          ? "✅ Completed today, see you tomorrow"
          : "❌ Today you forgot this"}
      </h3>

      <h3>{`Last done: ${item.lastCompleted}`}</h3>

      <div className="flex gap-2">
        <button
          className="border-2 bg-green-100 rounded-xl p-2"
          onClick={() => handleDone(item.id)}
        >
          Done
        </button>

        <button className="border-2 bg-blue-100 rounded-xl p-2" onClick={()=>setedit(true)}>
          Edit
        </button>

        <button className="border-2 bg-red-100 rounded-xl p-2">
          Delete
        </button>
      </div>
    </div>
  );
}