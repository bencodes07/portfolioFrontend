import { useLayoutEffect, useEffect, useState } from "react";
import { gsap, Power4 } from "gsap";
import Link from "next/link";

function Transition(props) {
  const [tlClose] = useState(gsap.timeline({ paused: false }));

  useLayoutEffect(() => {
    //MENU
    var menu = document.querySelector(".menu-trans");
    var menuTop = document.querySelector(".menu-bg-trans.top");
    var menuMiddle = document.querySelector(".menu-bg-trans.middle");
    var menuBottom = document.querySelector(".menu-bg-trans.bottom");

    menuTop.classList.add("anim");
    menuMiddle.classList.add("anim");
    menuBottom.classList.add("anim");

    let ctx = gsap.context(() => {
      tlClose
        .add("close")
        .to(
          menuTop,
          0.2,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
            onComplete: function () {
              document
                .querySelector(".menu-container-trans")
                .classList.remove("active");
            },
          },
          "close"
        )
        .to(
          menuMiddle,
          0.1,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
          },
          "close"
        )
        .to(
          menuBottom,
          0.2,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
          },
          "close"
        )
        .to(
          menu,
          0.6,
          {
            y: 20,
            opacity: 0,
            ease: Power4.easeOut,
            onComplete: function () {
              menu.style.visibility = "hidden";
            },
          },
          "close"
        )
        .to(
          menuTop,
          1.0, // 0.8
          {
            y: "-183%", // -113%
            ease: Power4.easeInOut,
          },
          "close",
          "+=0.2"
        )
        .to(
          menuMiddle,
          0.8,
          {
            scaleY: 0,
            ease: Power4.easeInOut,
          },
          "close",
          "+=0.2"
        )
        .to(
          menuBottom,
          1.0, // 0.8
          {
            y: "123%", // 23%
            ease: Power4.easeInOut,
            onComplete: function () {
              menuTop.style.backgroundColor = "#ffffff";
              menuMiddle.style.backgroundColor = "#ffffff";
              menuBottom.style.backgroundColor = "#ffffff";
            },
          },
          "close",
          "+=0.2"
        );
      tlClose.play();
      setTimeout(() => {}, 1000);
      document.querySelector(".blue-bg").style.display = "none";
    });

    return () => {
      ctx.revert();
      ctx.clear();
    };
  }, []);

  if (props.mode == "index") {
    return (
      <>
        <div className="blue-bg w-screen h-screen bg-main-blue-accent absolute z-50"></div>
        <div className="inner-container-trans">
          <i className="menu-bg-trans top"></i>
          <i className="menu-bg-trans middle"></i>
          <i className="menu-bg-trans bottom"></i>
          <div className="menu-container-trans">
            <ul className="menu-trans"></ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="blue-bg w-screen h-screen bg-main-blue-accent absolute"></div>
        <div className="inner-container-trans">
          <i className="menu-bg-trans top"></i>
          <i className="menu-bg-trans middle"></i>
          <i className="menu-bg-trans bottom"></i>
          <div className="menu-container-trans">
            <ul className="menu-trans"></ul>
          </div>
        </div>
      </>
    );
  }
}

export default Transition;
