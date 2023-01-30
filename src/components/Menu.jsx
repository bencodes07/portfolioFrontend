import { React, useEffect } from "react";

function Menu() {
  var tlOpen = gsap.timeline({ paused: true });
  var tlClose = gsap.timeline({ paused: true });

  function handleOpen() {
    if (tlOpen.progress() < 1) {
      tlOpen.play();
    } else {
      tlOpen.restart();
    }
    if (
      document.querySelector(".menu-container").classList.contains("active")
    ) {
      document.querySelectorAll("a").forEach((x) => {
        x.style.zIndex = 999;
      });
    } else {
      document.querySelectorAll("a").forEach((x) => {
        x.style.zIndex = 0;
      });
    }
  }

  function handleClose() {
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
      });
    } else {
      document.querySelectorAll("a").forEach((x) => {
        x.style.zIndex = 0;
      });
    }
  }

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
    openTrigger.addEventListener("click", function () {});

    closeTrigger.addEventListener("click", function () {});

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
  return (
    <>
      <div className="menu-component-container">
        <span className="menu-trigger" onClick={handleOpen}>
          <i className="menu-trigger-bar top"></i>
          <i className="menu-trigger-bar middle"></i>
          <i className="menu-trigger-bar bottom"></i>
        </span>
        <span className="close-trigger" onClick={handleClose}>
          <i className="close-trigger-bar left"></i>
          <i className="close-trigger-bar right"></i>
        </span>

        <div className="inner-container">
          <i className="menu-bg top"></i>
          <i className="menu-bg middle"></i>
          <i className="menu-bg bottom"></i>
          <div className="menu-container">
            <ul className="menu">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Work</Link>
              </li>
              <li>
                <Link href="#">Skills</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
