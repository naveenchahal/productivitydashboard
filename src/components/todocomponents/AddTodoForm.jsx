export default function AddTodoForm({newTodo,setTodo,addTodo}) {

    return(<>
        <div className="flex gap-2">
            <input type="text" placeholder="Enter new task..." className="border-2 border-gray-300 rounded-lg p-2 flex-1" value={newTodo} onChange={(e) => setTodo(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={addTodo}>Add Task</button>
        </div></>
    )
}