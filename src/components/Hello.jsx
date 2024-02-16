import React from 'react'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'
// import useStdoutDimensions from 'ink-use-stdout-dimensions'

export function Hello () {
  // const [x, y] = useStdoutDimensions()

  return <>
        <Gradient name="pastel">
          <BigText text="Hello world !" />
        </Gradient>
    </>
}
