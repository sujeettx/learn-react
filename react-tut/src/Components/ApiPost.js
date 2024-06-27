import React, { useState } from "react";
function ApiPost() {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [Status, setStatus] = useState("");
  const [Department, setDepartment] = useState("");
  const [Subject, setSubject] = useState("");

  const SubmitData = () => {
    console.log(name, age, Subject, Department, Status);
    let Data = ({name,age,Status,Department,Subject})
    fetch("http://localhost:4900/",{
        method:'POST',
        headers:{
            'Accept':'Application/JSON',
            'Content-Type':'Application/JSON'
        },
        body:JSON.stringify(Data)
    }).then((result)=>{
        console.log(`result: ${result}`);
    })
  };
  return (
    <div>
      <span>enter your name</span>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <br />
      <span>enter your age</span>
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <span>enter your status</span>
      <input
        type="text"
        name="status"
        value={Status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <br />
      <br />
      <span>enter your dapartment</span>
      <input
        type="text"
        name="department"
        value={Department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <br />
      <br />
      <span>enter your subject</span>
      <input
        type="text"
        name="subject"
        value={Subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={SubmitData}>
        {" "}
        submit data
      </button>
    </div>
  );
}

export default ApiPost;
