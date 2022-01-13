import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import blog from "../img/become-a-partner.jpg";
import axios from "axios";

export class OurBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }

  getUsersData() {
    axios
      .get(`/admin/getBlogData/6`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const blogs = data.map((u) => (
          <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
            <div className="single_devide_blog single_blog">
              <div className="blog_content">
                <h4>{u.Title}</h4>
                <p>{u.Description}</p>
                <a href="(u.link)" className="read_more">
                  Read More
                </a>
              </div>
              <div className="blog_img">
                <img src={"http://localhost/admin/public/uploads/" + u.Image} />
              </div>
            </div>
          </div>
        ));
        this.setState({
          blogs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }

  // // function getBlogData() {
  // //   fetch("/admin/getBlogData", function (data, status) {
  // //     console.log(data);
  // //     //return "Data: " + data;
  // //     // var myObject = JSON.parse(data);
  // //     // console.log(myObject);
  // //     // for (var i = 0; i < 10; i++) {
  // //     //   console.log(myObject);
  // //     // }
  // //   });

  //   // fetch(`${this.domain}/api/debt/update/`, {
  //   //   method: "GET",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   // body: JSON.stringify({
  //   //   //   user: this.props.id,
  //   //   // }),
  //   // });
  // }
  render() {
    return (
      <div>
        <section className="our_blog_sec">
          <div className="section_typing">
            <Typed strings={["Our Worldwide CLients"]} typeSpeed={150} />
          </div>
          <div className="container-fluid">
            <div className="row">
              {this.state.blogs}

              {/* <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
                <div className="single_devide_blog single_blog ">
                  <div className="blog_content theme-yellow2">
                    <h4>A shoppable video check platform for AiBUY</h4>
                    <p>
                      Find out how Itransition’s dedicated team helped AiBUY
                      release their innovative machine learning-driven shoppable
                      video platforms.
                    </p>
                    <a className="read_more" href="#">
                      Read More
                    </a>
                  </div>
                  <div className="blog_img">
                    <img src={blog} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
                <div className="single_slow_blog single_blog bg-white">
                  <div className="slow_blog_content">
                    <h4>A shoppable video check platform for AiBUY</h4>
                    <p>
                      Find out how Itransition’s dedicated team helped AiBUY
                      release their innovative machine learning-driven shoppable
                      video platforms.
                    </p>
                    <a className="read_more" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
                <div className="single_devide_blog single_blog">
                  <div className="blog_img">
                    <img src={blog} />
                  </div>
                  <div className="blog_content">
                    <h4>A shoppable video check platform for AiBUY</h4>
                    <p>
                      Find out how Itransition’s dedicated team helped AiBUY
                      release their innovative machine learning-driven shoppable
                      video platforms.
                    </p>
                    <a className="read_more" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
                <div className="single_devide_blog single_blog">
                  <div className="blog_img">
                    <img src={blog} />
                  </div>
                  <div className="blog_content theme-yellow2">
                    <h4>A shoppable video check platform for AiBUY</h4>
                    <p>
                      Find out how Itransitions dedicated team helped AiBUY
                      release their innovative machine learning-driven shoppable
                      video platforms.
                    </p>
                    <a className="read_more" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
                <div className="single_slow_blog single_blog overlay_blog">
                  <div className="slow_blog_content">
                    <h4>A shoppable video check platform for AiBUY</h4>
                    <p>
                      Find out how Itransition’s dedicated team helped AiBUY
                      release their innovative machine learning-driven shoppable
                      video platforms.
                    </p>
                    <a className="read_more" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default OurBlog;
