import BtnAlignment from "Pages/BtnAlignment"
import BtnBorder from "Pages/BtnBorder"
import BtnColor from "Pages/BtnColor"
import BtnFill from "Pages/BtnFill"
import BtnHover from "Pages/BtnHover"
import BtnShadow from "Pages/BtnShadow"
import BtnShape from "Pages/BtnShape"
import Results from "Pages/Results"


const InteractiveWindow = () => {

  return (
    <>
      <BtnShape />
      <BtnColor />
      <BtnFill />
      <BtnBorder />
      <BtnShadow />
      <BtnAlignment />
      <BtnHover />
      <Results />
    </>
  )
}

export default InteractiveWindow