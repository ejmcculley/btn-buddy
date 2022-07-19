import styled from "styled-components"

export const LeftPanel = styled.div`
  grid-area: leftPanel;
`

export const RightPanel = styled.div`
  grid-area: rightPanel;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr
  grid-template-rows: auto;
  grid-template-areas:
    "leftPanel rightPanel rightPanel";
`