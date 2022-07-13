import React from "react";

import Header from "../../organisms/header";

export default function Main({route}) {
  return(
    <div>
      <Header/>
      <div className="container mt-5">
        { route }
      </div>
    </div>
  )
}