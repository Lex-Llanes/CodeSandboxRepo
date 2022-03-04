import "./styles.css";
import { useState } from "react";
const COLORS = ["white", "red", "blue", "black", "cream"];

function RegisterYourCatForm() {
  const [petStats, setStats] = useState({
    petName: "",
    petColor: "",
    petAge: "",
    petHabits: ""
  });

  //Handles the submit button by preventing refresh of the page
  //by preventing default then consoling the stats of the pet
  //based on the values of the input from the user
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(petStats);
  };

  return (
    <form>
      <h2>Register Your Cat</h2>

      <label>Name*:</label>
      <input
        value={petStats.perName}
        //The HTML5 form validation
        type="text"
        required
        className="petName"
        placeHolder="Enter Pet Name Here"
        name="petName"
      />
      {!petStats.petName ? (
        <div style={{ color: "red" }}>Please enter a valid pet name</div>
      ) : null}
      <label>Color*:</label>
      <select>
        <option value={petStats.petColor}>Select color</option>
        {COLORS.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <label>Age*:</label>
      <input
        value={petStats.petAge}
        classname="petAge"
        placeHolder="Enter Pet Age Here"
        name="petAge"
      />
      <label>Habits:</label>
      <textarea
        value={petStats.petHabits}
        className="petHabits"
        placeHolder="Enter any pet habits here"
        name="petHabits"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <RegisterYourCatForm />
    </div>
  );
}
