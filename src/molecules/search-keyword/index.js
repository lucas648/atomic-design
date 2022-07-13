import React from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";

export default function SearchKeyword() {
  return(
    <form className="form-inline my-2 my-lg-0">
      <Input/>
      <Button texto={'Pesquisar'}/>
    </form>
  )
}