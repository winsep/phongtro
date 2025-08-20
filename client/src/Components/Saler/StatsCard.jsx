export function StatsCard({ title, value }){
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm border-gray-100">
      
      <div className="mt-2 text-xl font-semibold">{value}</div>
      <div className="text-sm text-gray-500">{title}</div>
    </div>
  );
}