// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

/*💫💫💫💫💫 Solution 💫💫💫💫💫💫
const handleSubmit = (event) => {
  event.preventDefault()
  console.dir(event)
  onSubmitUsername(event.target.username.value)
}
return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor={"username"}>Username:</label>
      <input name="username" type="text"/>
    </div>
    <button type="submit">Submit</button>
  </form>
)

}
*/

/*💫💫💫💫💫 Extra Credit 1 💫💫💫💫💫💫

const inputRef = React.useRef()

const handleSubmit = (event) => {
  event.preventDefault()
  console.dir(inputRef.current.value)
  onSubmitUsername(inputRef.current.value)
}
return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"username"}>Username:</label>
        <input name="username" ref={inputRef} type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
)

}
*/

/*💫💫💫💫💫 Extra Credit 2 💫💫💫💫💫💫
const [error, setError] = React.useState(null)
const inputRef = React.useRef()

const handleSubmit = (event) => {
  event.preventDefault()
  console.dir(inputRef.current.value)
  onSubmitUsername(inputRef.current.value)
}

const handleChange = (event) => {
  const {value} = event.target
  const isValid = value === value.toLowerCase()
 setError(isValid ? null : 'Username must be lower case')

}
return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"username"}>Username:</label>
        <input onChange={handleChange} name="username" ref={inputRef} type="text"/>
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
)

}
*/


/*💫💫💫💫💫 Extra Credit 3 💫💫💫💫💫💫*/
  const [username, changeUsername] = React.useState('')
  const inputRef = React.useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    //console.dir(inputRef.current.value)
    onSubmitUsername(username)
  }

  const onChange = (event) => {
    const {value} = event.target
    const lowercase = value.toLowerCase()
    changeUsername(lowercase)
  }
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={"username"}>Username:</label>
          <input onChange={onChange} value={username} name="username" ref={inputRef} type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
  )

}
//*


function App() {
const onSubmitUsername = username => alert(`You entered: ${username}`)
return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
