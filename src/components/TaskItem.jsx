export default function TaskItem({ title, status }) {

  const bgColor =
   status === "Completed"
  ? "bg-green-100"
  : status === "Pending"
  ? "bg-yellow-100"
  : "bg-red-100"

  return (
    <div className={`flex gap-4 border-2 border-gray-300 rounded-lg p-4 ${bgColor}`}>
      <h3>{title}</h3>
      <p>Status: {status}</p>
    </div>
  );
}