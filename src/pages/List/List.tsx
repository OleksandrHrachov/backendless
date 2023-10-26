import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../endpoint";
import { Endpoint, Path } from "../../path";
import { useLocation } from "react-router-dom";
import { Response } from "../../types";
import './List.scss';

export default function List() {
  const { pathname } = useLocation();

  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pathname === Path.LIST) {
      setIsLoading(true);
      const res = fetch(`${BASE_URL}${Endpoint.LIST}`)
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch(() => setError("SOME ERROR"))
        .finally(() => setIsLoading(false));
    }
  }, [pathname]);

  if (isLoading) {
    return(
      <div className="list-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-page">
        <h2>{error}</h2>
      </div>
    ) ;
  }

  return (
    <div className="list-page">
      <table>
        <tbody>
          <tr>
            <th className="cell">ID</th>
            <th className="cell">TITLE</th>
            <th className="cell">ORDER</th>
            <th className="cell">PATH</th>
          </tr>
          <tr>
            <td className="cell">{data?.id}</td>
            <td className="cell">{data?.title}</td>
            <td className="cell">{data?.order}</td>
            <td className="cell">{data?.path}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
