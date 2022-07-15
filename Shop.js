import React, { useState } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState(
    <div align="center" className="validation"></div>
  );

  function handleFormSubmit(e) {
    e.preventDefault();
    const product = {
      id: items.length,
      name: item,
      desc: desc
    };
    if (product.name === "" && product.desc === "") {
      setVal(
        <div align="center" className="validation">
          Ошибка
        </div>
      );
    } else {
      setItems([...items, product]);
    }

    setItem("");
    setDesc("");
  }

  function handleDeleteItem(el) {
    const _items = items;
    _items.splice();
  }

  if (items.length === 0) {
    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Название: </label>
            <input
              id="name"
              value={item}
              type="text"
              onChange={(e) => setItem(e.target.value)}
              placeholder="Название товара"
              className="ui-textfield"
            />
          </div>

          <div>
            <label htmlFor="desc">Описание: </label>
            <input
              id="desc"
              value={desc}
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Описание товара"
              className="ui-textfield"
            />
          </div>

          <div className="form-footer">
            {val}
            <input type="submit" className="ui-button" value="Добавить" />
          </div>
        </form>

        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>

        <ul className="ui-list">
          <li className="ui-item-list">
            <Item info={items[0]} />
          </li>
        </ul>
      </>
    );
  } else {
    const Im = items.map((el) => (
      <div>
        <Item key={items.length} info={el} />
        <button className="item-button" onClick={handleDeleteItem}>
          Удалить
        </button>
      </div>
    ));
    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Название: </label>
            <input
              id="name"
              defaultValue=""
              value={item}
              type="text"
              onChange={(e) => setItem(e.target.value)}
              placeholder="Название товара"
              className="ui-textfield"
            />
          </div>

          <div>
            <label htmlFor="desc">Описание: </label>
            <input
              id="desc"
              value={desc}
              defaultValue=""
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="Описание товара"
              className="ui-textfield"
            />
          </div>

          <div className="form-footer">
            <input type="submit" className="ui-button" value="Добавить" />
          </div>
        </form>

        <ul className="ui-list">
          <li className="ui-item-list">{Im}</li>
        </ul>
      </>
    );
  }
}
