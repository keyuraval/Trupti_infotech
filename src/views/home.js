import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Trupti Infotech</title>
        <meta property="og:title" content="Trupti Infotech" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="home-text102">Services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">index.html</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">contact.html</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">services.html</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Welcome to our website</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Our Web Development Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Portfolio</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">portfolio.html</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Check out our portfolio</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        heading1={
          <Fragment>
            <span>
              <h3>Trupti Infotech</h3>
              Expert Web Development Services
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
            Trupti Infotech is a leading software development company. We operate its development center, where we focus on building a wide range of products and managing ongoing online support cases.

Our team of skilled professionals delivers high-quality, robust solutions that accelerate software development and enable rapid scaling across various technologies.

Trupti Infotech specializes in Custom Application Development, Product Engineering, Enterprise Solutions, Business Intelligence & Analytics, as well as Quality Assurance and Testing Services.

We are committed to creating intellectual property for our clients while ensuring fast, scalable, and reliable development solutions for our global clientele.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
            Stand out from the competition with a website design that’s truly one-of-a-kind. We work closely with you to understand your vision and brand identity, then bring it to life with custom visuals and intuitive layouts tailored to your audience.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Unique Website Designs</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
            Your website will look and function flawlessly across smartphones, tablets, and desktops. Our responsive design approach ensures that every layout adapts intuitively to any screen size, maximizing reach and usability.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Professional Web Development</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
            We specialize in building high-performance websites using modern web technologies like HTML5, CSS3, and JavaScript. From static sites to dynamic web apps, we deliver clean, scalable code that powers seamless digital experiences.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Mobile-Friendly Layouts</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take your website to the next level?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let our team of expert developers help you create a stunning
              website that stands out from the rest.
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
            We go beyond aesthetics by integrating interactive features that engage users and encourage conversions. From smooth animations to intuitive navigation and dynamic content, we create experiences that keep your audience coming back.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
            We craft visually stunning, custom-designed websites that reflect your brand’s identity and help you stand out in a crowded digital landscape. Every design is tailored to your business goals, ensuring a strong first impression and a memorable user experience.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Responsive Web Development</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Custom Website Design</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
            Our websites are built to perform seamlessly across all devices—from smartphones and tablets to desktops. We ensure fast load times, smooth navigation, and pixel-perfect responsiveness to provide an optimal experience for every visitor.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Interactive User Experience</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$299</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Responsive Layout</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Responsive Layout</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$1999</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Custom Website Design</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Advanced SEO Optimization</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Responsive Layout</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Custom Website Design</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$199</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$2999</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Basic SEO Optimization</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$999</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Custom Website Design</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Premium SEO Optimization</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              We start by understanding your requirements and goals for the
              website.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Once the design is approved, we proceed with the development phase
              using HTML, CSS, and JavaScript.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Design Mockup</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Our team creates a custom design mockup for your website based on
              the initial consultation.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Initial Consultation</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Development</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              We thoroughly test the website for responsiveness and
              functionality before launching it live.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Testing and Launch</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Owner, Sahaj Technology</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Vatika Exports</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Kavita Patel</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Rajesh Kumar</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Working with Trupti Infotech was a breeze. They were
              responsive to our needs and provided valuable insights throughout
              the development process.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Ojas Dave</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Creative Director, LMN Agency</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              See what our clients have to say about our web development
              services.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Founder, 123 Startup</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              I was impressed with the professionalism and expertise of the team
              at Trupti Infotech. They delivered a top-notch website that
              exceeded our expectations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              I highly recommend Trupti Infotech for anyone looking to
              create a professional and user-friendly website. They are truly
              experts in their field.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Trupti Infotech transformed our online presence with a
              stunning website design. Their attention to detail and creativity
              set them apart from the rest.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
          <span className="home-text206">
            <strong>Trupti Patel</strong><br />
            <br />
            📧 TRUPTIINFOTECH17@GMAIL.COM<br />
            📞 9408613035<br />
            🌐 WWW.TRUPTIINFOTECH.COM<br />
            🏠 205, ANUPAM SQUARE, ALTHAN CROSS ROAD, ALTHAN, SURAT-395017<br />
          </span>
        </Fragment>        
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Portfolio</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">terms-and-conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">cookies-policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">privacy-policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
