import React, { useState } from "react";
import State from "../state/Main";

function AnnouncementBarForm(props) { 
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [hideafterseconds, sethideafterseconds] = useState("");
  const [animate, setanimate] = useState("");
  const [background_color, setbackground_color] = useState("black");
  const [text_color, settext_color] = useState("white");
  const [showonclick, setShowonclick] = useState("hide");
  console.log(text_color)

  
  return (
      <>
      <div className={hideafterseconds}>
            <div className={showonclick}>
                <div className=""> 
                    
                    <div className={position} style={{background: background_color}}  >
                        <div class="close"   >
                            &times;
                        </div>
                        <p>
                            <h1 className={animate} style={{color: text_color}}>{name}</h1>
                        </p>                                                                
                    </div>
                </div> 
            </div>
        </div>
    <form>
    <table>
      <tr>
        <td> Title:</td>
        <td> <input type="text" value={name} onChange={e => setName(e.target.value)}/></td>       
      </tr>
      <tr>
        <td>Select Position</td>
        <td>
        <select value={position} onChange={e => setPosition(e.target.value)}>            
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="center">Center</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
        </select>
        </td>       
      </tr>
      <tr>
        <td>Hide After Seconds</td>
        <td><select value={hideafterseconds} onChange={e => sethideafterseconds(e.target.value)}>
            <option value="hide-after-5sec">5 sec</option>                               
            <option value="hide-after-10sec">10 sec</option>
            <option value="no-hide">No Hide</option>
        </select>
        </td>       
      </tr>
      <tr>
        <td>Want Animated element:</td>
        <td><select value={animate}  onChange={e => setanimate(e.target.value)}>            
            <option value="animate">Yes</option>
            <option value="no-animate">No</option>                                
        </select>
        </td>       
      </tr>
      <tr>
        <td>Background Color:</td>
        <td><input type="color" value={background_color} onChange={e => setbackground_color(e.target.value)} /></td>       
      </tr>
      <tr>
        <td>Text Color:</td>
        <td> <input type="color" value={text_color} onChange={e => settext_color(e.target.value)} /></td>       
      </tr>
      <tr>
        <td> </td>
        <td></td>       
      </tr>
    </table>
    </form>
    <button onClick={() => setShowonclick("show")}>Show Changes</button>
 
    
    </>
  );
}

export default AnnouncementBarForm;