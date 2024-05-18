import preact from 'preact';
import styled from 'styled-components';

function HeadingBase(text) {
  return (
    <div id="component">
      <h1 id="htext">{text}</h1>
    </div>
  )
}
const Heading = styled(HeadingBase)`
:root {
  --purple: rgba(160, 32, 240, 1);
  --chartre:  rgba(176, 252, 56, 1)
  --grad:  linear-gradient(90deg, var(--purple), var(--chartre)); 
  --font: "Source Sans Pro", "Arial", sans-serif;

}
#component {
  margin: 0px;
  display: flex;
  flex-direction: center;
  padding: 5px;
  background: transparent;
}
#htext {
  font-family: var(--font);
  font-size: 1.8em;
  line-height: 1.5;
  text-align: center;
  text-emphasis: filled;
  border: 2px solid var(--gradient);
  color: var(--grad);
}

`

export {Heading};