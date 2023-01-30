import Link from "next/link";
import { gsap, Power4, SteppedEase } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Cursor from "../src/components/Cursor";
import Transition from "../src/components/Transition";

function Home(props) {
  let tlOpen = gsap.timeline({ paused: true });
  let tlClose = gsap.timeline({ paused: true });
  let tlLoadHero = gsap.timeline({ paused: false });
  let tlLoad = gsap.timeline({ paused: false });

  const [scroll, setScroll] = useState(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      // Hamburger
      document.querySelector(
        "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.bottom"
      ).style.display = "none";
      document.querySelector(
        "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.middle"
      ).style.display = "none";
      document.querySelector(
        "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.top"
      ).style.display = "none";
      document.querySelector(".inner-container").style.display = "block";
      document.querySelector(".inner-container-trans").style.display = "block";

      // Load
      document.querySelector(
        "#__next > div.inner-container-trans > i.menu-bg-trans.bottom"
      ).style.display = "none";
      document.querySelector(
        "#__next > div.inner-container-trans > i.menu-bg-trans.middle"
      ).style.display = "none";
      document.querySelector(
        "#__next > div.inner-container-trans > i.menu-bg-trans.top"
      ).style.display = "none";
      document.querySelector(".inner-container").style.display = "none";
      document.querySelector(".inner-container-trans").style.display = "none";
    }, 1000);
  }, []);

  function handleOpen() {
    console.log(tlOpen.progress());
    if (tlOpen.progress() < 1) {
      tlOpen.play();
    } else {
      tlOpen.restart();
    }

    if (
      document.querySelector(".menu-container").classList.contains("active")
    ) {
      const cycle = ["a", "section"];
      for (let i = 0; i < cycle.length; i++) {
        document.querySelectorAll(cycle[i]).forEach((x) => {
          x.style.zIndex = -1;
        });
      }
    } else {
      const cycle = ["a", "section"];
      for (let i = 0; i < cycle.length; i++) {
        document.querySelectorAll(cycle[i]).forEach((x) => {
          x.style.zIndex = 1000;
        });
      }

      document.querySelector(
        "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.bottom"
      ).style.display = "block";
      document.querySelector(
        "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.middle"
      ).style.display = "block";
      document.querySelector(
        "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.top"
      ).style.display = "block";
      document.querySelector(".inner-container").style.display = "block";
      document.querySelector(".inner-container-trans").style.display = "block";
    }
  }

  function handleClose() {
    console.log("Close Triggered");
    if (tlClose.progress() < 1) {
      tlClose.play();
    } else {
      tlClose.restart();
    }
    if (
      document.querySelector(".menu-container").classList.contains("active")
    ) {
      document.querySelectorAll("a").forEach((x) => {
        setTimeout(() => {
          x.style.zIndex = 999;
        }, 1000);

        setTimeout(() => {
          document.querySelector(
            "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.bottom"
          ).style.display = "none";
          document.querySelector(
            "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.middle"
          ).style.display = "none";
          document.querySelector(
            "#__next > div.pageContainer > main > div.inner-container > i.menu-bg.top"
          ).style.display = "none";
          document.querySelector(".inner-container").style.display = "none";
          document.querySelector(".inner-container-trans").style.display =
            "none";
        }, 1000);
      });
    } else {
      document.querySelectorAll("a").forEach((x) => {
        x.style.zIndex = 999;
      });
    }
  }

  // Hamburger animation
  useEffect(() => {
    //OPEN TRIGGER
    var openTrigger = document.querySelector(".menu-trigger");
    var openTriggerTop = document.querySelector(".menu-trigger-bar.top");
    var openTriggerMiddle = document.querySelector(".menu-trigger-bar.middle");
    var openTriggerBottom = document.querySelector(".menu-trigger-bar.bottom");

    //CLOSE TRIGGER
    var closeTrigger = document.querySelector(".close-trigger");
    var closeTriggerLeft = document.querySelector(".close-trigger-bar.left");
    var closeTriggerRight = document.querySelector(".close-trigger-bar.right");

    //MENU
    var menu = document.querySelector(".menu");
    var menuTop = document.querySelector(".menu-bg.top");
    var menuMiddle = document.querySelector(".menu-bg.middle");
    var menuBottom = document.querySelector(".menu-bg.bottom");

    let ctx = gsap.context(() => {
      //OPEN TIMELINE
      tlOpen
        .add("preOpen")
        .to(
          openTriggerTop,
          0.4,
          {
            x: "+80px",
            y: "-80px",
            delay: 0.1,
            ease: Power4.easeIn,
            onComplete: function () {
              closeTrigger.style.zIndex = 25;
            },
          },
          "preOpen"
        )
        .to(
          openTriggerMiddle,
          0.4,
          {
            x: "+=80px",
            y: "-=80px",
            ease: Power4.easeIn,
            onComplete: function () {
              openTrigger.style.visibility = "hidden";
              document.querySelector(".menu-container").classList.add("active");
            },
          },
          "preOpen"
        )
        .to(
          openTriggerBottom,
          0.4,
          {
            x: "+=80px",
            y: "-=80px",
            delay: 0.2,
            ease: Power4.easeIn,
          },
          "preOpen"
        )
        .add("open", "-=0.4")
        .to(
          menuTop,
          0.8,
          {
            y: "63%",
            ease: Power4.easeInOut,
          },
          "open"
        )
        .to(
          menuMiddle,
          0.8,
          {
            scaleY: 1,
            ease: Power4.easeInOut,
          },
          "open"
        )
        .to(
          menuBottom,
          0.8,
          {
            y: "-80%",
            ease: Power4.easeInOut,
          },
          "open"
        )
        .fromTo(
          menu,
          0.6,
          {
            y: 30,
            opacity: 0,
            visibility: "hidden",
          },
          {
            y: 0,
            opacity: 1,
            visibility: "visible",
            ease: Power4.easeOut,
          },
          "-=0.2"
        )
        .add("preClose", "-=0.8")
        .to(
          closeTriggerLeft,
          0.8,
          {
            x: "-=100px",
            y: "+=100px",
            ease: Power4.easeOut,
          },
          "preClose"
        )
        .to(
          closeTriggerRight,
          0.8,
          {
            x: "+=100px",
            y: "+=100px",
            delay: 0.2,
            ease: Power4.easeOut,
          },
          "preClose"
        );

      //CLOSE TIMELINE
      tlClose
        .add("close")
        .to(
          menuTop,
          0.2,
          {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
            onComplete: function () {
              closeTrigger.style.zIndex = 5;
              openTrigger.style.visibility = "visible";
              document
                .querySelector(".menu-container")
                .classList.remove("active");
            },
          },
          "close"
        )
        .to(
          menuMiddle,
          0.2,
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
          0.8,
          {
            y: "-113%",
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
          0.8,
          {
            y: "23%",
            ease: Power4.easeInOut,
            onComplete: function () {
              menuTop.style.backgroundColor = "#ffffff";
              menuMiddle.style.backgroundColor = "#ffffff";
              menuBottom.style.backgroundColor = "#ffffff";
            },
          },
          "close",
          "+=0.2"
        )
        .to(
          closeTriggerLeft,
          0.2,
          {
            x: "+=100px",
            y: "-=100px",
            ease: Power4.easeIn,
          },
          "close"
        )
        .to(
          closeTriggerRight,
          0.2,
          {
            x: "-=100px",
            y: "-=100px",
            delay: 0.1,
            ease: Power4.easeIn,
          },
          "close"
        )
        .to(
          openTriggerTop,
          1,
          {
            x: "-=80px",
            y: "+=80px",
            delay: 0.2,
            ease: Power4.easeOut,
          },
          "close"
        )
        .to(
          openTriggerMiddle,
          1,
          {
            x: "-=80px",
            y: "+=80px",
            ease: Power4.easeOut,
          },
          "close"
        )
        .to(
          openTriggerBottom,
          1,
          {
            x: "-=80px",
            y: "+=80px",
            delay: 0.1,
            ease: Power4.easeOut,
          },
          "close"
        );

      //EVENTS
      openTrigger.addEventListener("click", function () {
        handleOpen();
      });

      closeTrigger.addEventListener("click", function () {
        handleClose();
      });
    });

    // cursor

    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector(".cursor-dot"),
      $outline: document.querySelector(".cursor-dot-outline"),

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      //     updateCursor: function(e) {
      //         var self = this;

      //         console.log(e)

      //         // Show the cursor
      //         self.cursorVisible = true;
      //         self.toggleCursorVisibility();

      //         // Position the dot
      //         self.endX = e.pageX;
      //         self.endY = e.pageY;
      //         self.$dot.style.top = self.endY + 'px';
      //         self.$dot.style.left = self.endX + 'px';
      //     },

      setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll("a").forEach(function (el) {
          el.addEventListener("mouseover", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener("mouseout", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });
        document
          .querySelector(".menu-trigger")
          .addEventListener("mouseover", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
        document
          .querySelector(".menu-trigger")
          .addEventListener("mouseout", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        document
          .querySelector(".close-trigger")
          .addEventListener("mouseover", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
        document
          .querySelector(".close-trigger")
          .addEventListener("mouseout", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });

        // Click events
        document.addEventListener("mousedown", function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener("mouseup", function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });

        document.addEventListener("mousemove", function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + "px";
          self.$dot.style.left = self.endX + "px";
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + "px";
        self.$outline.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
          self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
        }
      },

      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      },
    };

    cursor.init();
  }, []);

  // Hero animation
  useLayoutEffect(() => {
    const sectionCodeTop = document.querySelector(".sectionCode.top");
    const sectionCodeBottom = document.querySelector(".sectionCode.bottom");
    const hiText = document.querySelector(".innerHero p");
    const topHeading = document.querySelector(".innerHero h1");
    const bottomHeading = document.querySelector(".innerHero h2");
    const heroText = document.querySelector(".heroText");

    let ctx = gsap.context(() => {
      tlLoadHero
        .delay(2)
        .timeScale(2)
        .fromTo(
          sectionCodeTop,
          2,
          { width: 0 },
          { width: 108.375, ease: SteppedEase.config(9) }
        )
        .fromTo(
          sectionCodeBottom,
          1,
          { opacity: 0 },
          { opacity: 1, ease: SteppedEase.config(1) }
        )
        .to(sectionCodeBottom, 0.5, { x: -100, y: 335 })
        .to(document.querySelector(".sectionLine"), 1, {
          height: 260,
          ease: Power4.easeIn(),
        })
        .fromTo(hiText, 0.5, { y: -50 }, { y: 0, opacity: 1 })
        .fromTo(topHeading, 0.5, { y: -50 }, { y: 0, opacity: 1 })
        .fromTo(bottomHeading, 0.5, { y: -50 }, { y: 0, opacity: 1 })
        .fromTo(heroText, 0.5, { y: -50 }, { y: 0, opacity: 1 });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Checking if logged in
  function fetchData() {
    fetch("http://localhost:8000/api/check_user", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.detail === "Unauthenticated!") {
          document.querySelectorAll(".loggedIn").forEach((x) => {
            x.innerText = "Login";
            // setLoginLink("login");
          });
        } else {
          document.querySelectorAll(".loggedIn").forEach((x) => {
            x.innerText = "Logout";
            // setLoginLink("logout");
          });
        }
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  // Particles
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // Sidebar animation
  useLayoutEffect(() => {
    const logo = document.querySelector(".logo");
    const icons = document.querySelector(".bottomIcons");
    let ctx = gsap.context(() => {
      tlLoad
        .delay(1)
        .timeScale(2)
        .fromTo(logo, { x: 0 }, { x: 100, ease: Power4.easeIn })
        .fromTo(icons, { y: 0 }, { y: -200, ease: Power4.easeIn });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Scroll Indicator
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      const currProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight && currProgress) {
        setScroll(Number((currProgress / scrollHeight).toFixed(2)) * 100);
      }
    });
    return () => {
      // window.removeEventListener("scroll", () => {
      //   const currProgress = window.scrollY;
      //   const scrollHeight = documentc.body.scrollHeight - window.innerHeight;
      //   if (scrollHeight && currProgress) {
      //     setScroll(Number((currProgress / scrollHeight).toFixed(2)) * 100);
      //   }
      // });
    };
  }, []);

  // Scroll animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".innerHero", {
      scrollTrigger: {
        trigger: "#about",
        scrub: 1,
        end: "top 50%",
      },
      opacity: 0,
      y: -100,
      duration: 3,
    });
    ScrollTrigger.create({
      trigger: "section#about",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#6295ca" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#292732" });
      },
    });
    return () => {};
  }, []);

  return (
    <>
      <Transition mode="index" />
      <div className="pageContainer">
        <div className="sidebar sticky top-0 border-r-divider-gray border-r-2 h-screen w-[120px] flex items-start flex-col justify-between">
          <div className="logo mt-[20px] w-[120px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_2"
              data-name="Layer 2"
              viewBox="0 0 528 609.68"
              className="w-[75px] h-[75px] object-contain logoSvg"
            >
              <g id="Layer_1-2" data-name="Layer 1">
                <text className="cls-2" transform="translate(169.72 420.87)">
                  <tspan x="0" y="0">
                    B
                  </tspan>
                </text>
                <polygon
                  className="cls-1"
                  points="513 448.6 513 161.08 264 17.32 15 161.08 15 448.6 264 592.36 513 448.6"
                />
              </g>
            </svg>
          </div>
          <div className="pageDots w-full h-[100px] flex justify-between items-center flex-col">
            <div className="scrollContainer">
              <div
                className="scrollBall"
                style={{ marginTop: scroll / 2.25 }}
              ></div>
            </div>
          </div>
          <div className="bottomIcons w-[120px] flex justify-center items-center flex-col">
            <a
              href="https://github.com/bencodes07"
              className="sidebarSocial"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#87a7ec"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[25px] h-[25px] mb-[30px] sidebarIcon"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://codepen.io/bencodes07"
              className="sidebarSocial"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#87a7ec"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[25px] h-[25px] mb-[30px] sidebarIcon"
              >
                <title>CodePen</title>
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>

            <span className="line h-[90px] w-[1px] bg-main-blue-accent sidebarLine"></span>
          </div>
        </div>

        {/* Main part */}
        <main className="w-[calc(100vw-120px)] mt-[-100vh] relative right-[-120px]">
          <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              particles: {
                color: {
                  value: "#918da5",
                },
                links: {
                  color: "#918da5",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1300,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.2,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />

          <span className="menu-trigger" onClick={handleOpen}>
            <i className="menu-trigger-bar top"></i>
            <i className="menu-trigger-bar middle"></i>
            <i className="menu-trigger-bar bottom"></i>
          </span>
          <span className="close-trigger" onClick={handleClose}>
            <i className="close-trigger-bar left"></i>
            <i className="close-trigger-bar right"></i>
          </span>

          <div className="inner-container mt-[-50vh]">
            <i className="menu-bg top"></i>
            <i className="menu-bg middle"></i>
            <i className="menu-bg bottom"></i>
            <div className="menu-container">
              <ul className="menu">
                <li>
                  <Link href="about">
                    ABOUT
                    <span className="Mask">
                      <span>ABOUT</span>
                    </span>
                    <span className="Mask">
                      <span>ABOUT</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="work">
                    WORK
                    <span className="Mask">
                      <span>WORK</span>
                    </span>
                    <span className="Mask">
                      <span>WORK</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="skills">
                    SKILLS
                    <span className="Mask">
                      <span>SKILLS</span>
                    </span>
                    <span className="Mask">
                      <span>SKILLS</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    CONTACT
                    <span className="Mask">
                      <span>CONTACT</span>
                    </span>
                    <span className="Mask">
                      <span>CONTACT</span>
                    </span>
                  </Link>
                </li>
                <li className="loginLi">
                  <Link href="login" className="loginLink">
                    <p className="loggedIn">Loading</p>
                    <span className="Mask login">
                      <span className="loggedIn">Loading</span>
                    </span>
                    <span className="Mask login">
                      <span className="loggedIn">Loading</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}

          <section className="hero">
            <div className="innerHero">
              <code className="sectionCode top">{"<section>"}</code>
              <span className="sectionLine"></span>
              <p>Hi there, I'm</p>
              <h1>
                Ben <span>aka bencodes</span>
              </h1>
              <h2>I code web apps.</h2>
              <p className="heroText">
                I'm a Full-Stack-Webdeveloper coding and designing different
                kinds of applications. My focus is to make the web a better and
                more enjoyable place for everyone!
              </p>
              <code className="sectionCode bottom">{"</section>"}</code>
            </div>
          </section>

          <section id="about"></section>
        </main>
      </div>
      <Cursor />
    </>
  );
}

export default Home;
