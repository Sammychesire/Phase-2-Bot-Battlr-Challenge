import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, handleDelete}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick= {handleClick} handleDelete= {handleDelete}/> )}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
