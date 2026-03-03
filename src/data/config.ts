const config = {
  title: "Prasun Srivastav | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Prasun, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Tic tac toe,Rent Went, Bus project and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Prasun, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Prasun",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Tic tac toe",
    "BUS Project",
    "RENT WENT",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Prasun Srivastav",
  email: "prasunsrivastav123@gmail.com",
  site: "https://PrasunSrivastav.site",

  // for github stars button
  githubUsername: "Prasun-Srivastav",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/prasun0850k",
    linkedin: "https://www.linkedin.com/in/prasun-srivastav-4b3075280/",
    instagram: "https://www.instagram.com/prasunsrivastav123/",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/prasunsrivastav123-lang",
  },
};
export { config };
