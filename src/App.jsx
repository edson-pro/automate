import { Command, LogOut, Search, Settings, Star, User } from "react-feather";
import AiIcon from "./components/vectors/AiIcon";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDarkMode } from "usehooks-ts";
function App() {
  const prompts = [
    {
      title: "Compose an email",
      icon: "/icons/gmail.svg",
      app: "gmail",
      command: "G",
    },
    {
      title: "Manage my schedule",
      icon: "/icons/google-calendar.svg",
      app: "calender",
      command: "C",
    },
    {
      title: "Create notion page",
      icon: "/icons/notion.svg",
      app: "notion",
      command: "N",
    },
  ];

  const applications = [
    {
      name: "Slack",
      icon: "/icons/slack.svg",
      app: "gmail",
      command: "S",
    },
    {
      name: "Discord",
      icon: "/icons/discord.svg",
      app: "calender",
      command: "D",
    },
    {
      name: "Figma",
      icon: "/icons/figma.svg",
      app: "notion",
      command: "F",
    },
  ];
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => {
    setshowProfileDropdown(false);
  });

  const [showProfileDropdown, setshowProfileDropdown] = useState(false);

  const { isDarkMode, toggle } = useDarkMode();

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const [show, setshow] = useState("all");
  return (
    <div className="w-full h-screen relative">
      <div className="absolute h-full w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-60 backdrop-blur-sm"></div>
      <div className="w-full relative z-50 max-w-2xl mx-auto py-10">
        <div className="rounded-md border shadow-xl border-gray-300 dark:border-gray-800 border-opacity-60 dark:border-opacity-70 bg-opacity-90 dark:bg-opacity-50 backdrop-blur-sm overflow-hidden bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3 px-4 py-4 border-b dark:border-opacity-60 border-opacity-70 border-b-gray-200 dark:border-b-gray-800 ">
            <Search size={16} className="text-gray-700 dark:text-gray-100" />
            <input
              className="bg-transparent mt-1 font-medium text-gray-500 dark:text-gray-400 outline-none text-[13px] flex-1"
              placeholder="Search or type by command"
            />
            <button
              onClick={() => toggle()}
              class="text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-opacity-25 dark:hover:bg-gray-700 focus:outline-none rounded-[3px] text-sm p-[6px]"
            >
              {!isDarkMode ? (
                <svg
                  aria-hidden="true"
                  id="theme-toggle-dark-icon"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  id="theme-toggle-light-icon"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              )}

              <span class="sr-only">Toggle dark mode</span>
            </button>
            <div className="relative">
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  setshowProfileDropdown(!showProfileDropdown);
                }}
                className="cursor-pointer  rounded-full border-gray-800 active:scale-95 transition-all "
              >
                <img
                  className="h-7 w-7 bg-slate-800 rounded-full"
                  src="https://bit.ly/dan-abramov"
                  alt=""
                />
              </a>
              {showProfileDropdown && (
                <div
                  ref={dropDownRef}
                  className="absolute top-10  w-[250px]  right-0"
                >
                  <div className="p-[6px] border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl w-full rounded-[3px] bg-white dark:bg-[#120f20] bg-opacity-60 dark:bg-opacity-80 backdrop-blur-md">
                    <span className="text-[12.5px] px-2 py-[6px] flex text-gray-500 font-medium">
                      Account
                    </span>
                    {[
                      { title: "Profile", icon: User, command: "P" },
                      { title: "Favorites", icon: Star, command: "F" },
                      { title: "Settings", icon: Settings },
                      { title: "Sign out", icon: LogOut },
                    ].map((e) => {
                      return (
                        <a className="flex hover:bg-slate-200 dark:hover:bg-opacity-70 hover:bg-opacity-30 dark:hover:bg-[#1f1534] hover:backdrop-blur-sm rounded-[3px] active:scale-95 active:transition-all cursor-pointer gap-2 py-2 my-1 px-2 w-full items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <e.icon
                              className="text-gray-600 dark:text-slate-300 text-opacity-80"
                              size={16}
                            />
                            <span className="text-gray-600 font-medium dark:text-gray-300 text-opacity-80 text-[13.5px]">
                              {e.title}
                            </span>
                          </div>
                          {e.command && <CmdShortCut command={e.command} />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-[450px] overflow-y-auto">
            <div className="my-2">
              <div className="flex mx-3 mb-3 mt-4 items-center gap-3">
                {["all", "people", "apps", "commands"].map((e) => {
                  return (
                    <a
                      onClick={() => {
                        setshow(e);
                      }}
                      className={`${
                        show === e
                          ? "dark:hover:bg-[#1f1534] bg-[#9400b9] bg-opacity-5 border-opacity-40 text-[#9400b9] border-[#9400b9]"
                          : "dark:hover:bg-[#1f1534] border-slate-300 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                      } capitalize cursor-pointer font-medium active:scale-95 transition-all dark:hover:bg-opacity-50 text-[13.5px] border px-4 py-[6px] rounded-[3px]  `}
                    >
                      {e}
                    </a>
                  );
                })}
              </div>
              <div className="flex text-gray-700 dark:text-gray-200 items-center gap-2 px-3 py-2">
                <AiIcon />
                <span className="text-gray-400 text-[13px]">Ai Prompts</span>
              </div>
              <div className="flex px-2 flex-col gap-1">
                {prompts.map((prompt) => (
                  <div className="flex hover:bg-slate-200 hover:bg-opacity-30  rounded-[3px] dark:hover:bg-[#1f1534]  dark:hover:bg-opacity-60 cursor-pointer active:scale-95 active:transition-all py-2 px-3 my-[2px] items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="w-4 h-4" src={prompt.icon} alt="" />
                      <span className="text-[13.5px] text-slate-800 dark:text-gray-200 font-medium">
                        {prompt.title}
                      </span>
                      <span className="text-[13px] capitalize text-gray-500 dark:text-gray-400">
                        {prompt.app}
                      </span>
                    </div>
                    <CmdShortCut command={prompt.command} />
                  </div>
                ))}
              </div>
            </div>

            <div className="my-2">
              <div className="flex items-center gap-2 px-3 py-2">
                <span className="text-gray-400 text-[13px]">Applications</span>
              </div>
              <div className="flex px-3 flex-col gap-1">
                {applications.map((application) => (
                  <div className="flex py-3 hover:bg-slate-200 dark:hover:bg-[#1f1534]  dark:hover:bg-opacity-60 hover:bg-opacity-30 cursor-pointer active:scale-95 active:transition-all px-2 my-[2px] items-center rounded-[3px] justify-between">
                    <div className="flex items-center gap-3">
                      <img className="w-4 h-4" src={application.icon} alt="" />
                      <span className="text-[13.5px] text-gray-700 dark:text-gray-200 font-medium">
                        {application.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-800 border-opacity-40 dark:border-opacity-40 flex items-center justify-between py-2 px-4">
            <a href="" className="flex items-center gap-2">
              <span className="text-[12.5px] font-medium text-gray-800 dark:text-gray-100 text-opacity-70 dark:text-opacity-30 tracking-wide">
                Suggestions
              </span>
              <span className="px-1 py-[2px] bg-gray-200 dark:bg-gray-800 font-bold text-[10px] rounded-sm text-gray-500 dark:text-gray-400">
                TAB
              </span>
            </a>
            <div className="flex items-center gap-3">
              <a href="" className="flex gap-2">
                <span className="font-medium text-gray-400 text-[13px]">
                  Open Application
                </span>
                <kbd className="h-5 w-5 flex justify-center bg-opacity-60 items-center bg-gray-200 dark:bg-gray-800 font-bold text-[14px] rounded-sm text-gray-400">
                  ↵
                </kbd>
              </a>
              <a className="flex hover:bg-slate-200 dark:hover:bg-slate-800 group dark:hover:bg-opacity-40 hover:bg-opacity-40 rounded-[3px] active:scale-95 transition-all cursor-pointer px-2 py-1 items-center gap-2">
                <span className="font-medium text-gray-400 text-[12px]">
                  Action
                </span>
                <kbd className="h-6 w-6 flex justify-center items-center group-hover:bg-opacity-80  bg-opacity-50 bg-gray-200 dark:bg-gray-800 font-bold text-[12px] rounded-sm text-gray-400">
                  ⌘
                </kbd>
                <kbd className="h-6 w-6 flex justify-center items-center  group-hover:bg-opacity-80  bg-opacity-50 bg-gray-200 dark:bg-gray-800 font-bold text-[12px] rounded-sm text-gray-400">
                  K
                </kbd>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function CmdShortCut({ command }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-100 dark:bg-gray-700 bg-opacity-90 dark:bg-opacity-25 rounded-[2px] h-6 w-6 flex items-center justify-center">
        <Command className="text-gray-400" size={14} />
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 bg-opacity-90 dark:bg-opacity-25 rounded-[2px] h-6 w-6 flex items-center justify-center">
        <span className="text-gray-400 font-medium text-[12px]">{command}</span>
      </div>
    </div>
  );
}
const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
