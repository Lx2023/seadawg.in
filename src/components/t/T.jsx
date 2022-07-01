
import React from 'react'
import styled from 'styled-components'

 const T = ({ text, objectSize = 150, spacing = 50, offset = 70, overlap = false }) => {
  const d = objectSize + spacing * 2
  const r = objectSize / 2 + spacing / 2
  const CurvedText = styled.div`
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: ${d + offset * 2}px;
    height: ${r + offset}px;
    /* border:1px solid red; */
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }
    .text{
        color:'red';
    }
  `

  return (
    <CurvedText className="curved-text">
      <svg viewBox={`0 0 ${d + offset * 2} ${r - offset * 2}`}>
        <path id="curve" d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`} />
        <text width="500">
          <textPath xlinkHref="#curve" startOffset="50%" className='text'>
            {text}
          </textPath>
        </text>
      </svg>
    </CurvedText>
  )
}

export default T;