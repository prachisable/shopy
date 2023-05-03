import React from 'react';
import './Home.css';
import Product from './Product';        


function Home() {
  return (
    <div className='Home'>
        <div className="home__container">
            <img 
                className='home__image'
                src='https://maxima.lbcdn.io/uploads/2020/05/AdobeStock_209180436-1500x600.jpeg'
                alt=''
            />
            <div className="home__row">
                <Product 
                  id="1234786"
                  title="The lean startup"
                  price={29.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  rating={3}
                />
                <Product 
                  id="1234"
                  title="Stylish Kitchen Mixer"
                  price={239.0}
                  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450.jpg"
                  rating={4}
                />
            </div>

            <div className="home__row">
            <Product 
               id="12345"
               title="Samsung Gaming Monitor"
               price={179.0}
               image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
               rating={4}
            />
            <Product 
               id="123"
               title="Amazon Echo Smart Speaker"
               price={150.0}
               image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex25"
               rating={5}
            />
            <Product 
               id="123466"
               title="New Apple iPad Pro"
               price={200.0}
               image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
               rating={3}
            />
            </div>
            <div className="home__row">
            <Product 
               id="123455"
               title="Samsung 49 Curved LED Gaming Monitor Super Ultra Wide"
               price={1080.0}
               image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX335_.jpg"
               rating={4}
            />
             <Product 
               id="123456"
               title="Shopy Fashion Store Women Georgette Bollywood Designer Semi-Stitched Salwar Suit (SFS_ER11049_Peach_Free Size)"
               price={700.0}
               image="https://m.media-amazon.com/images/I/71Jm8dz1+8L._UL1500_.jpg"
               rating={5}
            />
            </div>

        </div>
    </div>
    
  );
}

export default Home