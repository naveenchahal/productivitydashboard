export default function JobCard({job}){

return(
    <div class="flex flex-col items-center gap-4 border-4  rounded-xl p-4 inset-shadow-sm bg-green-100 w-auto">
     
      <h1>{job.title}</h1>
      <div className="grid grid-cols-2 gap-4 w-auto">
        <p>Likes({job.reactions.likes})</p>
         <p>Dislikes({job.reactions.dislikes})</p>
         <p>Views({job.views})</p>
      </div>
    </div>
  );
}