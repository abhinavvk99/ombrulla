import React from 'react';
import side from './img/side.png'
import play from './img/play-button-svgrepo-com.svg'
import aifood from './img/ai-food2.7e761c87_TNwbv.webp'
import bridge from './img/bridge.828c5106_Z2mJkOa.webp'
import petran from './img/petran-logo.99970d82_p9MFD.webp'
import asset from './img/asset-performance-management-software.82e2a11d_164sPU.webp'
import safety from './img/safetyr.6f7bac17_2OxpR.webp'
import next from './img/envsafety.45f1043e_Z8wyMD.webp'
import unv from './img/unv.85d8fa6f_1oWCsP.webp'
import dhauv from './img/dahua.d9dec1a0_1788pM.webp'
import nvedia from './img/nvidia.8ba96db4_Z1BLchq.webp'
import amazon from './img/amazon.8aa611f6_Zkubpr.webp'
import hik from './img/hikvision.2a55c6c2_Z1UqjJV.webp'
import azure from './img/azure.3a96288f_ZDjkY6.webp'
import facebook from './img/facebook-1-svgrepo-com.svg'
import insta from './img/instagram-svgrepo-com.svg'
import twiter from './img/twitter-svgrepo-com.svg'
import linkedin from './img/linkedin-svgrepo-com.svg'
import youtube from './img/youtube-svgrepo-com.svg'
import './Style.css'
import { Carousel } from './Carousel';
import Responsive from './Slider';
import { Cardde } from './Cardde';
import App from './Navbarres';

export const Home = () => {
  return (
    <>
      <App />
      <section className='bg-gradient-to-b from-blue-100 to-white h-full w-full sm:p-5 md:p-16 grid md:grid-cols-2 md:items-center'>
        <div className='p-2'>
          <span className=' font-sans font-semibold text-6xl'>Manual <br /> Inspection is</span>
          <br />
          <span className=' font-sans font-semibold text-blue-500 text-6xl'>Slow& Error-Prone</span>
          <p className=' text-gray-400 font-sans font-semibold text-1xl p-1'>
            AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection
            procedures, boosting precision and cost-effectiveness while upholding product excellence.
            This AI inspection system detects defects with exceptional accuracy, optimizing the overall
            inspection process.
          </p>
          <div className='p-10 flex flex-wrap gap-5'>
            <button className='btn'>Schedule Call</button>
            <button className='btn1'><img src={play} alt="side" className=' w-14 bg-blue-600 rounded-full hover:bg-white' /></button>
            <span className='font-sans font-semibold pt-3 text-gray-800 text-xl hover:text-blue-500'>Watch Video</span>
          </div>
        </div>
        <div className='p-2'>
          <img src={side} alt="side photo" className='side' />
        </div>
      </section>
      <section className='p-16'>
        <div className=' bg-gray-200 w-auto h-auto md:p-20 rounded-3xl'>
          <div className='p-3'>
            <span className='sq'></span>
            <span className=' font-sans font-semibold'>Leader in AI visual inspection</span>
          </div>
          <div className='p-3'>
            <span className=' font-sans font-semibold md:text-6xl'>Crafting Tomorrow's <br /> World with</span>
            <span className=' font-sans font-semibold text-blue-500 md:text-6xl'>AI Excellence</span>
          </div>
          <div className='p-2'>
            <p className=' text-gray-600 font-sans font-semibold md:text-xl p-4'>Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes. Our AI visual inspection system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
          </div>
          <div className='flex flex-wrap gap-5 p-5'>
            <button className='btn1'><img src={play} alt="side" className=' w-14 bg-blue-600 rounded-full hover:bg-white' /></button>
            <span className='font-sans font-semibold pt-3 text-gray-800 md:text-xl hover:text-blue-500'>Watch Corporate Video</span>
          </div>
        </div>
      </section>
      <section className=' grid  md:grid-cols-2 md:p-20 p-5'>
        <div>
          <span className='font-sans font-semibold text-xl'>AI VISUAL INSPECTION</span>
          <div className='pt-6'>
            <span className='font-sans font-semibold text-4xl'>Enhancing quality through AI- <br />based visual inspection</span>
          </div>
          <div>
            <p className='font-sans font-semibold md:text-xl pt-6 text-gray-400'>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
          </div>
          <div>
            <ul className=' list-disc p-5'>
              <li className='font-sans font-semibold text-gray-400'>AI visual inspection ensures consistent performance with unmatched accuracy</li>
              <li className='font-sans font-semibold text-gray-400'>It boosts throughput and cuts down on labour expenses</li>
              <li className='font-sans font-semibold text-gray-400'>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
              <li className='font-sans font-semibold text-gray-400'>Real-time data and analytics enable scalability in AI-based visual inspection</li>
            </ul>
          </div>
          <div className='p-10 flex flex-wrap gap-5'>
            <button className='btn'>Schedule Call</button>
            <span className='font-sans font-semibold pt-3 text-gray-800 text-xl hover:text-blue-500'>Read more</span>
          </div>
        </div>
        <div className=' p-16'>
          <img src={aifood} alt="aifood" className=' w-full rounded-2xl' />
        </div>
      </section>
      <section className='  grid  md:grid-cols-2 md:p-20 p-5'>
        <div className='p-16'>
          <img src={bridge} alt="bridge" className='w-full rounded-2xl' />
        </div>
        <div>
          <span className='font-sans font-semibold text-xl'>AI INFRASTRUCTURE INSPECTION</span>
          <div className='pt-6'>
            <span className='font-sans font-semibold text-4xl'>Enhances Efficiency, Safety, <br /> and Cost-Effectiveness</span>
          </div>
          <div>
            <p className='font-sans md:text-xl pt-6 text-gray-400'>Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.</p>
          </div>
          <div>
            <ul className=' list-disc p-5'>
              <li className='font-sans  text-gray-400'>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
              <li className='font-sans  text-gray-400'>It boosts throughput and cuts down on labour expenses</li>
              <li className='font-sans text-gray-400'>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
              <li className='font-sans  text-gray-400'>Real-time data and analytics enable scalability in AI-based visual inspection</li>
            </ul>
          </div>
          <div className='p-10 flex flex-wrap gap-5'>
            <button className='btn'>Schedule Call</button>
            <span className='font-sans font-semibold pt-3 text-gray-800 text-xl hover:text-blue-500'>Read more</span>
          </div>
        </div>
      </section>
      <section className=' grid  md:grid-cols-2 md:p-20 p-5 bg-blue-600'>
        <div>
          <img src={petran} alt="petran" className=' w-32' />
          <div>
            <span className=' font-semibold font-sans text-white'>PErformance - TRacking - ANalytics</span>
          </div>
          <div>
            <span className=' font-semibold font-sans text-white text-4xl'>AIoT Enabled Asset <br />
              Performance Management Software</span>
          </div>
          <div>
            <p className=' font-sans md:text-xl text-white pt-10'>PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness</p>
          </div>
          <div className='p-10 flex flex-wrap gap-5'>
            <button className='btn2'>Schedule Call</button>
            <button><img src={play} alt="side" className=' w-14' /></button>
            <span className='font-sans font-semibold pt-3 text-white text-xl'>Watch Video</span>
          </div>
        </div>
        <div className='p-10'>
          <img src={asset} alt="asset" className='w-full' />
        </div>
      </section>
      <section className='  grid  md:grid-cols-3 md:p-20 p-5'>
        <div>
          <div>
            <span className=' font-semibold font-sans'>PRODUCTS</span>
          </div>
          <div className='pt-5'>
            <span className=' font-semibold font-sans text-black text-6xl'>Tracking Tools</span>
          </div>
          <div className='pt-5'>
            <p className=' font-sans text-xl'>AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers' movements and vital signs. Simultaneously, they contribute to environmental sustainability by optimizing energy usage, improving waste management, and promoting resource efficiency.</p>
          </div>
        </div>
        <div className=' md:p-8 sm:pt-8'>
          <div className=' w-96 h-auto bg-gray-100 rounded-2xl p-10 '>
            <div>
              <span className='font-semibold font-sans text-xl'>RTLS - Workplace Safety</span>
            </div>
            <div className='pt-6'>
              <span className=' font-sans'>IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations in real-time for proactive hazard detection</span>
            </div>
            <div className=' p-16'>
              <img src={safety} alt="safe" className=' w-40' />
            </div>
            <div>
              <span className=' font-sans font-semibold text-xl'>Book For Demo</span>
            </div>
          </div>
        </div>
        <div className='md:p-8 pt-3'>
          <div className=' w-96 h-auto bg-gray-100 rounded-2xl p-10'>
            <div>
              <span className='font-semibold font-sans text-xl'>Environmental Sustainability</span>
            </div>
            <div className='sm:pt-6'>
              <span className=' font-sans'>AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management, and promoting resource efficiency.</span>
            </div>
            <div className=' p-16'>
              <img src={next} alt="next" className=' w-40' />
            </div>
            <div>
              <span className=' font-sans font-semibold text-xl'>Book For Demo</span>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col p-16'>
        <span className=' font-sans font-semibold text-center'>OUR CUSTOMERS</span>
        <span className='font-sans font-semibold text-center text-6xl'>They Trust Us</span>
        <div className=' container'>
          <Carousel />
        </div>
      </section>
      <section className='p-16 bg-blue-950 w-full'>
        <div>
          <span className=' font-sans font-semibold text-white'>OUR TESTIMONIALS</span>
        </div>
        <div className='pt-7'>
          <span className='font-sans font-semibold text-white text-4xl'>What Customers Say About Us</span>
        </div>
        <div className=' container md:p-10'>
          <Responsive />
        </div>
      </section>
      <section className=' flex flex-col p-16'>
        <span className=' font-sans font-semibold text-center'>BRANDS WE WORK WITH</span>
        <span className='font-sans font-semibold text-center md:text-6xl'>Trusted by Thousands of Businesses</span>
        <div className=' container md:p-20'>
          <table>
            <tr>
              <td className='p-12 hover:bg-white hover:shadow-inherit transition'><img src={unv} alt="unv" className=' w-60' /></td>
              <td className='p-12 hover:bg-white hover:shadow-inherit transition'><img src={dhauv} alt="dahuv" className=' w-60' /></td>
              <td className='p-12 hover:bg-white hover:shadow-inherit transition'><img src={nvedia} alt="nvedia" className=' w-60' /></td>
            </tr>
            <tr>
              <td className='p-12 hover:bg-white hover:shadow-inherit transition'><img src={amazon} alt="amzon" className=' w-60' /></td>
              <td className='p-12 hover:bg-white hover:shadow-inherit transition'><img src={hik} alt="hik" className=' w-60' /></td>
              <td className='p-12 hover:bg-white hover:shadow-inherit transition'><img src={azure} alt="azure" className=' w-60' /></td>
            </tr>
          </table>
        </div>
      </section>
      <section className=' flex flex-col md:p-16'>
        <span className=' font-sans font-semibold text-center'>AI INSIGHTS</span>
        <span className='font-sans font-semibold text-center md:text-6xl'>To Read</span>
        <br />
        <hr />
        <br />
        <div className='grid md:grid-cols-3 '>
          <div className='p-2'>
            <Cardde />
          </div>
          <div className='p-2'>
            <Cardde />
          </div>
          <div className='p-2'>
            <Cardde />
          </div>
        </div>
      </section>
      <section className='grid md:grid-cols-4 p-16 bg-blue-950 w-full'>
        <div>
          <div className=' font-sans font-semibold text-white text-2xl'>About Us</div>
          <div className='p-2'>
            <p className='font-sans text-gray-500 w-60'>Ombrulla is an AI-driven company providing specialized services like AI Visual Inspection, AI People Tracking, AI Defect Detection, AI Infrastructure Inspection, and AI Data Analytics. Our tailored solutions empower businesses with data-driven decisions, automation, and improved bottom lines. PETRAN, our cutting-edge tracking solution, utilizes AI and IoT to monitor assets, machinery, equipment, people, and facilities, enabling comprehensive performance management and environmental sustainability.</p>
          </div>
        </div>

        <div>
          <div className=' font-sans font-semibold text-white text-2xl'>Our Services</div>
          <div>
            <ul>
              <li className='font-sans text-gray-500 w-60 p-3'>AI Infrastructure Inspection</li>
              <li className='font-sans text-gray-500 w-60 p-3'>AI Visual Inspection</li>
              <li className='font-sans text-gray-500 w-60 p-3'>AI Data Analytics</li>
              <li className='font-sans text-gray-500 w-60 p-3'>AI People Tracking</li>
            </ul>
          </div>
        </div>

        <div>
          <div className=' font-sans font-semibold text-white text-2xl'>Our Solutions</div>
          <div>
            <ul>
              <li className='font-sans text-gray-500 w-60 p-3'>Asset Performance Management</li>
              <li className='font-sans text-gray-500 w-60 p-3'>RTLS - Workplace Safety</li>
              <li className='font-sans text-gray-500 w-60 p-3'>Environmental Sustainability</li>
            </ul>
          </div>
        </div>

        <div>
          <div className=' font-sans font-semibold text-white text-2xl'>Reach Us</div>
          <div>
            <ul>
              <li className='font-sans text-gray-500 w-60 p-3'>United Kingdom,7 Bell Yard
                London, WC2A 2JR
                +44 7879 993892</li>
              <li className='font-sans text-gray-500 w-60 p-3'>Germany, Schützenstraße 51A
                Lübeck, 23558
                +49 179 512 5812</li>
              <li className='font-sans text-gray-500 w-60 p-3'>India, No. 154/20, Royal Space
                Third Floor TI, HSR Layout,
                Bangalore, Karnataka
                560102
                +91 85900 56435</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <img src={facebook} alt="facebook" className='w-11' />
          </div>
          <div>
            <img src={insta} alt="insta" className='w-11' />
          </div>
          <div>
            <img src={twiter} alt="twiter" className='w-11' />
          </div>
          <div>
            <img src={linkedin} alt="link" className='w-11' />
          </div>
          <div>
            <img src={youtube} alt="youtube" className='w-11' />
          </div>
        </div>

      </section>
    </>
  );
};
