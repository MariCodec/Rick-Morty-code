import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import { API_URL, URLS } from "../../consts";

const Character = () => {
  let { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  let { name, gender, image, status, type, species, origin } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(`${API_URL}/character/${id}`).then((res) =>
        res.json()
      );
      setFetchedData(data);
      console.log(data);
    })();
  }, [id]);

  return (
    <div className="container">
      <Link to={URLS.ROOT}>
        <div className="button">
          <AiOutlineArrowLeft className="arrow" />
          GO BACK
        </div>
      </Link>
      <div className="header">
        <img src={image} alt="" />
        <p>{name}</p>
        <h3>Informations</h3>
      </div>
      <div className="info">
        <div className="list">
          <h4>
            Gender <br /> <span>{gender}</span>
            <p className="border"></p>
          </h4>
          <h4>
            Status
            <br /> <span>{status}</span>
          </h4>
          <h4>
            Specie
            <br /> <span>{species}</span>
          </h4>
          <h4>
            Origin
            <br /> <span>{origin?.name}</span>
          </h4>
          <h4>
            Type
            <br /> <span>{type ? type : "Uncknown"}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Character;
