
const Card= ({title,value,icon})=>{

      return(
        <div class="flex flex-col items-center gap-4 border-4  rounded-xl p-4 inset-shadow-sm bg-cyan-500 w-auto">
            <span class="text-4xl">{icon}</span>
          <h1>{title}</h1>
          <h3>description</h3>
          <p>{value}</p>
        </div>
      );

}

export default Card;