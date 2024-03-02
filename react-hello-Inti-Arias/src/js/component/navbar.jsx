import React from "react";
const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand text-white bg-dark" href="#">START BOOTSTRAP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-link active text-white bg-dark" aria-current="page" href="#">Home</a>
            <a class="nav-link text-white bg-dark" href="#">About</a>
            <a class="nav-link text-white bg-dark" href="#">Service</a>
            <a class="nav-link disabled text-white bg-dark" aria-disabled="true">Contact</a>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;


 