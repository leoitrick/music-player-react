import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-300x300.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10070",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Watercolor",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/25a182a6a21588b8f7ad5605ba1118a8ea61bdc2-300x300.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=3522",
      color: ["#8FD1E4", "#1E3252"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;