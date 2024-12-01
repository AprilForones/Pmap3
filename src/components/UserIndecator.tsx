import { useIndicate } from "@/hooks/useIndicate";

function UserIndicator() {
  const { message } = useIndicate(); // Use the hook to get the dynamic message

  return (
    <div className="user-indicator border-2 border-[#22672D] bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-semibold m-3 flex items-center justify-center">
    <p className="text-sm font-medium">{message}</p>
    </div>

  );
}

export default UserIndicator;
