import Home from "./pages/Home";

import Header, { InputDefault } from "./components/Header";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import CarList from "./pages/CarList";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";

function App() {

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem("shoppinglist", JSON.stringify(newItem));
  };
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    console.log({ newItem }, "submitted");
  };
}
  return (
   <div>
   
   
   
   <Header
      search={search}
      setSearch={setSearch}

      items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      newItem={newItem}
      setNewItem={setNewItem}
      
      
    />
    
    
    


    <Home />

    
    

   
            
  
   

   
   </div>
   
  );
}

export default App;