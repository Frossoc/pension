"use client";

import type { NextPage } from "next";

const LoginRegister: NextPage = () => {
  const backgroundImageUrl =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI5NGYya2ltZHV3bGNvbGtkam0zYWlkdXh4cG9iczk2enl5aDZwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26wcZyhxSWRg4p2lG/giphy.webp"; // Reemplaza con el enlace de tu imagen

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row">
        {/* Formulario de registro de usuario */}
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-10">
          <form className="card-body">
            <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="username" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>

        {/* Formulario de inicio de sesión */}
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
