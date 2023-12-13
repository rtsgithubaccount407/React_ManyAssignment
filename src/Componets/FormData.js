import React, { useState } from "react";

const FormData = () => {
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState("");
  const [ageOfUnder, setAgeOfUnder] = useState(false);

  // function FormSubmit(e) {
  //   e.preventDefault();
  //   console.log(e.target);

  //   const formuser = {
  //     name: name,
  //     password: password,
  //     ageOfUnder: ageOfUnder,
  //   };
  //   console.log(formuser);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const newuser = Object.fromEntries(formData);
    console.log(newuser);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="checkbox">Are you above 18 years </label>
          <input
            type="checkbox"
            id="checkbox"
            value={ageOfUnder}
            name="checkbox"
            onChange={() => setAgeOfUnder(!ageOfUnder)}
          />
        </div>
        <button>Submit</button>
        {/* <button onClick={FormSubmit}>Submit</button> */}
      </form>
    </div>
  );
};

export default FormData;
