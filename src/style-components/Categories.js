import React from "react";
import "./Categories.css"

function Categories({ categories }) {

  console.log(categories)

  return (
    <div className="container-fluid categories">
        <div className="row">
        {categories.map((e) => (
            
            <div className={`category col-md-4 col-sm-6`} key={e.id}>
              <img className="category-image"  src={e.image} alt={`${e.title}-category`} />
              <div className="category-content">
                  <h1 className="category-title">{`${e.title}`}</h1>
                  <div className="category-button">Shop Now</div>
              </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Categories;
