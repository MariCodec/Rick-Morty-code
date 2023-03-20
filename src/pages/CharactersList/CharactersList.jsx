import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Card } from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { API_URL } from "../../consts";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../hooks/useDebounce";

import "../../components/Card/card.scss";

export const CharactersList = ({ photoUser, user, search, setSearch }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(search, 1000);

  const sortCharacters = (characters) => {
    return characters.sort((a, b) => {
      const charA = a.name.toUpperCase();
      const charB = b.name.toUpperCase();
      if (charA < charB) {
        return -1;
      }
      if (charA > charB) {
        return 1;
      }
      return 0;
    });
  };

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) setSearch(search);
  }, [setSearch, searchParams]);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { results } = await fetch(
          `${API_URL}/character?name=${debouncedValue}`
        ).then((res) => res.json());
        setFetchedData(sortCharacters(results));
        setLoading(false);
      } catch (error) {
        setFetchedData([]);
        setLoading(false);
      }
    })();
  }, [debouncedValue]);

  useEffect(() => {
    if (search) {
      searchParams.set("search", search);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, search]);

  const onSearch = useCallback(
    (searchValue) => {
      setSearch(searchValue);
      searchParams.set("search", searchValue);
      setSearchParams(searchParams);
    },
    [setSearch, searchParams, setSearchParams]
  );

  const allowRenderList = useMemo(
    () => fetchedData?.length > 0 && !loading,
    [fetchedData, loading]
  );

  return (
    <div className="app">
      <Header user={user} photoUser={photoUser} />
      <Search onSearch={onSearch} search={search} />
      {loading && <div>loading ...</div>}
      <div className="card">
        {allowRenderList &&
          fetchedData.map((card) => <Card card={card} key={card.id} />)}
        {!allowRenderList && <span>Not Found</span>}
      </div>
    </div>
  );
};
