/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Personal portfolio 🎉",
    description:
    "Created a personal portfolio web application  at the time of Microsoft workshop where showcase about skills , projects , about myself and contact.",
    url: "https://github.com/Shweta220803/Personal-Portfolio.git",
  },
  {
    title: "BookStore web application",
    description:
      "Currently creating a Bookstore application, where user can search and read free books without signup and after signup users can search, read, and also buy books and explore more books.",
    url: "git remote add origin https://github.com/Shweta220803/bookStore_app.git",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Including my personal information like name, contact, about, projects, skills, qualifications.",
    url: "https://github.com/Shweta220803/Workshop.git",
  },
  {
    title: "Password Generator",
    description:
      "Created a random password generator where user can generator random password using uppercase letter (A-Z), lowercase letter (a-z) , digits(0-9) and special symbols(@,#,$,&,(,)....).",
    url: "https://github.com/Shweta220803/Password_Generator.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
