import React from "react";
import Login from "./components/Login";
function App() {
  return (
    <div className="bg-sky-950 text-white p-4 w-screen h-200 flex items-center justify-center">
      <img
        src="/desktop-wallpaper-spider-man-anime-cartoon-spider-man.jpg"
        alt="spiderman picture"
        className="h-170 w-100 rounded-l-2xl"
      />
      <Login />
    </div>
  );
}

export default App;
