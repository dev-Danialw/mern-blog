import "./sidebar.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const { user } = useContext(Context);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("http://localhost:5000/api/categories/");
      setCat(res.data);
    };
    getCat();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {user.profilePic != undefined ? (
          <img src={user.profilePic} alt="" />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png"
            alt=""
          />
        )}
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <li key={c._id} className="sidebarListItem">
              <Link className="sidebarListItem" to={`/?cat=${c.name}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
