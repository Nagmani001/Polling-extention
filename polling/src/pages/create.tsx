import { useState } from "react"

export default function Create() {
  const [title, setTitle] = useState("");
  console.log(title);
  function addOption() {
    alert("option added")
  }
  return <div className="popup-container">
    <input onChange={(e: any) => {
      setTitle(e.target.value)
    }} placeholder="title" type="text" />
    <button onClick={addOption}>add option</button>
  </div>
}
