import React, { useState } from "react";

const Sections = ({ title, descriptions ,isVisible ,SetisVisible }) => {
  return (
    <div className=" border border-black  p-2 m-2">
      <h3 className="text-xl text-orange-800 ">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => SetisVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => SetisVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p className=" text-gray-800 text-lg">{descriptions}</p>}
    </div>
  );
};
const InsertMart = () => {
  const [configisVisible, setconfigisVisible] = useState("about")
  
  return (
    <div className="text-xl font-semibold p-2 m-2 text-cyan-800 ">
      InsertMart
      <Sections
        title={"About Instmart"}
        descriptions={"This is About section of instmart"}
        isVisible={configisVisible === "about"}
        SetisVisible={() => setconfigisVisible("about")}
      />
      <Sections
        title={"Team Instmart"}
        descriptions={"This is Team section of instmart"}
        isVisible={configisVisible === "team"}
        SetisVisible={() => setconfigisVisible("team")}
      />
      <Sections
        title={"Careers Instmart"}
        descriptions={"This is Carreers section of instmart"}
        isVisible={configisVisible === "careers"}
        SetisVisible={()=>setconfigisVisible("careers")}
      />
    </div>
  );
};

export default InsertMart;









