import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/Gi";
import { GrClose } from "react-icons/Gr";
import "./Navbar.css";

function Navbar() {
  const [Nav, setNav] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const setNavigation = () => {
    setNav(!Nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Nav-Bar">
        <div className="NavBar">
          <ul>
            <li><a href="#Home" className={activeSection === "Home" ? "active" : "passive"}>Home</a></li>
            <li><a href="#About" className={activeSection === "About" ? "active" : "passive"}>About</a></li>
            <li><a href="#MyWorks" className={activeSection === "MyWorks" ? "active" : "passive"}>My Works</a></li>
            <li><a href="#Contact" className={activeSection === "Contact" ? "active" : "passive"}>Contact</a></li>
          </ul>
        </div>
      </div>
      <GiHamburgerMenu
        className={`Menu ${Nav ? "Active" : ""}`}
        onClick={setNavigation}
      />
      <div className={Nav ? "Nav-Bar-Mobile-View" : "Nav-Bar-Mobile-View-Active"}>
        <GrClose
          className={`Close ${Nav ? "" : "Active"}`}
          onClick={setNavigation}
        />
        <div className="NavBar-Mobile-View">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setNavigation();
                  setActiveSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                onClick={() => {
                  setNavigation();
                  setActiveSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#MyWorks"
                onClick={() => {
                  setNavigation();
                  setActiveSection("works");
                }}
              >
                My Works
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                onClick={() => {
                  setNavigation();
                  setActiveSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
