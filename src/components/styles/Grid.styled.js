import styled from "styled-components"

export const LeftPanel = styled.div`
  grid-area: leftPanel;
`

export const RightPanel = styled.div`
  grid-area: rightPanel;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) 1fr 2fr;
  grid-template-rows: 1fr;
  grid-gap: 3em;
  margin: 3em;
  grid-template-areas:
    "leftPanel rightPanel rightPanel";
`