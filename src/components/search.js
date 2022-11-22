
import { useRef} from 'react';
import * as React from 'react';


const Search = ({ searchedInput}) => {
  const searchRef = useRef();
    const searched = e => {
        e.preventDefault();
        const searchKey = searchRef.current.value;
        searchedInput(searchKey);
    };


  return (
    <div className='search-box'>
        <form onSubmit={searched}>
        <input  type="text" name="search" placeholeder="search" id="search" ref={searchRef}  />
        <button>Search</button>
        </form>
             
    </div>
  )
}

export default Search