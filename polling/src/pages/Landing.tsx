import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="popup-container">
      <div className="text-center text-xl font-bold">
        100xPolls
      </div>
      <div className="font-medium text-lg mt-10 text-center ">
        Create, Share, and Vote Instantly
      </div>
      <div className="flex flex-col gap-3 mt-5 items-center">
        <button onClick={() => {
          navigate("/create")
        }} className="bg-[#3259E8] border rounded-full font-medium p-2 w-24">create poll</button>
        <button
          onClick={() => {
            navigate("/join")
          }}
          className="bg-[#3259E8] border rounded-full font-medium p-2 w-24">join poll</button>
      </div>
    </div>
  );
}
