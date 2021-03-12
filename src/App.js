import React from 'react';
import Product from './Components/Product';
import './App.css';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png'
import Button from "./Components/Button";
import Tile from "./Components/Tile"

function App() {
  return (
      <>
        <nav>
          <h1>Handbags & Purses</h1>

          <Button
          name="to the collection"
          />
          <Button
          name="shop all bags"
          />
          <Button
          name="pre-order"
          disable="disabled"
          />
        </nav>

         <main>
            <Product
            best_seller="Best seller"
            image={bag_1}
            description="The handy bag"
            price="€400"
             />
             <Product
                 best_seller="Best seller"
                 image={bag_2}
                 description="The stylish bag"
                 price="€250"
             />
             <Product
                 best_seller="Best seller"
                 image={bag_3}
                 description="The simple bag"
                 price="€300"
             />
             <Product
                 best_seller="Best seller"
                 image={bag_4}
                 description="The trendy bag"
                 price="€150"
             />
         </main>

         <footer>
            <Tile title="The Brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis dicta exercitationem fuga hic magnam natus omnis quos recusandae voluptas!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate distinctio, facilis fugit incidunt minima molestiae possimus quisquam quos sapiente.</p>
            </Tile>
            <Tile
                image={brand}
                description="brand"
            />
             <Tile
                 image={our_story}
                 description="our story"
             />
            <Tile title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, architecto cum delectus dolorem, doloremque enim explicabo fugiat iste itaque laborum laudantium, necessitatibus nulla praesentium quam quisquam sit unde vitae.</p>
            </Tile>
         </footer>
      </>
  );
}

export default App;



