import React, { Component } from "react";

class Expertise extends Component {
  render() {
    if (this.props.resumeExpertise && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.expertise;
      var expertise = this.props.resumeExpertise.icons.map(function (expertise, i) {
        return (
            <div className="col-md-6 text-center mx-auto">
              <h3 className="pt-5">
                {expertise.title}
              </h3>
              <p
                className="text-center"
                style={{ fontSize: "140%", marginTop: "4px", marginLeft: "50px", marginRight: "50px" }}
              >
                {expertise.description}
              </p>
            </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 mx-auto">
            <div 
              className="row mx-auto"
              style={{color: "white"}}
            >
              {expertise}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Expertise;
