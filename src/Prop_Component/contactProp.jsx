import React from "react";

const ContactInfo = (props) => {
    return(
<p className="Contact-info">Mobile: {props.mobile}  &nbsp;   Alternative Mobile: {props.mobileTwo} </p>
    );
}

export default ContactInfo;