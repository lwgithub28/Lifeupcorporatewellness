import React from "react";
import OwlCarousel from "react-owl-carousel";
const VideoTestimonial = () => {
  return (
    <>
      <section id="videoTesti">
        <div className="container">
          <div className="row">
            <h4 class="h4-head main-head">What Our Client's are Saying</h4>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={30}
              items={3}
              navs={true}
              responsive={{
                0: {
                  items: 1, // Number of items to show on small screens (width < 600px)
                },
                600: {
                  items: 1, // Number of items to show on medium screens (600px <= width < 992px)
                },
                992: {
                  items: 3, // Number of items to show on large screens (width >= 992px)
                },
              }}
            >
              <div class="item">
                <div className="test-box">
                  <h3>
                    Chantelle N.<br></br> Baker Hughes
                  </h3>
                  <div className="video-popup">
                    <iframe
                      src={`https://player.vimeo.com/video/638399892`}
                      // width="800"
                      // height="515"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p class="text-desc">
                    Derek helped me develop my 'keystone habits. Simple
                    practices done daily that seemed almost inconsequential at
                    the time..those, combined behavior tracking through wearable
                    tech have kept 60lbs off for the last three years.
                  </p>
                </div>
              </div>
              <div class="item">
                <div className="test-box">
                  <h3>
                    Chantelle N.<br></br> Baker Hughes
                  </h3>
                  <div className="video-popup">
                    <iframe
                      src={`https://player.vimeo.com/video/638399892`}
                      // width="800"
                      // height="515"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p class="text-desc">
                    Derek helped me develop my 'keystone habits. Simple
                    practices done daily that seemed almost inconsequential at
                    the time..those, combined behavior tracking through wearable
                    tech have kept 60lbs off for the last three years.
                  </p>
                </div>
              </div>{" "}
              <div class="item">
                <div className="test-box">
                  <h3>
                    Chantelle N.<br></br> Baker Hughes
                  </h3>
                  <div className="video-popup">
                    <iframe
                      src={`https://player.vimeo.com/video/638399892`}
                      // width="800"
                      // height="515"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p class="text-desc">
                    Derek helped me develop my 'keystone habits. Simple
                    practices done daily that seemed almost inconsequential at
                    the time..those, combined behavior tracking through wearable
                    tech have kept 60lbs off for the last three years.
                  </p>
                </div>
              </div>{" "}
              <div class="item">
                <div className="test-box">
                  <h3>
                    Chantelle N.<br></br> Baker Hughes
                  </h3>
                  <div className="video-popup">
                    <iframe
                      src={`https://player.vimeo.com/video/638399892`}
                      // width="800"
                      // height="515"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p class="text-desc">
                    Derek helped me develop my 'keystone habits. Simple
                    practices done daily that seemed almost inconsequential at
                    the time..those, combined behavior tracking through wearable
                    tech have kept 60lbs off for the last three years.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoTestimonial;
