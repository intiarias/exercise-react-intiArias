import React from "react";
const Jumbotron = () => {
  return (

    <div className="jumbotron container d-flex bg-secondary text-white">
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere facilis, aperiam voluptas quasi dicta debitis pariatur veniam hic sapiente accusantium ipsum non? Aliquid, earum. Dignissimos neque cumque ratione minima.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  </div>
  )
}

export default Jumbotron;