export default function DeviceMockup({ children, type = "laptop" }) {
  return (
    <div className="relative">
      <div className={`border-4 border-gray-800 rounded-lg overflow-hidden bg-white ${
        type === "laptop" ? "w-full max-w-3xl" : "w-80 mx-auto"
      }`}>
        <div className="bg-gray-100 p-2 flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}