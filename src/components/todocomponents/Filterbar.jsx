export default function Filterbar({filter,setFilter,count1,count2}) {

    return(<>
        <div className="flex items-center gap-2">
                <button className={`px-2 py-1 rounded-lg ${filter==="ALL"?"bg-green-500 text-white":"bg-gray-200"}`} onClick={() => setFilter("ALL")}>ALL({count1})</button>
                <button className={`px-2 py-1 rounded-lg ${filter==="ACTIVE"?"bg-green-500 text-white":"bg-gray-200"}`} onClick={() => setFilter("ACTIVE")}>ACTIVE({count1-count2})</button>
                <button className={`px-2 py-1 rounded-lg ${filter==="COMPLETED"?"bg-green-500 text-white":"bg-gray-200"}`} onClick={() => setFilter("COMPLETED")}>COMPLETED({count2})</button>
              </div></>
    )
}