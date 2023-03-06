import "./App.css";
import { useState } from "react";
import { Input } from "./components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { USERNAME, USERSURNAME } from "./Redux/ActionTypes";

function App() {

  const dispatch = useDispatch();
  const username  = useSelector((state) => state.user.username);
  const usersurname  = useSelector((state) => state.user.usersurname);
  

  console.log(username);
  console.log(usersurname);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [text, setText] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit1 = (e) => {
    e.preventDefault();
    dispatch({ type: USERNAME, payload: name });
    // console.log(name);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(surname);
    dispatch({ type: USERSURNAME, payload: surname });
    // console.log(surname);
  };

  const reduxName = () => {
    setLast("Name");
    setText(username);
  };

  const reduxSurname = () => {
    setLast("Surname");
    setText(usersurname);
  };

  return (
    <div className="p-10 bg-[#121212] h-screen space-y-10">
      <div className="w-1/3 space-y-5">
        <Input
          labelName="Your Name *"
          placeholder="Shrey"
          inputType="text"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit1}>Submit</button>
      </div>
      <div className="w-1/3 space-y-5">
        <Input
          labelName="Your Surname *"
          placeholder="Somani"
          inputType="text"
          value={surname}
          handleChange={(e) => setSurname(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit2}>Submit</button>
      </div>
      <hr className="w-1/2" />
      <div className="space-x-5">
        <button className="btn !bg-[#8f44fd]" onClick={reduxName}>Name</button>
        <button className="btn !bg-[#8f44fd]" onClick={reduxSurname}>Surname</button>
        {(text && <p className="text-white pt-5 !-ml-0"><span className="text-[#999]">Last updated {last} is</span>  {text}</p>)}
      </div>
    </div>
  );
}

export default App;
