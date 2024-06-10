import EmailSvg from "./assets/social-network/EmailSvg";
import FacebookSvg from "./assets/social-network/FacebookSvg";
import GithubSvg from "./assets/social-network/GithubSvg";
import LinkedInSvg from "./assets/social-network/LinkedInSvg";
import LocationSvg from "./assets/social-network/LocationSvg";
import PhoneNumberSvg from "./assets/social-network/PhoneNumberSvg";

export default function Footer() {
  return (
    <section>
        <hr
        className="w-4/5 mx-auto mt-3"
        style={{ borderTop: "0.1px solid #7dcfff" }}
      />
      <div className="flex items-start gap-10 justify-center py-2 text-center sm:py-3 md:py-4 lg:py-5">
        <div className=" flex flex-col gap-4 justify-center items-start text-sm sm:text-md md:text-lg">
          <h3 className="font-semibold text-gray-500 uppercase w-full">Social :</h3>
          <SocialComponent
            href="https://www.linkedin.com/in/aeourmassi/"
            label="aeourmassi"
          >
            <FacebookSvg />
          </SocialComponent>
          <SocialComponent href="https://github.com/ieberlin" label="ieberlin">
            <GithubSvg />
          </SocialComponent>
          <SocialComponent
            href="https://www.linkedin.com/in/aeourmassi/"
            label="aeourmassi"
          >
            <LinkedInSvg />
          </SocialComponent>
        </div>
        <div className=" flex flex-col gap-4 justify-center items-start text-sm sm:text-md md:text-lg">
          <h3 className="font-semibold text-gray-500 uppercase w-full">
           Where You Can Find me :
          </h3>
          <SocialComponent
            href="mailto:aeourmassi@gmail.com"
            label="aeourmassi@gmail.com"
          >
            <EmailSvg />
          </SocialComponent>
          <div className="flex flex-row gap-2 items-center">
            <PhoneNumberSvg />
            <h3 className=" font-normal text-white">+213-658094987</h3>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <LocationSvg />
            <h3 className=" font-normal text-white">Sidi Bel Abbes, Algeria</h3>
          </div>
        </div>
      </div>
      <hr
        className="w-3/5 mx-auto mt-3"
        style={{ borderTop: "0.1px solid #7dcfff" }}
      />
      <div className="w-full block py-2 text-center sm:py-3 md:py-4 lg:py-5">
        <h1 className="text-gray-400 font-semibold capitalize text-sm sm:text-sm md:text-md lg:text-lg">
          The only way to do great work is to love what you do.
        </h1>
      </div>
    </section>
  );
}

function SocialComponent({ children, label, href }) {
  return (
    <a href={href} target="blank">
      <div className="flex flex-row gap-2 items-center justify-start">
        {children}
        <h3 className=" font-normal text-white">{label}</h3>
      </div>
    </a>
  );
}
