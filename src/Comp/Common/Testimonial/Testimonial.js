import React from 'react';
import "./Testimonial.css";
import OwlCarousel from 'react-owl-carousel';
import { BiSolidQuoteAltRight } from "react-icons/bi";
const Testimonial = () => {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={30} dots={true} items={3} responsive={{
                0: {
                    items: 1 // Number of items to show on small screens (width < 600px)
                },
                600: {
                    items: 1 // Number of items to show on medium screens (600px <= width < 992px)
                },
                992: {
                    items: 3 // Number of items to show on large screens (width >= 992px)
                }
            }}>
                {/* <div class='item'>
                    <div className='test-box'>
                        <BiSolidQuoteAltRight />
                        <p class="text-desc">
                            Derek helped me develop my 'keystone habits. Simple practices done daily
                            that seemed almost inconsequential at the time..those, combined behavior tracking through wearable
                            tech have kept 60lbs off for the last three years</p>
                        <h3>Heidi H.<br></br>Baker Hughes</h3>
                    </div>
                </div> */}
                <div class='item'>
                    <div className='test-box'>
                        <BiSolidQuoteAltRight />
                        <p class="text-desc">It was great to feel challenged and motivated to 'move' more.
                            I am on the road to better habits and I’m really grateful.
                            I really appreciate the time you spent making sure we succeeded in a way that was
                            important for each of us.
                        </p>
                        <h3>Heidi H.<br></br>Baker Hughes</h3>
                    </div>
                </div>   <div class='item'>
                    <div className='test-box'>
                        <BiSolidQuoteAltRight />
                        <p class="text-desc">
                            Derek helped me develop my ‘keystone habits.’ Simple practices done daily that seemed almost
                            inconsequential at the time..those,
                            combined behavior tracking through wearable tech have kept 60lbs off for the last three years.</p>
                        <h3>Ben G.<br></br>Baker Hughes</h3>
                    </div>
                </div>   <div class='item'>
                    <div className='test-box'>
                        <BiSolidQuoteAltRight />
                        <p class="text-desc">
                            LifeUP provided a framework for both food and workout that I know
                            I can just wake up and do without thinking about it,
                            which helps me integrate it all much more seamlessly into my life.</p>
                        <h3>Chantelle N.<br></br>Baker Hughes</h3>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Testimonial
