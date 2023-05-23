import { MdOutlineSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
 

  return (
    <div className="search">
      <MdOutlineSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="Type to Search... "
        onChange={(event)=>{
            handleSearchNote(event.target.value)
        }}
      />
    </div>
  );
};

export default Search;
