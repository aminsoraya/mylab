import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useAppStore } from "@/hooks/store";

let links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Inventory",
    sub: [
      {
        text: "All Inventory",
        link: "/",
      },
      {
        text: "Appraise My Trade",
        link: "/",
      },
      {
        text: "Car Finder",
        link: "/",
      },
    ],
  },
  {
    text: "Finance",
    sub: [
      {
        text: "Finance Application",
        link: "/",
      },
      {
        text: "Finance Calculator",
        link: "/",
      },
    ],
  },
  {
    text: "Dealership",
    sub: [
      {
        text: "About Us",
        link: "/",
      },
      {
        text: "Contact Us",
        link: "/",
      },
      {
        text: "Book Appointment",
        link: "/",
      },
    ],
  },
  {
    text: "Text Us Now",
    link: "/text-us-now",
  },
];
const Menu = () => {
  let [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const { activeMenu } = useAppStore();
  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the div
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowBurgerMenu(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="content">
      <ul className="menu">
        {links.map((menu, index) => {
          return (
            <li
              key={index}
              className={`item ${activeMenu == menu.link && "active"}`}
            >
              <Link href={menu.link ?? ""} legacyBehavior>
                {menu.text}
              </Link>

              <ul className="submenu  ">
                {menu?.sub?.map((submenu, sIndex) => {
                  return (
                    <li key={sIndex}>
                      <Link href={submenu.link ?? ""}>{submenu.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <div
        className="burger"
        onClick={() => setShowBurgerMenu((state) => !state)}
        ref={divRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22"
          width="22"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <ul className={`bur-menu ${showBurgerMenu && "display-flex"}`}>
          {links.map((menu, index) => {
            return (
              <li key={index} className="bur-item">
                <Link href={menu.link ?? ""}>{menu.text}</Link>
                {/* <ul className="submenu">
                  {menu?.sub?.map((submenu, sIndex) => {
                    return (
                      <li key={sIndex}>
                        <Link href={submenu.link ?? ""}>{submenu.text}</Link>
                      </li>
                    );
                  })}
                </ul> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
