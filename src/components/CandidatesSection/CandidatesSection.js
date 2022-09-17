import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import CSS from "./CandidatesSection.module.css";
import { useSelector } from "react-redux";

const CandidatesSection = () => {
  const profileState = useSelector((state) => state.profileSlice);
  const profileComponent = profileState.profiles.map((p) => {
    return (
      <SwiperSlide className={`${CSS.swiperSlide}`} key={p.id}>
        <img src={p.img} alt="" style={{ maxWidth: "100%" }} />
        <p className={`fw-bold m-0 ${CSS.name}`}>{p.name}</p>
        <p className={`${CSS.jobtitle}`}>{p.title}</p>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div
        className={`${CSS.container} container-fluid mb-5 position-relative text-center text-white`}
        style={{ backgroundColor: "#4f53d2", height: "450px" }}
      >
        <div className="container pt-5">
          <p>Find Top Talents</p>
          <h1>Explore Our Latest Candidates</h1>
          <div
            className=" m-auto pt-3 position-relative"
            style={{ width: "3%", borderBottom: "2px solid black" }}
          ></div>
          <p className="w-50 m-auto pt-4">
            Work with someone perfect for your learn & get amazing results
            working with the best employees. hire talents with confidence!
          </p>
        </div>
      </div>

      <div className={`${CSS.swiperContainer}`}>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 6 },
          }}
          modules={[Navigation]}
          className={`${CSS.swiper} mySwiper`}
        >
          {profileState.loading ? (
            <>
              <SwiperSlide>
                <div class="spinner-border" role="status"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="spinner-border" role="status"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="spinner-border" role="status"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="spinner-border" role="status"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="spinner-border" role="status"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="spinner-border" role="status"></div>
              </SwiperSlide>
            </>
          ) : (
            <>{profileComponent}</>
          )}
        </Swiper>
      </div>

      <div className="container-fluid mb-3 d-flex justify-content-center">
        <button class="btn btn-dark p-3 w-25">EXPLORE ALL</button>
      </div>
    </>
  );
};

export default CandidatesSection;
