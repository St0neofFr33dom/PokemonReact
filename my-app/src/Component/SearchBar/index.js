import React from 'react'

const SearchBar = ({name, setName}) => {
    return (
        <div>
            <input type="text" placeholder="Type a pokemon here" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
    )
}

export default SearchBar