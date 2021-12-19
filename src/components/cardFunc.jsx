import React from "react";

function cardFunc(props) {
  const {item} = props;
  return (
    <div>
      <h1 className="title">{item.title}</h1>
      <h2 className="text">{item.brand}</h2>
      <h3 className="text">{item.description}</h3>
      <div className="text">{item.descriptionFull}</div>
      <div className="text">{item.price} {item.currency}</div>
    </div>
  )
}

export default cardFunc;