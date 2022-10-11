import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect,useState } from "react";
function BotsPage() {
  //start here with your code for step one
const botsApi= 'http://localhost:8002/bots'
const [bots, setBots] = useState([]);
const [army, setArmy] = useState([]);

function enlist(bot){
  if (army.includes(bot)) return;
  setArmy((army) => [...army, bot])
}
function retire(bot) {
  setArmy((army) => army.filter((it) => it.id !== bot.id));
}

useEffect(() => {
fetch(botsApi)
 .then((res)=> res.json())
 .then((data) =>setBots(data))
},[])

function handleDelete(bot){
fetch(`http://localhost:8002/bots/${bot.id}`, {
  method: "DELETE",
}).then(() => {
  setBots((bots) => bots.filter((it) => it.id !== bot.id));
  setArmy((army) => army.filter((it) => it.id !== bot.id));
})
}


  return (
    <div>
      <YourBotArmy bots={army} handleClick={retire} handleDelete={handleDelete}/>
      <BotCollection bots={bots} handleClick={enlist} handleDelete={handleDelete}/>
    </div>
  )
}

export default BotsPage;
