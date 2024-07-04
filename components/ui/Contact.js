import React from "react";
import Social from "./Social";
import Image from "next/image";
import ContactForm from "./ContactForm";
import twiter from "/public/img/twiter.png";
import instagram from "/public/img/Instagram.png";
import dribble from "/public/img/dribble.png";
import device from "/public/img/device.png";
const Contact = () => {
  return (
    <div>
      <div className="max-w-[1350px] xl:px-0 px-3 w-full bg-[#f6f6f7] pt-28">
        <div className="max-w-[1170px] mx-auto ">
          <h3 className="md:text-left text-center">
            That’s it! Now it’s your turn <br />
            to say hi.
          </h3>
          <div className="grid sm:grid-cols-12 gap-7 ">
            <div className="md:col-span-4 col-span-12  md:pl-0 sm:pl-24  xs:pl-14">
              <Social
                social={twiter}
                socialName="Twiter"
                title=" Most controversial place"
              />
              <Social
                social={instagram}
                socialName="Instagram"
                title="Most lavable place"
              />
              <Social
                social={dribble}
                socialName="Dribble"
                title="All designer can visit this regularly"
              />
              <Image src={device} className="mt-16" alt="Smart device" />
            </div>
            <div className="md:col-span-8 col-span-12 ">
              <ContactForm label="Name" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
