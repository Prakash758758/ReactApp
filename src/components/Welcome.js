import React from "react";

class Welcome extends React.Component {
    render(){
        return(
            <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell"> 
              <button className="mdc-button">
   <span className="mdc-button__ripple"></span>
   <span className="mdc-button__label">Text Button</span>
</button></div>
              <div className="mdc-layout-grid__cell"><button className="mdc-button mdc-button--raised">
  <span className="mdc-button__label">Contained Button</span>
</button></div>
              <div className="mdc-layout-grid__cell">HI</div>
            </div>
          </div>
        )
    }
}
export default Welcome