import React, { useState, useEffect } from 'react';
import axios from 'axios';


const styles = {
  whatwedocard: {
    background:'#ffffff',
    padding: '58px 45px',
    height: '100%',
    borderRadius: '8px',
    border:'1px solid #282828',
  },
  whatwedofeaturedicon: {
    marginBottom: '43px',
    MaxHeight: '60px',
  },
  imageprev: {
    maxWidth: '160px',
  },
  sectionheading: {
    marginBottom: '19px',
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '24px',
    lineHeight: '120%;'
  },
  paragraph: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    color: '#797979',
  },
};

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => response.data)
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  const addtoCart = () => {
    console.log(this)
  }

  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <div className='row mb-4'>
            {data.map(user => (
              <div className="col-xl-4 col-md-6 col-12 mb-4" key={user.id}>
                <div style={styles.whatwedocard} onClick={addtoCart()}>
                  <div style={styles.whatwedofeaturedicon}>
                    <img style={styles.imageprev} alt={user.category} className="img-fluid" src={user.image} />
                  </div>
                  <div className="what-we-do-detail">
                    <h2 style={styles.sectionheading}>{user.title}</h2>
                    <p style={styles.paragraph}>{user.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
