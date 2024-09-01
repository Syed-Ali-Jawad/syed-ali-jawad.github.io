import { useEffect, useState } from "react";
import AddExerience from "./AddExperience";

export default function Experiences() {
  return (
    <div className="experiences">
      <h1>Experiences</h1>
      <div className="experiences-div">
        <AddExerience totalExperinces={1} />
        <AddExerience totalExperinces={2} />
      </div>
    </div>
  );
}
