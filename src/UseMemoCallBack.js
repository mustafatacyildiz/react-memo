import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useRef, useMemo, useCallback } from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  console.log("text", text, "search", search);


  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>setUsers(res.data));
  }, []);
  const handleSearch = ()=>{
    setSearch(text);
    // setSearch(inputRef.current.value);
  };

  const filteredUsers = useMemo(()=>
    users.filter(user=>{
    return user.name.toLowerCase().includes(search.toLowerCase())
  }), [users, search]);

  const addUser = useCallback(()=>{
    setUsers([...users, 
      {id:users.length + 1, name:`Clarusway - ${users.length-9}`}])
  }, [users])
  return (
    <div>
      <input type="search" onChange={(e)=>setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser} />
    </div>
  )
}

export default UseMemoCallBack;