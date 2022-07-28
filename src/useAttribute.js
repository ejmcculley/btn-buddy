import { useState } from "react"

const useAttribute = () => {
  const [btnAttribute, setBtnAttribute] = useState({backgroundColor: ''});
  const addAttribute = (attribute) => {
    setBtnAttribute({...btnAttribute, ...attribute})
  }
}

export default useAttribute;