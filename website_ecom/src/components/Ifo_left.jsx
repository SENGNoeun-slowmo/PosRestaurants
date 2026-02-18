import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Ifo-left.css'
function Ifo_left(props) {
  const { list_categories } = props;
  return (
    <div className="ifo-left col-xl-2 col-lg-2 col-md-2 col-sm-12">
          <h1>Welcome to Our Store</h1>
          {list_categories.map((category) => (
            <div key={category.id} className="category-item ">
              <Link className='link' to="/category">{category.title}</Link>
            </div>
          ))}
          <button className="shop-now-btn">Shop Now</button>
        </div>
  )
}

export default Ifo_left