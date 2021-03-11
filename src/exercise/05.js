// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

/*💫💫💫💫💫 Solution 💫💫💫💫💫💫

const smallBox =
    <div
        className={"box box--small"}
        style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
    >
        small lightblue box</div>
const mediumBox =
    <div
        className={"box box--medium"}
        style={{backgroundColor: 'pink', fontStyle: 'italic'}}>
            medium pink box
    </div>
const largeBox =
    <div
        className={"box box--large"}
        style={{backgroundColor: 'orange', fontStyle: 'italic'}}>
            large orange box
    </div>

*/

/*💫💫💫💫💫 Extra Credit 1 💫💫💫💫💫💫

const Box = ({className = '', style = '', ...otherProps}) => {
    return <div
        className={`box ${className}`}
        style={{fontStyle: 'italic', ...style}}
        {...otherProps}
    />
}

const smallBox =
    <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
</Box>
const mediumBox =
    <Box
        className={"box box--medium"}
        style={{backgroundColor: 'pink'}}>
            medium pink box
    </Box>
const largeBox =
    <Box
        className={"box box--large"}
        style={{backgroundColor: 'orange'}}>
            large orange box
    </Box>
const testBox = <Box>Test Box</Box>

 */

/*💫💫💫💫💫 Extra Credit 2 💫💫💫💫💫💫 */

const Box = ({size = '', style = '', ...otherProps}) => {
    return <div
        className={`box box--${size}`}
        style={{fontStyle: 'italic', ...style}}
        {...otherProps}
    />
}


const smallBox =
    <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
    </Box>
const mediumBox =
    <Box
        size="medium"
        style={{backgroundColor: 'pink'}}>
        medium pink box
    </Box>
const largeBox =
    <Box
        size="large"
        style={{backgroundColor: 'orange'}}>
        large orange box
    </Box>
const testBox = <Box>Test Box</Box>

// */

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {testBox}
    </div>
  )
}

export default App
