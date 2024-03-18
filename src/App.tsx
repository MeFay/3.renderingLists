import "./App.css";
import List from "./List.tsx";

function App() {
  const profsFe = [
    { id: 1, name: "Thales", candies: 95 },
    { id: 2, name: "Ricardo", candies: 37 },
    { id: 3, name: "Maria", candies: 59 },
    { id: 4, name: "Leo", candies: 65 },
    { id: 5, name: "Gabi", candies: 86 },
    { id: 6, name: "Flavio", candies: 62 },
    { id: 7, name: "Edgar", candies: 95 },
    { id: 8, name: "Caina", candies: 15 },
  ];

  const profsBe = [
    { id: 9, name: "Gi", candies: 64 },
    { id: 10, name: "Rui", candies: 46 },
    { id: 11, name: "Marcos", candies: 89 },
    { id: 12, name: "Pipinha", candies: 37 },
    { id: 13, name: "Nuno", candies: 13 },
  ];

  //&nbsp; = Non-breaking space
  profsFe.sort((a, b) => a.name.localeCompare(b.name));
  profsBe.sort((a, b) => a.name.localeCompare(b.name));
  // reverse alphabetical is profsFe.sort((a, b) => b.name.localeCompare(a.name));
  // profsFe.sort((a, b) => a.candies - b.candies);
  // reverse candy is profsFe.sort((a, b) => b.candies - a.candies);

  //const lessCandies = profsFe.filter(prof => prof.candies  < 50)
  //const mostCandies = profsFe.filter(prof => prof.candies  >= 50)
  return (
    <>
      {profsFe.length > 0 && <List items={profsFe} category={"Front-end"} />}
      {profsBe.length > 0 && <List items={profsBe} category={"Back-end"} />}
    </>
  );
}

export default App;
