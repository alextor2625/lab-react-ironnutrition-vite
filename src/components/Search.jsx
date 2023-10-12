import { Divider, Input, Button } from "antd";

const Search = ({setSearch}) => {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  };

  return (
    <div>
      <Divider>Search</Divider>
      <Input type="text" value={undefined} name="search" onChange={handleSearch} />
    </div>
  );
};

export default Search;
