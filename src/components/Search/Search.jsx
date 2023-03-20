import React, { useCallback } from "react";
import "./search.scss";

export default function Search({ onSearch, search }) {
  const onChange = useCallback(
    (e) => {
      onSearch(e.target.value);
    },
    [onSearch]
  );

  return (
    <form className="search">
      <input
        onChange={onChange}
        type="text"
        value={search}
        placeholder="Filter by name..."
      />
    </form>
  );
}
