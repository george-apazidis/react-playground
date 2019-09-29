import React from "react";
import "./App.css";
import Tabs from "./state/Tabs";

const tabsProp = [
  {
    name: "First tab",
    content:
      "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
  },
  {
    name: "Second tab",
    content:
      "2. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Third tab",
    content:
      "3. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabs={tabsProp} />
      </div>
    );
  }
}

export default App;
