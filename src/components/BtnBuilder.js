import { useState } from "react"
import BtnAlignment from "./BtnAlignment"
import BtnBorder from "./BtnBorder"
import BtnColor from "./BtnColor"
import BtnFill from "./BtnFill"
import BtnHover from "./BtnHover"
import BtnShadow from "./BtnShadow"
import BtnShape from "./BtnShape"

const BtnBuilder = () => {

  const [attribute, setAttribute] = useState(BtnShape);

  return (
    <>
      <BtnShape />
      <BtnColor />
      <BtnFill />
      <BtnBorder />
      <BtnShadow />
      <BtnAlignment />
      <BtnHover />
    </>
  )
}

export default BtnBuilder