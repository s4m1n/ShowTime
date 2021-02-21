import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <input
        className="search__input"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        type="text"
        placeholder="Enter a title"
      ></input>
      <div className="search__icon__container">
        <img
          className="search__icon"
          alt=""
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ2MS41MTYgNDYxLjUxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTg1Ljc0NiAzNzEuMzMyYzQxLjI1MS4wMDEgODEuMzIyLTEzLjc2MiAxMTMuODY2LTM5LjExbDEyMi43NzggMTIyLjc3OGM5LjE3MiA4Ljg1OCAyMy43ODcgOC42MDQgMzIuNjQ1LS41NjggOC42NDEtOC45NDcgOC42NDEtMjMuMTMxIDAtMzIuMDc3bC0xMjIuNzc4LTEyMi43NzhjNjIuODk5LTgwLjk2OCA0OC4yNTItMTk3LjU5NS0zMi43MTYtMjYwLjQ5NHMtMTk3LjU5NC00OC4yNTItMjYwLjQ5MyAzMi43MTYtNDguMjUyIDE5Ny41OTUgMzIuNzE2IDI2MC40OTRjMzIuNTk3IDI1LjMyMyA3Mi43MDQgMzkuMDYgMTEzLjk4MiAzOS4wMzl6bS05OC42NTEtMjg0LjI3M2M1NC40ODQtNTQuNDg1IDE0Mi44Mi01NC40ODYgMTk3LjMwNS0uMDAyczU0LjQ4NiAxNDIuODIuMDAyIDE5Ny4zMDUtMTQyLjgyIDU0LjQ4Ni0xOTcuMzA1LjAwMmMtLjAwMS0uMDAxLS4wMDEtLjAwMS0uMDAyLS4wMDItNTQuNDg0LTU0LjA4Ny01NC44MDUtMTQyLjEwMS0uNzE4LTE5Ni41ODUuMjM5LS4yNC40NzgtLjQ3OS43MTgtLjcxOHoiIGZpbGw9IiM2NzY3NjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
        />
      </div>
    </div>
  );
}

export default Search;
