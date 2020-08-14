import React from "react";

import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel, onItemsUpdate } = props;
  const { next, previous } = data || {};
  const items = data.results.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <div className="item-list">
      <ul className="item-list list-group">{items}</ul>
      <button
        className="btn btn-dark"
        disabled={!previous}
        onClick={() => onItemsUpdate(previous)}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
      <button
        className="btn btn-dark"
        disabled={!next}
        onClick={() => onItemsUpdate(next)}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    </div>
  );
};

export default ItemList;
