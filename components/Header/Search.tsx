import React from "react";

export interface ISearchProps {}

const Search: React.FC<ISearchProps> = () => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Buscador de cursos"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default Search;
