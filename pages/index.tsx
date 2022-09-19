import type { NextPage } from "next";
import Image from "next/image";
import PageLayout from "../components/layouts/PageLayout";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../utils/custom-arrows";

const Home: NextPage = () => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <PageLayout>
      <section className="w-full h-full z-0">
        <div className="shadow-lg z-0">
          <Image
            src="/hero-banner.png"
            width={864}
            height={486}
            layout="responsive"
            alt="hero-banner"
          />
        </div>
      </section>
      <section className="w-full flex justify-center md:space-x-10 md:-mt-10 md:mb-10 items-center flex-col md:flex-row">
        <div className="w-1/3 py-14 z-10 bg-home-membership-card bg-cover shadow bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div className="w-20 py-1.5">
            <Image
              src={"/membership-icon.png"}
              width={118}
              height={100}
              alt="Membership Icon"
            />
          </div>
          <p className="text-center text-white text-2xl font-medium">
            Membership Card
          </p>
        </div>
        <div className="w-1/3 py-14 z-10 bg-home-rpi-contribution-card bg-cover shadow bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div className="w-20">
            <Image
              src={"/rpi-contribution-icon.png"}
              width={145}
              height={145}
              alt="RPI Contribution Icon"
            />
          </div>
          <p className="text-center text-white text-2xl font-medium">
            RPI Contribution
          </p>
        </div>
      </section>
      <section className="bg-home-about-rpi-background flex flex-col justify-center items-center space-y-10 md:px-32 py-10 bg-cover bg-center bg-no-repeat h-[80vh]">
        <h2 className="text-center font-bold text-4xl text-primary uppercase">
          About RPI ( ATHAWALE )
        </h2>
        <div className="w-full space-y-5">
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center space-x-10 md:px-32 py-10">
        <div className="w-1/3 flex flex-col justify-center items-center md:px-10 space-y-20">
          <p className="py-3 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out bg-neutral-100 w-full rounded-full text-center">
            About Leadership
          </p>
          <p className="py-3 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out bg-neutral-100 w-full rounded-full text-center">
            Ramdas Athawale Speaks
          </p>
          <p className="py-3 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out bg-neutral-100 w-full rounded-full text-center">
            Blogs / Articles
          </p>
        </div>
        <div className="w-1/3">
          <Image
            src={"/home-about-rpi-features-background.png"}
            width={739}
            height={1047}
            layout="responsive"
            alt="Home About Features"
          />
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center md:px-10 space-y-20">
          <p className="py-3 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out bg-neutral-100 w-full rounded-full text-center">
            RPI Athawale&#39;s History
          </p>
          <p className="py-3 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out bg-neutral-100 w-full rounded-full text-center">
            Manifesto
          </p>
          <p className="py-3 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out bg-neutral-100 w-full rounded-full text-center">
            Membership
          </p>
        </div>
      </section>
      <section className="w-full h-full space-y-5 md:px-32 pb-20 bg-home-executive-member-banner bg-cover bg-no-repeat bg-center">
        <h2 className="font-bold text-4xl text-primary">Executive Members</h2>
        <Slider {...settings}>
          <div className="px-4">
            <div className="h-96 space-y-5 flex flex-col justify-center items-center bg-primary rounded-md">
              <div className="w-1/2 border-spacing-2 border-2 rounded-full p-2">
                <Image
                  src={"/member-avatar.png"}
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="avatar"
                />
              </div>
              <h2 className="text-white font-bold text-xl">
                Avinash Mahatekar
              </h2>
              <div>
                <p className="text-xs text-white text-center">Designation</p>
                <h6 className="text-sm font-semibold text-white">
                  Executive Member
                </h6>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="h-96 space-y-5 flex flex-col justify-center items-center bg-primary rounded-md">
              <div className="w-1/2 border-spacing-2 border-2 rounded-full p-2">
                <Image
                  src={"/member-avatar.png"}
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="avatar"
                />
              </div>
              <h2 className="text-white font-bold text-xl">
                Avinash Mahatekar
              </h2>
              <div>
                <p className="text-xs text-white text-center">Designation</p>
                <h6 className="text-sm font-semibold text-white">
                  Executive Member
                </h6>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="h-96 space-y-5 flex flex-col justify-center items-center bg-primary rounded-md">
              <div className="w-1/2 border-spacing-2 border-2 rounded-full p-2">
                <Image
                  src={"/member-avatar.png"}
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="avatar"
                />
              </div>
              <h2 className="text-white font-bold text-xl">
                Avinash Mahatekar
              </h2>
              <div>
                <p className="text-xs text-white text-center">Designation</p>
                <h6 className="text-sm font-semibold text-white">
                  Executive Member
                </h6>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="h-96 space-y-5 flex flex-col justify-center items-center bg-primary rounded-md">
              <div className="w-1/2 border-spacing-2 border-2 rounded-full p-2">
                <Image
                  src={"/member-avatar.png"}
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="avatar"
                />
              </div>
              <h2 className="text-white font-bold text-xl">
                Avinash Mahatekar
              </h2>
              <div>
                <p className="text-xs text-white text-center">Designation</p>
                <h6 className="text-sm font-semibold text-white">
                  Executive Member
                </h6>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="h-96 space-y-5 flex flex-col justify-center items-center bg-primary rounded-md">
              <div className="w-1/2 border-spacing-2 border-2 rounded-full p-2">
                <Image
                  src={"/member-avatar.png"}
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="avatar"
                />
              </div>
              <h2 className="text-white font-bold text-xl">
                Avinash Mahatekar
              </h2>
              <div>
                <p className="text-xs text-white text-center">Designation</p>
                <h6 className="text-sm font-semibold text-white">
                  Executive Member
                </h6>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section className="w-full h-full space-y-5 md:px-32 pb-20">
        <h2 className="font-bold text-4xl text-primary">Gallery</h2>
        <div className="w-full grid grid-flow-row-dense grid-col-4 gap-5">
          <div className="w-full col-span-1 shadow">
            <Image
              src="/home-gallery-01.png"
              width={380}
              height={533}
              layout="responsive"
              alt="Gallery 01"
            />
          </div>
          <div className="w-full col-span-1 shadow">
            <Image
              src="/home-gallery-02.png"
              width={380}
              height={533}
              layout="responsive"
              alt="Gallery 02"
            />
          </div>
          <div className="w-full col-span-1 shadow">
            <Image
              src="/home-gallery-03.png"
              width={380}
              height={533}
              layout="responsive"
              alt="Gallery 03"
            />
          </div>
          <div className="w-full col-span-1 shadow">
            <Image
              src="/home-gallery-04.png"
              width={380}
              height={533}
              layout="responsive"
              alt="Gallery 04"
            />
          </div>
          <div className="w-full col-span-4">
            <Image
              src="/home-gallery-05.png"
              width={1596}
              height={536}
              layout="responsive"
              alt="Gallery 05"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full space-y-10 md:px-32 py-20 bg-[#f4f4f4]">
        <h2 className="font-bold text-4xl text-primary">Latest News</h2>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-1 w-full rounded overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src={"/home-blog-01.png"}
                width={509}
                height={372}
                layout="responsive"
                alt="Home Blog 01"
              />
            </div>
            <p className="bg-neutral-200 p-5 text-sm text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="col-span-1 w-full rounded overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src={"/home-blog-02.png"}
                width={509}
                height={372}
                layout="responsive"
                alt="Home Blog 02"
              />
            </div>
            <p className="bg-neutral-200 p-5 text-sm text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="col-span-1 w-full rounded overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src={"/home-blog-03.png"}
                width={509}
                height={372}
                layout="responsive"
                alt="Home Blog 03"
              />
            </div>
            <p className="bg-neutral-200 p-5 text-sm text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-full space-y-10 md:px-32 py-20">
        <h2 className="font-medium drop-shadow-lg text-center text-4xl text-white w-1/4 mx-auto py-2 rounded-full bg-primary">
          Contact Us
        </h2>
        <div className="w-full flex justify-between items-center space-x-16">
          <div className="w-1/3 flex justify-center items-center space-x-2">
            <FaMapMarkerAlt className="text-3xl text-primary" />
            <p className="text-primary text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="w-1/3 flex justify-center items-center space-x-2">
            <FaPhoneAlt className="text-3xl text-primary" />
            <p className="text-primary text-xl font-semibold">
              +91 98765 43210
            </p>
          </div>
          <div className="w-1/3 flex justify-center items-center space-x-2">
            <FaEnvelope className="text-3xl text-primary" />
            <p className="text-primary text-xl font-semibold">
              republicpartyofindia@gmail.com
            </p>
          </div>
        </div>
        <form className="w-1/2 flex flex-col items-center space-y-5 mx-auto">
          <div className="w-full md:space-x-5 flex flex-col md:flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-0 border-b-2 border-primary placeholder-primary focus:outline-none focus:ring-0 md:w-1/2"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border-0 border-b-2 border-primary placeholder-primary focus:outline-none focus:ring-0 md:w-1/2"
            />
          </div>
          <div className="w-full md:space-x-5 flex flex-col md:flex-row justify-between items-center">
            <input
              type="text"
              placeholder="City"
              className="w-full border-0 border-b-2 border-primary placeholder-primary focus:outline-none focus:ring-0 md:w-1/2"
            />
            <input
              type="text"
              placeholder="Mobile"
              className="w-full border-0 border-b-2 border-primary placeholder-primary focus:outline-none focus:ring-0 md:w-1/2"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-0 border-b-2 border-primary placeholder-primary focus:outline-none focus:ring-0"
          />
          <textarea
            placeholder="Message"
            className="w-full border-0 border-b-2 border-primary placeholder-primary focus:outline-none focus:ring-0"
          />
          <button className="w-1/6 bg-primary text-white py-2 rounded text-center">
            Send
          </button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Home;
