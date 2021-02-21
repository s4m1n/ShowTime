import React, { useState, useEffect } from "react";
import "./Nav.css";
import Search from "../Search";

function Nav({ searchValue, setSearchValue }) {
  const [show, handleShow] = useState(false);

  const trasnsitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", trasnsitionNavBar);
    return () => window.removeEventListener("scroll", trasnsitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__netflix__white"}`}>
      <div className="nav__contents">
        <div className="nav__logo__links">
          <a href="/">
            <svg
              className="nav__logo"
              width="135"
              height="36"
              viewBox="0 0 135 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.274 12.008C7.274 12.484 7.302 12.932 7.358 13.352C7.442 13.744 7.582 14.164 7.778 14.612C8.002 15.032 8.282 15.494 8.618 15.998C8.982 16.502 9.444 17.09 10.004 17.762C10.62 18.518 11.138 19.218 11.558 19.862C11.978 20.478 12.314 21.094 12.566 21.71C12.818 22.298 12.986 22.9 13.07 23.516C13.182 24.104 13.238 24.762 13.238 25.49V30.74C13.238 31.468 13.112 32.126 12.86 32.714C12.636 33.33 12.3 33.848 11.852 34.268C11.432 34.716 10.928 35.066 10.34 35.318C9.752 35.57 9.108 35.696 8.408 35.696C7.008 35.696 5.762 35.206 4.67 34.226C4.054 33.666 3.564 33.218 3.2 32.882C2.864 32.574 2.598 32.322 2.402 32.126C2.206 31.958 2.052 31.804 1.94 31.664C1.828 31.524 1.688 31.356 1.52 31.16C1.128 30.656 0.848 30.194 0.68 29.774C0.54 29.326 0.47 28.836 0.47 28.304V19.988H4.46L6.434 22.214C6.406 21.71 6.336 21.248 6.224 20.828C6.112 20.38 5.93 19.932 5.678 19.484C5.426 19.036 5.09 18.56 4.67 18.056C4.278 17.524 3.76 16.908 3.116 16.208C1.352 14.192 0.47 12.05 0.47 9.782V5.624C0.47 4.868 0.596 4.168 0.848 3.524C1.128 2.852 1.492 2.278 1.94 1.802C2.388 1.326 2.92 0.947998 3.536 0.667998C4.152 0.387998 4.824 0.247998 5.552 0.247998C6 0.247998 6.434 0.317998 6.854 0.457998C7.274 0.597998 7.722 0.849998 8.198 1.214C8.702 1.55 9.234 1.998 9.794 2.558C10.382 3.118 11.054 3.818 11.81 4.658C12.342 5.246 12.706 5.834 12.902 6.422C13.126 6.982 13.238 7.654 13.238 8.438V13.94H9.5L7.274 11.714V12.008ZM9.794 5.498C9.794 4.154 9.388 3.048 8.576 2.18C7.792 1.312 6.784 0.877998 5.552 0.877998C4.936 0.877998 4.348 1.004 3.788 1.256C3.256 1.508 2.794 1.844 2.402 2.264C2.01 2.684 1.688 3.188 1.436 3.776C1.212 4.336 1.1 4.952 1.1 5.624V9.782C1.1 10.398 1.142 10.972 1.226 11.504C1.338 12.008 1.506 12.512 1.73 13.016C1.982 13.52 2.304 14.052 2.696 14.612C3.088 15.144 3.578 15.746 4.166 16.418C4.726 17.034 5.188 17.594 5.552 18.098C5.916 18.602 6.21 19.092 6.434 19.568C6.658 20.016 6.812 20.478 6.896 20.954C7.008 21.402 7.064 21.892 7.064 22.424V27.548C7.064 28.136 6.924 28.612 6.644 28.976C6.364 29.34 5.986 29.522 5.51 29.522C5.034 29.522 4.628 29.326 4.292 28.934C3.984 28.542 3.83 28.052 3.83 27.464V20.618H1.1V28.304C1.1 29.452 1.52 30.404 2.36 31.16C3.2 31.888 4.264 32.252 5.552 32.252C6.812 32.252 7.834 31.846 8.618 31.034C9.402 30.194 9.794 29.116 9.794 27.8V22.55C9.794 21.85 9.738 21.206 9.626 20.618C9.542 20.002 9.374 19.414 9.122 18.854C8.87 18.266 8.534 17.664 8.114 17.048C7.694 16.432 7.176 15.746 6.56 14.99C6.028 14.346 5.58 13.772 5.216 13.268C4.88 12.764 4.6 12.288 4.376 11.84C4.18 11.364 4.04 10.916 3.956 10.496C3.872 10.048 3.83 9.572 3.83 9.068V5.582C3.83 4.994 3.984 4.518 4.292 4.154C4.6 3.79 4.992 3.608 5.468 3.608C5.944 3.608 6.322 3.79 6.602 4.154C6.91 4.518 7.064 5.008 7.064 5.624V10.496H9.794V5.498ZM16.809 0.499997H20.799L22.857 2.81V0.499997H26.847L29.661 3.566V35.444H25.923L23.613 33.134V35.444H19.875L16.809 32.63V0.499997ZM17.439 32H20.169V17.72H23.487V32H26.217V1.13H23.487V15.2H20.169V1.13H17.439V32ZM37.0635 5.12C37.0635 4.616 37.2035 4.21 37.4835 3.902C37.7635 3.566 38.1415 3.398 38.6175 3.398C39.0375 3.398 39.3875 3.566 39.6675 3.902C39.9755 4.21 40.1295 4.588 40.1295 5.036V28.304C40.1295 28.668 39.9755 29.004 39.6675 29.312C39.3595 29.62 39.0095 29.774 38.6175 29.774C38.1695 29.774 37.7915 29.62 37.4835 29.312C37.2035 29.004 37.0635 28.612 37.0635 28.136V5.12ZM46.4715 30.782C46.4715 31.51 46.3455 32.168 46.0935 32.756C45.8415 33.372 45.4915 33.89 45.0435 34.31C44.6235 34.758 44.1055 35.108 43.4895 35.36C42.9015 35.612 42.2575 35.738 41.5575 35.738C40.8295 35.738 40.0175 35.472 39.1215 34.94C38.2535 34.408 37.1755 33.554 35.8875 32.378C35.0755 31.65 34.5015 30.922 34.1655 30.194C33.8295 29.438 33.6615 28.57 33.6615 27.59V5.33C33.6615 3.51 34.0395 2.208 34.7955 1.424C35.5795 0.639998 36.8535 0.247998 38.6175 0.247998C39.2615 0.247998 39.8215 0.345999 40.2975 0.541999C40.8015 0.737999 41.3895 1.116 42.0615 1.676C43.6295 2.964 44.7495 4.098 45.4215 5.078C46.1215 6.058 46.4715 7.024 46.4715 7.976V30.782ZM34.2915 27.59C34.2915 29.018 34.6975 30.166 35.5095 31.034C36.3495 31.874 37.4415 32.294 38.7855 32.294C40.0455 32.294 41.0675 31.888 41.8515 31.076C42.6355 30.264 43.0275 29.186 43.0275 27.842V5.036C43.0275 3.832 42.6075 2.838 41.7675 2.054C40.9275 1.27 39.8635 0.877998 38.5755 0.877998C37.0355 0.877998 35.9295 1.228 35.2575 1.928C34.6135 2.6 34.2915 3.734 34.2915 5.33V27.59ZM56.3638 3.356L56.5738 0.499997H61.9078L64.4698 3.356L64.6798 0.499997H68.6698L71.4838 3.566L69.2158 35.444H63.2518L61.2358 33.428L61.1098 35.444H55.1458L52.0798 32.63L49.8118 0.499997H53.8018L56.3638 3.356ZM50.4838 1.13L52.6678 32H57.7078L59.1778 10.37H59.3878L60.7738 32H65.8138L67.9978 1.13H65.2678L63.5038 26.162H63.0838L61.3198 1.13H57.1618L55.3978 26.162H54.9778L53.2138 1.13H50.4838ZM73.7912 0.499997H84.8372L87.6512 3.608V7.346H84.1232V35.444H80.3852L77.3192 32.63V7.346H76.8572L73.7912 4.532V0.499997ZM74.4212 3.902H77.9492V32H80.6792V3.902H84.2072V1.13H74.4212V3.902ZM90.5961 0.499997H94.5861L97.4001 3.566V35.444H93.6621L90.5961 32.63V0.499997ZM91.2261 32H93.9561V1.13H91.2261V32ZM110.576 4.028L110.954 0.499997H117.002L119.816 3.566V35.444H116.414L114.398 33.218L114.146 35.444H110.282L108.266 33.26V35.444H104.654L101.588 32.63V0.499997H107.3L110.576 4.028ZM102.218 1.13V32H104.822L104.99 6.422L107.552 32H110.744L113.474 6.422L113.684 32H116.372V1.13H111.542L109.148 23.642L106.754 1.13H102.218ZM124.024 0.499997H131.626L134.44 3.566V7.094H130.828V14.57H131.626L134.44 17.636V21.164H130.828V28.85H131.626L134.44 31.916V35.444H127.09L124.024 32.63V0.499997ZM124.654 32H130.996V29.48H127.384V17.72H130.996V15.2H127.384V3.65H130.996V1.13H124.654V32Z"
                fill="#ED2517"
              />
            </svg>
          </a>

          <a href="/home" className="nav__link home">
            Home
            <div className="red__line"></div>
          </a>
          <a href="/" className="nav__link movies">
            Movies
          </a>
          <a href="/" className="nav__link shows">
            TV Shows
          </a>
          <a href="/" className="nav__link new">
            New & Popular
          </a>
          <a href="/" className="nav__link mylist">
            My list
          </a>
        </div>
        <div className="nav__end__links">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="notification">
            <img
              alt=""
              className="notification__logo"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOTk5OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ny4xMjg5MDYgNDUyLjEyODkwNmMwLTMzLjA2NjQwNi0yNi44NDc2NTYtNTkuODcxMDk0LTU5Ljk2ODc1LTU5Ljg3MTA5NHMtNTkuOTY4NzUgMjYuODA0Njg4LTU5Ljk2ODc1IDU5Ljg3MTA5NCAyNi44NDc2NTYgNTkuODcxMDk0IDU5Ljk2ODc1IDU5Ljg3MTA5NCA1OS45Njg3NS0yNi44MDQ2ODggNTkuOTY4NzUtNTkuODcxMDk0em0wIDAiIGZpbGw9IiMwYjAzMDMiIGRhdGEtb3JpZ2luYWw9IiNmN2M5MmIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xOTcuMTYwMTU2IDM5Mi4yNTc4MTJjLTYuMDYyNSAwLTExLjkxNDA2Mi45MDYyNS0xNy40Mjk2ODcgMi41NzgxMjYgMjQuNjE3MTg3IDcuNDUzMTI0IDQyLjUzOTA2MiAzMC4yNzczNDMgNDIuNTM5MDYyIDU3LjI5Mjk2OCAwIDI3LjAxMTcxOS0xNy45MjE4NzUgNDkuODM5ODQ0LTQyLjUzOTA2MiA1Ny4yOTI5NjkgNS41MTU2MjUgMS42NzE4NzUgMTEuMzY3MTg3IDIuNTc4MTI1IDE3LjQyOTY4NyAyLjU3ODEyNSAzMy4xMjEwOTQgMCA1OS45Njg3NS0yNi44MDQ2ODggNTkuOTY4NzUtNTkuODcxMDk0cy0yNi44NDc2NTYtNTkuODcxMDk0LTU5Ljk2ODc1LTU5Ljg3MTA5NHptMCAwIiBmaWxsPSIjMGIwMzAzIiBkYXRhLW9yaWdpbmFsPSIjZjJiNTFkIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjA0LjE2Nzk2OSAxMDIuNjk5MjE5Yy0xOS4yNjE3MTkgMy44NjMyODEtMzguMDA3ODEzLTguNTg5ODQ0LTQxLjg3ODkwNy0yNy44MjAzMTMtMy44NzEwOTMtMTkuMjI2NTYyIDguNjA1NDY5LTM3Ljk0NTMxMiAyNy44NjMyODItNDEuODA4NTk0IDE5LjI1NzgxMi0zLjg2MzI4MSAzOC4wMDc4MTIgOC41ODk4NDQgNDEuODc4OTA2IDI3LjgyMDMxMyAzLjg2NzE4OCAxOS4yMjY1NjMtOC42MDU0NjkgMzcuOTQ1MzEzLTI3Ljg2MzI4MSA0MS44MDg1OTR6bTAgMCIgZmlsbD0iIzBiMDMwMyIgZGF0YS1vcmlnaW5hbD0iI2Y3YzkyYiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4wMzEyNSA2MC44OTA2MjVjLTMuODcxMDk0LTE5LjIzMDQ2OS0yMi42MjEwOTQtMzEuNjgzNTk0LTQxLjg3ODkwNi0yNy44MjAzMTMtMS43OTI5NjkuMzU5Mzc2LTMuNTIzNDM4Ljg1MTU2My01LjE5MTQwNiAxLjQ1MzEyNiAxMS4yNDIxODcgNC4xMDkzNzQgMjAuMTQ0NTMxIDEzLjc4OTA2MiAyMi42NzU3ODEgMjYuMzY3MTg3IDMuNTExNzE5IDE3LjQzNzUtNi40MjU3ODEgMzQuNDU3MDMxLTIyLjY3MTg3NSA0MC4zNTU0NjkgNS45NDUzMTIgMi4xNzE4NzUgMTIuNTQyOTY4IDIuNzg5MDYyIDE5LjIwMzEyNSAxLjQ1MzEyNSAxOS4yNTc4MTItMy44NjMyODEgMzEuNzMwNDY5LTIyLjU4MjAzMSAyNy44NjMyODEtNDEuODA4NTk0em0wIDAiIGZpbGw9IiMwYjAzMDMiIGRhdGEtb3JpZ2luYWw9IiNmMmI1MWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNDUuNjkxNDA2IDQ0Mi4xMDkzNzVoLTI5Ny4wNjI1Yy0yNi41ODIwMzEgMC00OC4xMjg5MDYtMjEuNTExNzE5LTQ4LjEyODkwNi00OC4wNDY4NzUgMC0xNC42OTE0MDYgNi42NjAxNTYtMjguNTkzNzUgMTguMTEzMjgxLTM3LjgxNjQwNmw5LjU0Mjk2OS03LjY4NzVjMjIuMDc0MjE5LTE3Ljc3MzQzOCAzNC45MTAxNTYtNDQuNTY2NDA2IDM0LjkxMDE1Ni03Mi44Nzg5MDZ2LTUwLjQ5NjA5NGMwLTc0LjUwMzkwNiA2MC40OTIxODgtMTM0Ljg5ODQzOCAxMzUuMTE3MTg4LTEzNC44OTg0MzggNzQuNjIxMDk0IDAgMTM1LjExNzE4NyA2MC4zOTQ1MzIgMTM1LjExNzE4NyAxMzQuODk4NDM4djUxLjQyOTY4N2MwIDI3Ljc3NzM0NCAxMi4zNTU0NjkgNTQuMTI1IDMzLjcyNjU2MyA3MS45MTQwNjNsOS4yOTI5NjggNy43MzQzNzVjMTEuMDg5ODQ0IDkuMjMwNDY5IDE3LjUgMjIuOTAyMzQzIDE3LjUgMzcuMzE2NDA2di40ODQzNzVjMCAyNi41MzUxNTYtMjEuNTQ2ODc0IDQ4LjA0Njg3NS00OC4xMjg5MDYgNDguMDQ2ODc1em0wIDAiIGZpbGw9IiMwYjAzMDMiIGRhdGEtb3JpZ2luYWw9IiNmN2UyNDkiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNzYuMzIwMzEyIDM1Ni4yNjE3MTktOS4yOTI5NjgtNy43MzQzNzVjLTIxLjM3MTA5NC0xNy43OTI5NjktMzMuNzI2NTYzLTQ0LjEzNjcxOS0zMy43MjY1NjMtNzEuOTE3OTY5di01MS40Mjk2ODdjMC03NC41LTYwLjQ5NjA5My0xMzQuODk4NDM4LTEzNS4xMTcxODctMTM0Ljg5ODQzOC0xMy4yMjI2NTYgMC0yNS45OTYwOTQgMS45MDYyNS0zOC4wNzAzMTMgNS40NDE0MDYgNTYuMDg1OTM4IDE2LjQxMDE1NiA5Ny4wNDY4NzUgNjguMTU2MjUgOTcuMDQ2ODc1IDEyOS40NTcwMzJ2NTEuNDI5Njg3YzAgMjcuNzgxMjUgMTIuMzU1NDY5IDU0LjEyNSAzMy43MjY1NjMgNzEuOTE3OTY5bDkuMjk2ODc1IDcuNzM0Mzc1YzExLjA4NTkzNyA5LjIzMDQ2OSAxNy41IDIyLjkwMjM0MyAxNy41IDM3LjMxNjQwNnYuNDg0Mzc1YzAgMjYuNTM1MTU2LTIxLjU0Njg3NSA0OC4wNDY4NzUtNDguMTI4OTA2IDQ4LjA0Njg3NWg3Ni4xNDA2MjRjMjYuNTc4MTI2IDAgNDguMTI1LTIxLjUxMTcxOSA0OC4xMjUtNDguMDQ2ODc1di0uNDg0Mzc1YzAtMTQuNDE0MDYzLTYuNDEwMTU2LTI4LjA4NTkzNy0xNy41LTM3LjMxNjQwNnptMCAwIiBmaWxsPSIjMGIwMzAzIiBkYXRhLW9yaWdpbmFsPSIjZjdjOTJiIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDQwLjA3ODEyNSAxMTUuNzc3MzQ0YzAtNjMuOTQxNDA2LTUxLjkxNzk2OS0xMTUuNzc3MzQ0LTExNS45NjQ4NDQtMTE1Ljc3NzM0NHMtMTE1Ljk2ODc1IDUxLjgzNTkzOC0xMTUuOTY4NzUgMTE1Ljc3NzM0NCA1MS45MjE4NzUgMTE1Ljc3NzM0NCAxMTUuOTY4NzUgMTE1Ljc3NzM0NCAxMTUuOTY0ODQ0LTUxLjgzNTkzOCAxMTUuOTY0ODQ0LTExNS43NzczNDR6bTAgMCIgZmlsbD0iI2VkMjUxNyIgZGF0YS1vcmlnaW5hbD0iI2ZjNDc2ZSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM1NS4yMzA0NjkgNC4yMjI2NTZjMjkuNTc0MjE5IDIwLjk4MDQ2OSA0OC44NjcxODcgNTUuNDYwOTM4IDQ4Ljg2NzE4NyA5NC40NDE0MDYgMCA2My45NDE0MDctNTEuOTE3OTY4IDExNS43NzczNDQtMTE1Ljk2NDg0NCAxMTUuNzc3MzQ0LTEwLjc4MTI1IDAtMjEuMjE0ODQzLTEuNDcyNjU2LTMxLjExNzE4Ny00LjIyMjY1NiAxOC45Mzc1IDEzLjQzNzUgNDIuMDkzNzUgMjEuMzM1OTM4IDY3LjA5NzY1NiAyMS4zMzU5MzggNjQuMDQyOTY5IDAgMTE1Ljk2NDg0NC01MS44MzU5MzggMTE1Ljk2NDg0NC0xMTUuNzc3MzQ0IDAtNTMuMTc5Njg4LTM1LjkxNDA2My05Ny45NzY1NjMtODQuODQ3NjU2LTExMS41NTQ2ODh6bTAgMCIgZmlsbD0iI2VkMjUxNyIgZGF0YS1vcmlnaW5hbD0iI2NjMmI1YSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyNC4xMTMyODEgMTY5Ljg1MTU2MmMtNC40NzI2NTYgMC04LjA5NzY1Ni0zLjYxNzE4Ny04LjA5NzY1Ni04LjA4MjAzMXYtNzcuOTYwOTM3bC0zLjAxOTUzMSAyLjc1MzkwNmMtMy4zMDQ2ODggMy4wMDc4MTItOC40MjU3ODIgMi43NzM0MzgtMTEuNDM3NS0uNTI3MzQ0LTMuMDExNzE5LTMuMjk2ODc1LTIuNzc3MzQ0LTguNDEwMTU2LjUyNzM0NC0xMS40MTc5NjhsMTYuNTcwMzEyLTE1LjA4NTkzOGMyLjM3MTA5NC0yLjE1NjI1IDUuNzg5MDYyLTIuNzE0ODQ0IDguNzI2NTYyLTEuNDIxODc1IDIuOTMzNTk0IDEuMjkyOTY5IDQuODI0MjE5IDQuMTkxNDA2IDQuODI0MjE5IDcuMzk0NTMxdjk2LjI2NTYyNWMwIDQuNDY0ODQ0LTMuNjI1IDguMDgyMDMxLTguMDkzNzUgOC4wODIwMzF6bTAgMCIgZmlsbD0iI2Y0ZjRmNCIgZGF0YS1vcmlnaW5hbD0iI2UzZmFmZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
            />
          </div>
          <div className="user__logo">
            <svg
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.166992 33.134H32.417V0.884003H0.166992V33.134Z"
                fill="#333333"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.9585 5.7179C3.4065 5.7179 2.9585 6.1669 2.9585 6.7179C2.9585 7.2689 3.4065 7.7179 3.9585 7.7179C4.5105 7.7179 4.9585 7.2689 4.9585 6.7179C4.9585 6.1669 4.5105 5.7179 3.9585 5.7179ZM3.9585 8.4679C2.9935 8.4679 2.2085 7.6829 2.2085 6.7179C2.2085 5.7529 2.9935 4.9679 3.9585 4.9679C4.9235 4.9679 5.7085 5.7529 5.7085 6.7179C5.7085 7.6829 4.9235 8.4679 3.9585 8.4679Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2915 5.7179C15.7395 5.7179 15.2915 6.1669 15.2915 6.7179C15.2915 7.2689 15.7395 7.7179 16.2915 7.7179C16.8435 7.7179 17.2915 7.2689 17.2915 6.7179C17.2915 6.1669 16.8435 5.7179 16.2915 5.7179ZM16.2915 8.4679C15.3265 8.4679 14.5415 7.6829 14.5415 6.7179C14.5415 5.7529 15.3265 4.9679 16.2915 4.9679C17.2565 4.9679 18.0415 5.7529 18.0415 6.7179C18.0415 7.6829 17.2565 8.4679 16.2915 8.4679Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.6245 5.7179C28.0725 5.7179 27.6245 6.1669 27.6245 6.7179C27.6245 7.2689 28.0725 7.7179 28.6245 7.7179C29.1765 7.7179 29.6245 7.2689 29.6245 6.7179C29.6245 6.1669 29.1765 5.7179 28.6245 5.7179ZM28.6245 8.4679C27.6595 8.4679 26.8745 7.6829 26.8745 6.7179C26.8745 5.7529 27.6595 4.9679 28.6245 4.9679C29.5895 4.9679 30.3745 5.7529 30.3745 6.7179C30.3745 7.6829 29.5895 8.4679 28.6245 8.4679Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.31942 20.6761C9.31942 22.5441 7.80542 24.0581 5.93742 24.0581C4.06942 24.0581 2.55542 22.5441 2.55542 20.6761C2.55542 18.8081 4.06942 17.2941 5.93742 17.2941C7.80542 17.2941 9.31942 18.8081 9.31942 20.6761Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.93772 16.8233C3.81372 16.8233 2.08472 18.5513 2.08472 20.6763C2.08472 22.8003 3.81372 24.5293 5.93772 24.5293C8.06172 24.5293 9.79072 22.8003 9.79072 20.6763C9.79072 18.5513 8.06172 16.8233 5.93772 16.8233ZM5.93772 25.0293C3.53772 25.0293 1.58472 23.0763 1.58472 20.6763C1.58472 18.2763 3.53772 16.3233 5.93772 16.3233C8.33772 16.3233 10.2907 18.2763 10.2907 20.6763C10.2907 23.0763 8.33772 25.0293 5.93772 25.0293Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.0274 20.6761C30.0274 22.5441 28.5134 24.0581 26.6454 24.0581C24.7774 24.0581 23.2634 22.5441 23.2634 20.6761C23.2634 18.8081 24.7774 17.2941 26.6454 17.2941C28.5134 17.2941 30.0274 18.8081 30.0274 20.6761Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.6455 16.8233C24.5215 16.8233 22.7925 18.5513 22.7925 20.6763C22.7925 22.8003 24.5215 24.5293 26.6455 24.5293C28.7695 24.5293 30.4985 22.8003 30.4985 20.6763C30.4985 18.5513 28.7695 16.8233 26.6455 16.8233ZM26.6455 25.0293C24.2455 25.0293 22.2925 23.0763 22.2925 20.6763C22.2925 18.2763 24.2455 16.3233 26.6455 16.3233C29.0455 16.3233 30.9985 18.2763 30.9985 20.6763C30.9985 23.0763 29.0455 25.0293 26.6455 25.0293Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.1245 33.1344H27.9985C26.5675 30.9294 24.5295 29.1554 22.1245 28.0434V33.1344Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9585 33.1344H16.0415V26.7694C14.2425 26.8014 12.5285 27.1714 10.9585 27.8234V33.1344Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4587 28.0434C8.05372 29.1554 6.01572 30.9284 4.58472 33.1344H10.4587V28.0434Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6245 27.8233C20.0545 27.1713 18.3405 26.8013 16.5415 26.7693V33.1343H21.6245V27.8233Z"
                fill="#F4F4F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.166992 11.225H32.417V9.725H0.166992V11.225Z"
                fill="#F4F4F4"
              />
            </svg>
          </div>
          <div className="profile">Samin</div>
          <div className="profile__dropdown">
            <img
              alt=""
              className="down__arrow"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDIxMy4zMzMgMjEzLjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjAsNTMuMzMzIDEwNi42NjcsMTYwIDIxMy4zMzMsNTMuMzMzICAgIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BvbHlnb24+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
