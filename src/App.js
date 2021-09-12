import React, { useRef } from "react";
import ScrollContainer from "./ScrollContainer";
import ParallaxElement from "./ParllaxElement";

import "./styles.css";

export default function App() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  return (
    <ScrollContainer>
      <div className="App">
        <h1>Parallax Momentum Scrolling</h1>
        <h2>Scroll Down To See Parallax Elements</h2>
        <h3>Explaination:</h3>
        <p>
          The goal is to Make a scrolling effect similar to momentum style
          scrolling like on mobile browsers. I also want to have some parallax
          elements that use the same easing effect as the container scrolls
          with. For this I am fixing the entire content to the window and
          translating the enire body. Then I am calculating the parallax
          elements and adding all information when the element loads so I don't
          have to do the calculations on scroll. Then I am using just one
          animationFrame to loop through the elements, calculate the easing
          effect and translate the container. I figured there would be better
          performance if most of the calculating was done on load so the only
          thing that needs to be done on scroll is loop through the parallax
          elements and update the positions using one animationFrame. I havent
          tested this against using an animationFrame for each element and
          calculate the easing for each element yet.
        </p>

        <ParallaxElement dataPx="20" dataDirection="x">
          <div ref={box1} className="box">
            Moves 20px
          </div>
        </ParallaxElement>
        <ParallaxElement dataPercent="20" dataDirection="x">
          <div ref={box2} className="box">
            Moves 20%
          </div>
        </ParallaxElement>
        <ParallaxElement dataPx="20">
          <div ref={box3} className="box">
            Moves 20px
          </div>
        </ParallaxElement>
        <ParallaxElement dataPercent="20">
          <div ref={box4} className="box">
            Moves 20%
          </div>
        </ParallaxElement>
      </div>
    </ScrollContainer>
  );
}
