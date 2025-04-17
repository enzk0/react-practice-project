import React from "react";
import Avatar from "./Avatar.jsx";
import Details from "./Details.jsx";

function ContactCard(props) {
  console.log(props);
  return (
    <div>
      <div className="card">
        <div className="top">
          <Details detailInfo={props.id} />
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Details detailInfo={props.phone} />
          <Details detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
