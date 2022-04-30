import React from "react";
import { About } from "./About.component";
import { Nav } from "./Nav.component";
import { Contact } from "./Contact.component";
import { Services } from "./Services.component";

export const Home = () => {
  return (
    <div>
      <About />
      <Contact />
      <Services />
    </div>
  );
};
