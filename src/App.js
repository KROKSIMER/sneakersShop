
import axios from "axios";
import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isDrawer, setDrawer] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    // fetch('https://6342be7dba4478d47841618c.mockapi.io/items').then((response) => {
    //   return response.json()
    // }).then((json) => {
    //   setItems(json)
    // }).catch((error) => {
    //   console.log("Во время загрузки произошла непредвиденная ошибка!")
    // })

    axios.get('https://6342be7dba4478d47841618c.mockapi.io/items').then((res) => {
      setItems(res.data);

    })
    axios.get('https://6342be7dba4478d47841618c.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
      console.log(res.data)
    })
  }, [])
  const addToCard = (obj) => {
    
    
    let cartFind = cartItems.find(element => {
      if (element.name === obj.name){
        return true
      }
    })
    if (!cartFind){
      console.log("Ботинок добавлен!", obj)
      axios.post("https://6342be7dba4478d47841618c.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
      
    }else{
      console.log("Ботинок удален!", obj)
      axios.delete("https://6342be7dba4478d47841618c.mockapi.io/cart", obj)
        .then(() => this.setCartItems({ status: 'Delete successful'}));
      setCartItems(cartItems.filter(p => p.name !== obj.name))

    }
    
  }
  const changeSearchInput = (event) => {
    setSearchInput(event.target.value)
  }
  return (
    <div className="wrapper clear">
      {isDrawer && <Drawer onClickDrawer={() => setDrawer(false)} items={cartItems}/>}
      <Header onClickDrawer={() => setDrawer(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1 className="">{searchInput ? `Результат по запросу: ${searchInput}` : `Все кроссовки`}</h1>
        <div className="searchBlock d-flex">
          <img src="/img/search.svg" alt="search" />
          <input onChange={changeSearchInput} type="text" placeholder="Поиск..."/>
        </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map( val => (
          <Card
            id={val.id}
            name={val.name}
            price={val.price}
            img={val.img}
            key={val.name} 
            onPlus={(obj) => addToCard(obj)} 
            onFavorite={() => console.log("Товар добавлен в избранное!")} 
          />))}
        </div>
      </div>
    </div>
  );
}

export default App;
