import { NavLink, useNavigate, useLocation } from "react-router";
import { modifySheetData } from "../cheatSheetData";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname.split("/")[1];
  const currentIndex = modifySheetData.findIndex((item) => item.path === url);

  const prevPage = () => {
    if (currentIndex > 0) {
      navigate(`/${modifySheetData[currentIndex - 1].path}`);
    } else {
      navigate(`/${modifySheetData[modifySheetData.length - 1].path}`);
    }
  };

  const nextPage = () => {
    if (currentIndex < modifySheetData.length - 1) {
      navigate(`/${modifySheetData[currentIndex + 1].path}`);
    } else {
      navigate(`/${modifySheetData[0].path}`);
    }
  };

  return (
    <div className="navbar">
      <button onClick={prevPage}>Previous page</button>
      <div className="navbar-links">
        {modifySheetData.map((item) => (
          <NavLink
            className={"navbar-link"}
            key={item.path}
            to={`/${item.path}`}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}
export default Navbar;
