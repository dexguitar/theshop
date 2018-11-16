import React from "react";

import "./ItemTable.css";

const itemTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>
            Название &nbsp;{" "}
            <button onClick={() => props.titleSort("title")}>
              Сортировать
            </button>
          </th>
          <th>Изображение</th>
          <th>
            Цена &nbsp;
            <button onClick={() => props.priceSort("price")}>
              Сортировать
            </button>
          </th>
          <th>
            Старая цена &nbsp;{" "}
            <button onClick={() => props.oldPriceSort("oldPrice")}>
              Сортировать
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => {
          return (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.data.title}</td>
              <td>
                <img src={row.data.base_url} alt="" />
              </td>
              <td>{row.data.price}</td>
              <td>{row.data.oldPrice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default itemTable;
