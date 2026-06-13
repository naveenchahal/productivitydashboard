
let timing="good morning"

let hours = new Date().getHours();

if (hours < 12) {
  timing = "Good Morning";
}
else if (hours < 18) {
  timing = "Good Afternoon";
}
else {
  timing = "Good Evening";
}

export default function WelcomeCard(){


   return( <>
         <div className="flex flex-col items-center gap-4 border-4  rounded-xl p-4 inset-shadow-sm bg-sky-500">
            <h1>Welcome to Your Productivity Dashboard!</h1>
            <h2>{timing}, Naveen!</h2>
            <p>Track your habits, manage your todos, and jot down your notes all in one place.</p>
        </div>
    </>)
    }