import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";

// truyền prop onSearch để xử lý
const SearchBar = ({onSearch}) => {
  const [keyword, setKeyword] = useState('')

  // xử lí thao tác bấm nút tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(keyword)
    setKeyword('')
  }
  return (
    <div className='search-wrapper'> 

      <div className='search-area'>        
        <input className='search-input' type='text'placeholder='Nhập tên học sinh' onChange={e => setKeyword(e.target.value)}></input>
        <button className='search-button' type='submit' onClick={handleSearch}><FaSearch/></button>      
      </div>
        
    </div>
  )
}

export default SearchBar
