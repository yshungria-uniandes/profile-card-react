import React from "react";

//import your own components
import Avatar from "./avatar.jsx";
import Intro from "./intro.jsx";
import SkillList from "./skillList.jsx";

//create your first component
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
		  for each web dev skill that you have,
		  customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
