import axios from "axios"
import React, { useState, useEffect } from 'react'

const InputField = () => {
  // Save names into useState array
  const [userData, setUserData] = useState([])
  const [text, setText] = useState("")

  const onChangeFun = (e) => {
    setText(e.target.value)
  }

  // Useeffect
  useEffect(() => {
    // Get list of users
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // Set list of users to useState
        setUserData(res.data)
      })
      .catch((err) => {
        // Console log error
        console.log(err)
      })
  }, [])

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            onChange={(e) => onChangeFun(e)}
            value={text}
            placeholder="Search.."
          />
        </div>
        <input type="submit"></input>
      </form>
      {/* Filter through userData */}
      {userData.filter((val) => {
        if (text === "") {
          return val
        } else if (val.name.toLowerCase().includes(text.toLowerCase())) {
          return val
        }
        {/* Map through results */ }
      }).map((item, ind) => {
        return (
          <div key={ind}>
            <p>
              {item.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default InputField