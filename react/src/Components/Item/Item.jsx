import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <figure className="card shadow">
        <a href="details.html" className="img-wrap">
          {props.old_price && <b className="badge bg-success">İndirim</b>}
          <Link to={`/product/${props.id}`}>
            <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
          </Link>
        </a>
        <figcaption className="info-wrap border-top">
          <a href="#" className="float-end btn btn-light btn-icon">
            <i className="fa fa-heart"></i>
          </a>
          <a href="" className="title text-truncate">{props.name}</a>
          <div className="price-wrap">
            <span className="price">{props.new_price}</span>
            {props.old_price && (
              <>
                {' '}
                <del className="price-old">{props.old_price}</del>
              </>
            )}
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Item;
