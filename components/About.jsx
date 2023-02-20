import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function About() {
  return (
    <div>
      <div className="d-flex items-center">
        <h2 className="font-serif text-4xl font-semibold text-slate-600">
          About Me
        </h2>
        <div className="w-36 h-1 border-b-2 border-rose-400 mx-2"></div>
      </div>
      <p className="text-justify text-slate-600 py-2 md:w-4/5">
        I'm <b>Masud Pervez</b>, a web developer with a passion for creating
        clean, responsive, and user-friendly websites. I have <b>2 years</b> of
        experience in front-end development, and I'm proficient in HTML, CSS,
        JavaScript, and various web frameworks such as <code>React</code> and
        <code> React-Native</code>.
      </p>
      <h2 className="font-serif mt-10 text-4xl font-semibold text-slate-600">
        What I do!
      </h2>
      <div className="row my-3">
        <div className="col-md-4 mb-4">
          <div className="d-flex justify-start items-start p-3 bg-purple-100 ring-2 ring-purple-200 rounded-lg">
            <img
              src="/about/icon1.svg"
              className="img-fluid me-2 pt-1"
              alt=""
            />
            <div>
              <h4 className="text-slate-600 text-xl font-bold">Ui/Ux Design</h4>
              <p className="m-0 text-slate-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex justify-start items-start p-3 bg-yellow-100 ring-2 ring-yellow-200 rounded-lg">
            <img
              src="/about/icon2.svg"
              className="img-fluid me-2 pt-1"
              alt=""
            />
            <div>
              <h4 className="text-slate-600 text-xl font-bold">
                App Development
              </h4>
              <p className="m-0 text-slate-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex justify-start items-start p-3 bg-indigo-100 ring-2 ring-indigo-200 rounded-lg">
            <img
              src="/about/icon3.svg"
              className="img-fluid me-2 pt-1"
              alt=""
            />
            <div>
              <h4 className="text-slate-600 text-xl font-bold">Photography</h4>
              <p className="m-0 text-slate-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex justify-start items-start p-3 bg-rose-100 ring-2 ring-rose-200 rounded-lg">
            <img
              src="/about/icon4.svg"
              className="img-fluid me-2 pt-1"
              alt=""
            />
            <div>
              <h4 className="text-slate-600 text-xl font-bold">Photography</h4>
              <p className="m-0 text-slate-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex justify-start items-start p-3 bg-pink-100 ring-2 ring-pink-200 rounded-lg">
            <img
              src="/about/icon5.svg"
              className="img-fluid me-2 pt-1"
              alt=""
            />
            <div>
              <h4 className="text-slate-600 text-xl font-bold">Managment</h4>
              <p className="m-0 text-slate-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex justify-start items-start p-3 bg-sky-100 ring-2 ring-sky-200 rounded-lg">
            <img
              src="/about/icon6.svg"
              className="img-fluid me-2 pt-1"
              alt=""
            />
            <div>
              <h4 className="text-slate-600 text-xl font-bold">
                Web Development
              </h4>
              <p className="m-0 text-slate-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-4 rounded-md">
        <h3 className="text-center text-4xl text-slate-600 font-bold">
          Clients
        </h3>
        <div className="py-12 px-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // direction={30}
            // autoplay
            className="mySwiper cursor-pointer "
          >
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/about/client3.gif" className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
