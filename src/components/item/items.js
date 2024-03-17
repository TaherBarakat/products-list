import React from "react";

const Items = (props) => {
     const { items, del, inc, dec } = props;
     //  console.log(1);
     let length = items.length;
     const ListItem = length ? (
          items.map((item) => {
               return (
                    <div key={item.id} className="item">
                         <p>{item.product}</p>
                         <p>{item.price}</p>
                         <p>{item.quantity}</p>
                         <p
                              className="edit delete"
                              onClick={() => del(item.id)}
                         >
                              &times;
                         </p>
                         <p
                              className="edit increase"
                              onClick={() => inc(item.id)}
                         >
                              &#43;
                         </p>
                         <p
                              className="edit decrease "
                              onClick={() => dec(item.id)}
                         >
                              &#45;
                         </p>
                    </div>
               );
          })
     ) : (
          <div className="text">There are no items, Try to add some.</div>
     );
     return (
          <div>
               <div className="header item">
                    <p>Product</p>
                    <p>Price</p>
                    <p>quantity</p>
                    <p className="edit ">Delete</p>
                    <p className="edit ">increase</p>
                    <p className="edit ">decrease</p>
               </div>
               {ListItem}
          </div>
     );
};

export default Items;
