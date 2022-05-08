import axios from "axios"
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

const InputField = () => {
  // Save names into useState array
  const [userData, setUserData] = useState([])
  const dispatch = useDispatch()
  const searchText = useSelector(state => state.search)

  const onChangeFun = (e) => {
    // Save the input value into the state
    dispatch({ type: "ADD_TO_SEARCH", payload: e.target.value })
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
            onChange={onChangeFun}
            value={searchText}
            placeholder="Search.."
          />
        </div>
        <input type="submit"></input>
      </form>
      {/* Filter through userData */}
      {userData.filter((val) => {
        if (searchText === "") {
          return val
        } else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
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