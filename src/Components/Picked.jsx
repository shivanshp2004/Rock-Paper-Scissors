import React, { useContext } from "react";
import { Context } from "./Context";
import { useEffect } from "react";
import Restart from "./Restart";
const Picked = () => {
  const context = useContext(Context);
  let moves = ["Rock", "Paper", "Scissors"];
  context.setCompMove(moves[Math.floor(Math.random() * moves.length)]);
  useEffect(() => {
    setTimeout(() => {
      context.setCompMoved(true);
    }, 2000);
  }, [context.move]);
  const result = () => {
    if (context.move === "Rock") {
      if (context.compMove === "Rock") {
        context.setResult("Draw");
      } else if (context.compMove === "Paper") {
        context.setResult("You Lost !!");
      } else {
        context.setResult("You Won !!");
      }
    } else if (context.move === "Paper") {
      if (context.compMove === "Paper") {
        context.setResult("Draw");
      } else if (context.compMove === "Scissors") {
        context.setResult("You Lost !!");
      } else {
        context.setResult("You Won !!");
      }
    } else {
      if (context.compMove === "Scissors") {
        context.setResult("Draw");
      } else if (context.compMove === "Rock") {
        context.setResult("You Lost !!");
      } else {
        context.setResult("You Won !!");
      }
    }
  };
  result();
  const displayColour = () => {
    if (document.getElementById("display") === null) return;
    if (context.result === "You Lost !!") {
      document.getElementById("display").style.background = "#d00000";
    } else if (context.result === "You Won !!") {
      document.getElementById("display").style.background = "#38b000";
    } else {
      document.getElementById("display").style.background = "#c9ada7";
    }
  };
  useEffect(() => {
    displayColour();
  }, [context.result, context.compMoved]);
  let moveDisplay = (move) => {
    if (move === "Rock") return "../../src/assets/fist.png";
    else if (move === "Paper") return "../../src/assets/hand-paper.png";
    else return "../../src/assets/scissors (1).png";
  };
  return (
    <div className="w-full h-[75%] flex justify-center items-center flex-col">
      {context.compMoved === false ? (
        <>
          <p className="text-white text-[3.0rem] font-bold">
            You Picked {context.move}
          </p>
          <p className="text-white text-[2.5rem] font-bold">
            Computer is Picking...
          </p>
        </>
      ) : (
        <div className="w-full h-[400px] flex justify-around mt-[20px] items-center">
          <div className="w-[350px] h-[350px] flex flex-col justify-center items-center">
            <p className="text-[3.5rem] font-bold flex justify-center items-center mb-[15px] text-white">
              You
            </p>
            <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-white border-4 border-black">
              {" "}
              <img className="w-[150px]" src={moveDisplay(context.move)} />
            </div>
          </div>
          <div className="w-[350px] h-[350px] flex flex-col justify-center items-center">
            <p className="text-[3.5rem] font-bold flex justify-center items-center mb-[15px] text-white">
              Computer
            </p>
            <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-white border-4 border-black">
              {" "}
              <img className="w-[150px]" src={moveDisplay(context.compMove)} />
            </div>
          </div>
        </div>
      )}
      {context.compMoved === true ? (
        <div className="w-[350px] h-[350px] flex flex-col justify-around items-center">
          <div
            id="display"
            className="h-[100px] w-[400px] flex justify-center items-center text-white text-[4rem] rounded-2xl font-bold bg-{context.colour}"
          >
            {context.result}{" "}
          </div>{" "}
          <Restart />{" "}
        </div>
      ) : null}
    </div>
  );
};
export default Picked;
