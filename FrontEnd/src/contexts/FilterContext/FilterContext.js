import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

const FilterContextProvider = (props) => {
  const [ neededSkills, setNeededSkill ] = useState([])
  const [ showSkillMatch, setShowSkillMatch ] = useState(false)
  return (
    <FilterContext.Provider value={{ neededSkills, setNeededSkill, showSkillMatch, setShowSkillMatch }}>
      {props.children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider