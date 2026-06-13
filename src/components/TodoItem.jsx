export default function TodoItem({item, deleteTodo, toggleComplete, setEditId}) {

    return(<>
        <div className="grid grid-cols-6 gap-2 p-2">
            <input type="checkbox"     checked={item.completed} onChange={() => toggleComplete(item.id)} className="h-8"  />
            <span  className="col-span-2 text-balance">{item.title}</span>
            <button className="bg-red-500 text-white px-2 py-1 rounded-lg h-10" onClick={() => deleteTodo(item.id)}>Delete</button>
            <button  className="bg-blue-500 text-white px-2 py-1 rounded-lg h-10" onClick={() => setEditId(item.id)}>Edit</button>
            <button className="bg-green-500 text-white px-2 py-1 rounded-lg h-10" onClick={() => toggleComplete(item.id)}>Complete</button>
            
        </div></>
    )
}