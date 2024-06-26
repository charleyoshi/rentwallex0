import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import HowItWorks from "../components/howItWorks";
import homepage_main_image from '../assets/homepage_main_image.jpg'
import { Link } from 'react-router-dom';
import axios from "axios";

//Can Input Any Question and Answer Here: (Can Be Moved to Database)
const FAQs = [
  {
    question: "What is Rentwallex?",
    answer: "Rentwallex is a rent financing service that offers innovative solutions for tenants to manage their rental expenses conveniently through installment payment options."
  },
  {
    question: "Who can use Rentwallex?",
    answer: "Rentwallex is available to tenants across various rental properties, including apartments, houses, and commercial spaces. Whether you're a student, young professional, or anyone renting a property, our service offers flexibility and peace of mind."
  },
  {
    question: "Can I use Rentwallex for any rental property?",
    answer: "Yes, Rentwallex can be used for most rental properties, including apartments, houses, and condominiums. As long as your landlord or property manager accepts rent payments through our platform, you can benefit from our service."
  },
  {
    question: "What sets Rentwallex apart from other rent financing services?",
    answer: "Rentwallex stands out for its focus on providing flexible solutions tailored to tenants' needs. We prioritize user convenience, security, and transparency, making us the preferred choice for hassle-free rent payments."
  },
  {
    question: "When can I start using Rentwallex?",
    answer: "Be the first on know when we launch in your city. Registered now to join the waitlist. Become part of the movement to make rent payment flexible and hassle-free."
  }
  // Add more FAQs as needed
];
const scrollTo = (elemRef) => {
  window.scrollTo({ top: elemRef.current.offsetTop, behavior: 'smooth' });
}

export default function Home() {
  const howItWorksSection = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [waitlistLength, setWaitlistLength] = useState(0);
  const [propertyManagersLength, setPropertyManagersLength] = useState(0);
  const [totalSumRegisteredRenters, setTotalSumRegisteredRenters] = useState(0);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  useEffect(() => {
    axios
      .get(process.env.REACT_APP_WAITLIST_API)
      .then(function (response) {
        // handle success
        setWaitlistLength(Object.values(response.data.result).length);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setWaitlistLength(75);
      });

    axios
      .get(process.env.REACT_APP_PROPERTYMANAGERS_API)
      .then(function (response) {
        // handle success
        setPropertyManagersLength(Object.values(response.data.result).length);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setPropertyManagersLength(75);
      });
  }, []);

    // Calculate total sum
    useEffect(() => {
      setTotalSumRegisteredRenters(waitlistLength + propertyManagersLength);
    }, [waitlistLength, propertyManagersLength]);


  return (
    <div className="home">
      <Navbar forPage="home" scrollTo={scrollTo} />
      <div className="container">
        <section className="one">
          <div className="left">
            <h1 className="headline" style={{ fontWeight: 'bold' }}>
              Rentwallex is the <br />
              new way to pay rent
            </h1>
            <h4 className="headline-2">
              Don&#39;t let rent payments weigh you down any longer. Start enjoying the freedom of flexible rent payment.
            </h4>
            {/* <Button text="Find a rent" icon="home" theme="secondary" />
          <Button text="Register my rent" icon='apartment' /> */}
            <Link to="/waitlist">
              <Button text="Join waitlist" />
            </Link>

          </div>
          <br className='linebreak' />
          <div className="right">
            <img
              referrerPolicy="no-referrer"
              src={homepage_main_image}
              alt="home page main image"
              width="100%"
            />
          </div>
        </section>
      </div>

      <div className='container'>
        <section className="two" id="how-it-works" ref={howItWorksSection}>
          <HowItWorks />
        </section>
      </div>


      <div className="bgWrapper-navyblue">
        <section className="three container">
          <h1>{totalSumRegisteredRenters}</h1>
          <h4>Renters registered to date</h4>
          <h5>Become part of a growing community of renters who are taking control of their finances with
            Rentwallex. <br />Say goodbye to rent-related stress and hello to peace of mind!</h5>
          <br />
          <Link to="/waitlist">
            <Button text="Join the waitlist now" theme="secondary" />
          </Link>
        </section>
      </div>



      <div className='container'>
        <section className='four'>
          <h2>Frequently Asked Questions</h2>
          {FAQs.map((FAQ, index) => (
            <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
              <div className='Question'>
                <h3>{FAQ.question}</h3><button >{activeIndex === index ? '–' : '+'}</button>
              </div>
              {activeIndex === index && <div className="Answer">{FAQ.answer}</div>}
            </div>
          ))}
          <br /><br />
        </section>
      </div>
    </div>
  );
}
//▲