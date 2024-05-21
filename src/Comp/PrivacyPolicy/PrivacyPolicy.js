import React from 'react';
import '../../../src/App.css';
import TopBanner from '../Common/TopBanner/TopBanner';
import { Helmet } from "react-helmet";
const PrivacyPolicy = () => {
    const data = {
        name: "Privacy Policy"
    }
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="Get the best corporate health and wellness coach in los angeles CA with LifeUP, 
                we specialize in improving workplace, employee wellness & productivity
" />
            </Helmet>
            <section className='for-top-spacing' id='Privacy-page'>
                {/* Speaker banner start */}
                <TopBanner {...data} />
                {/* Speaker banner end */}
                {/* ----------------------------- */}
                <div className='Privacy-pageContent'>
                    <div className='container'>
                        <div className='row'>
                            <h4 class="h4-head main-head yellow-txt">LifeUP's Privacy Policy</h4>
                            <h3 class="h4-head">Shhhh! You've Reached The Most Laid-Back Privacy Policy in Town</h3>

                            <div className='InnerText'>
                                <h4 class="h4-head">Hey There, Wellness Warriors! 🌟</h4>
                                <p className="text-desc">Welcome to LifeUP's Privacy Policy! Legal stuff isn't always a stroll down Hollywood Boulevard,
                                    but stick with us - 'cause we cherish your privacy like a hot, steaming cappuccino. So, let's break down how we collect, use, and protect your data. Trust us; it's simpler than a sun salutation.</p>
                            </div>
                            <div className='InnerText'>
                                <h4 class="h4-head">What Info We Collect and Why We Need It 🎬</h4>
                                <p className="text-desc">Just like a smoothie bar needs fruit, we need some data to serve you the ultimate wellness experience. But fear not! We're not data hogs; we only take what we need:</p>
                                <ol>
                                    <li><b>Personal Data: </b>Like your name, email, etc.—basically, your "credits."</li>
                                    <li><b>Usage Data: </b> Your interactions with our site guide us like a life coach. </li>
                                </ol>
                            </div>
                            <div className='InnerText'>
                                <h4 class="h4-head">How We Protect Your Info 🛡️ </h4>
                                <p className="text-desc">Imagine your data as the VIP in an exclusive LA club—only select "bouncers" (read: secure servers) have access to it. We guard it like the last sip of a limited-edition brew.</p>
                            </div>
                            <div className='InnerText'>
                                <h4 class="h4-head">Cookies 🍪 (No, Not the Cheat Day Kind!) </h4>
                                <p className="text-desc">Cookies here are little bits of code that enhance your browsing experience. Accept or decline—just know that refusing cookies may limit some cool site features.</p>
                            </div>
                            <div className='InnerText'>
                                <h4 class="h4-head">Third-Party Peep Show 👀 </h4>
                                <p className="text-desc">Don't worry; we don't share your info with just anyone. We're picky like that. But some trusted partners may get a glance, only to enhance your experience, not to spam you with irrelevant ads.</p>
                            </div>
                            <div className='InnerText'>
                                <h4 class="h4-head">Your Rights 🌈 </h4>
                                <p className="text-desc">Be the barista of your own data—update, change, or even delete it.</p>
                            </div>
                            <div className='InnerText'>
                                <h4 class="h4-head">Changes to this Policy 🔄 </h4>
                                <p className="text-desc">Just like LA traffic, things change. Keep an eye on this page for updates.</p>
                            </div>
                            <p className="text-desc bottom-text-desc">So there you have it! And Cut! Your privacy, LA style.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy

