import React from "react";
import "./App.css";
import Accordian from "./state-drills/Accordian";

const sectionsArr = [
  {
    title: "Section 1",
    content:
      "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
  },
  {
    title: "Section 2",
    content:
      "2. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 3",
    content:
      "3. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordian sections={sectionsArr} />
      </div>
    );
  }
}

export default App;
