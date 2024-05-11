
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

export  function Logged() {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/login");
  };

  return (
    <main key="1" className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">LOGGED AS USER</h1>
      <Button className="mt-6 bg-gray-900 text-gray-100" variant="default" onClick={handleClick}>
        Logout
      </Button>
    </main>
  )
}