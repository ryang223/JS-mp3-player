import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState([
    {
      title:"I Speed At Night",
      artist:"Dio ",
      img_src:"./images/song-1.jpeg",
      src:"./music/I-speed-at-night.mp3"
    },
    {
      title:"Vital Signs",
      artist:"Rush",
      img_src:"./images/song-2.jpeg",
      src:"./music/vital-signs.mp3"
    },
    {
      title:"Them Bones",
      artist:"Alice in Chains",
      img_src:"./images/song-3.jpeg",
      src:"./music/them-bones.mp3"
    },
    {
      title:"Message in a Bottle",
      artist:"The Police",
      img_src:"./images/song-4.jpeg",
      src:"./music/message-in-a-bottle.mp3"
    },
    {
      title:"I Ran (So Far Away)",
      artist:"A Flock of Seagulls",
      img_src:"./images/song-5.jpeg",
      src:"./music/I-ran.mp3"
    },
  ])

  return (
    <div className="App">
      Components HERE
    </div>
  );
}

export default App;
