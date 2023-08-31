import React from "react";

const Header = () => {
  return (
    <div id="header" className="md:sticky pt-5 px-6 pb-2 mb-6 -top-4 md:border-b z-10 bg-white">
      <header className="xl:mr-16 xl:pr-2 flex flex-wrap items-center ">
        <h1 className="flex flex-nowrap mr-6 md:text-4xl">
          <a
            href=""
            title="Replicate"
            className="no-focus no-outline focus:text-white"
          >
           <img className="m-2 block align-middle" alt="logo" src={require('../Images/logo.jpg')}/>
          </a>
        </h1>

        <div className="hidden md:block text-right flex-grow">
          <nav className="flex justify-end items-start">
            <div className="glass flex flex-wrap justify-end">
              <a href="#" className=" hover:text-black px-3.5 inline-block align-top leading-10 text-[#00000073]">
                Explore
              </a>
              <a href="#" className=" px-3.5 hover:text-black inline-block align-top leading-10 text-[#00000073]">
                Pricing
              </a>
              <a href="#" className="px-3.5 hover:text-black inline-block align-top leading-10 text-[#00000073]">
                Docs
              </a>
              <a href="#" className="px-3.5 hover:text-black inline-block align-top leading-10 text-[#00000073]">
                Blog
              </a>
              <a href="#" className="px-3.5 hover:text-black inline-block align-top leading-10 text-[#00000073]">
                Changelog
              </a>
              <a href="#" className="px-3.5 hover:text-black inline-block align-top leading-10 text-[#00000073]">
                Sign in
              </a>
              <a href="#" className="px-3.5 align-top leading-10 text-white bg-black hover:bg-[#00000073]">
                Get started
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="block md:hidden flex-grow -mx-6 pt-6 md:pb-6 md:mt-12 mb-6">
        <nav className="flex justify-end items-start">
          <div className="glass flex flex-wrap justify-end">
            <a href="/" className="nav-link selected">
              Explore
            </a>

            <a href="" className="nav-link ">
              Pricing
            </a>

            <a href="/docs" className="nav-link ">
              Docs
            </a>

            <a href="" className="nav-link ">
              Blog
            </a>

            <a href="" className="nav-link ">
              Changelog
            </a>

            <a href="" className="nav-link">
              Sign in
            </a>

            <a href="" className="nav-link-primary">
              Get started
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;