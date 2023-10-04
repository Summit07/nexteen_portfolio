import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Summit | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/sglogo.jpg" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center text-gray-800 text-3xl dark:text-cyan-500 font-semibold">
          Resume
        </h2>
        <div className="bg-gray-400 my-4 p-4 w-full flex justify-between items-center rounded-lg">
          <h2 className="text-center text-gray-800 text-3xl dark:text-white font-semibold">
            Summit Gupta
          </h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Summit07"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ut
          ratione! Assumenda, expedita vel consectetur tenetur impedit
          voluptates. Suscipit quod numquam sit exercitationem omnis vel
          assumenda dolorum, ratione iure quam eos commodi dicta illum eius
          officia voluptatibus tenetur? Earum accusantium quasi, esse vero ullam
          facilis alias reiciendis dolorem cumque autem, voluptas asperiores
          perferendis repellat iste saepe maxime, voluptates in aperiam
          dignissimos corporis fugit! Enim ut, ipsam, tenetur autem earum magnam
          deserunt, accusantium sed rerum ipsum veritatis! Dolor, voluptas
          incidunt accusamus assumenda pariatur rem rerum explicabo? Reiciendis,
          deleniti nihil?
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
          </p>
          {/* <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              BIGCOMMERCE, SHOPIFY, WOOCOMMERCE
            </span>
            <span className="px-2">|</span>Dallas, TX
          </p>
          <p className="py-1 italic">Freelance Work (2013 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Preston EMS</span>
            <span className="px-2">|</span>Grayson County, TX
          </p>
          <p className="py-1 italic">Paramedic (2019 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Lead paramedic on an ALS 911 ambulance covering rural Grayson
              County.
            </li>
            <li>
              Work surrounding departments organizing treatment protocols and
              facilitate hands on training operations.
            </li>
            <li>
              Manage high stress 911 situations such as medical emergencies,
              traumatic emergencies, and water accidents
            </li>
            <li>
              Public outreach and relations for the municipality from healthcare
              awareness to training methods.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CITY OF SHERMAN, TX</span>
            <span className="px-2">|</span>Sherman, TX
          </p>
          <p className="py-1 italic">Paramedic / Firefighter (2010 – 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
