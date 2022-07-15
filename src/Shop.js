import React, { useState } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function handleFormSubmit(e) {
    setVal(false);
    e.preventDefault();
    const product = {
      id: getRandomInt(0, 1000000),
      name: item,
      desc: desc
    };
    if (product.name === "" || product.desc === "") {
      setVal(true);
    } else {
      setItems([...items, product]);
      setItem("");
      setDesc("");
    }
  }

  function handleDeleteItem(el) {
    setItems(items.filter((e) => e.id !== el.id));
  }

  if (items.length === 0) {
    if (!val) {
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
              <div align="center" className="validation"></div>
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
              <div align="center" className="validation">
                Заполните поля
              </div>
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
    }
  } else {
    if (!val) {
      const Im = items.map((el) => (
        <div key={el.id}>
          <Item key={el.id} info={el} />
          <button className="item-button" onClick={() => handleDeleteItem(el)}>
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
    } else {
      const Im = items.map((el) => (
        <div key={el.id}>
          <Item key={el.id} info={el} />
          <button className="item-button" onClick={() => handleDeleteItem}>
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
              <div align="center" className="validation">
                Заполните поля
              </div>
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
}
