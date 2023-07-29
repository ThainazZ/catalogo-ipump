import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

interface MenuItem {
  id: number;
  title: string;
  category: string;
  img: string;
  desc: string;
}

const allCategories = ['Geral', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === 'Geral') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Iron Pump</h2>
        </div>
        <div className='subtitle'>
          <h3>Qual o seu objetivo?</h3>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
