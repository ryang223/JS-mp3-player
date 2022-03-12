import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState([
    {
      title:"I Speed At Night",
      artist:"Dio ",
      img_src:"./images/",
      src:"./music/"
    },
    {
      title:"Vital Signs",
      artist:"Rush",
      img_src:"./images/",
      src:"./music/"
    },
    {
      title:"Them Bones",
      artist:"Alice in Chains",
      img_src:"./images/",
      src:"./music/"
    },
    {
      title:"Message in a Bottle",
      artist:"The Police",
      img_src:"./images/",
      src:"./music/"
    },
    {
      title:"I Ran (So Far Away)",
      artist:"A Flock of Seagulls",
      img_src:"./images/
      src:"./music/"
    },
  ])

  return (
    <div className="App">
      Components HERE
    </div>
  );
}

export default App;
