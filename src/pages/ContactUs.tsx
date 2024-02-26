import { FormEvent, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const ContactUs: React.FC = (): React.JSX.Element => {
  const sendContactData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [isConditionAccepted, setIsConditionAccepted] =
    useState<boolean>(false);
  const MAX_CHAR_LENGTH = 3000;
  const [charLength, setCharLength] = useState<number>(0);
  return (
    <div className="flex min-h-dvh items-center justify-center bg-black text-white">
      <div className="flex w-[95%] flex-col items-center justify-center gap-16 py-20 lg:w-[90%] lg:flex-row lg:gap-0 2xl:w-[80%]">
        <div className="flex w-full flex-col items-center justify-center lg:w-fit lg:flex-row">
          {/* Left card */}
          <div
            className="flex h-[100px] w-full items-center justify-center rounded-t-lg bg-sky-500 px-6 sm:w-[400px] lg:h-[400px] lg:w-fit lg:rounded-l-lg lg:rounded-t-none"
            data-aos="fade-right"
          >
            <div className="flex h-full w-full flex-row items-center justify-between gap-6 divide-y-2 divide-sky-500 bg-sky-500 p-2 lg:h-[80%] lg:flex-col">
              <a
                href="https://www.linkedin.com/company/projectx-labs/"
                target="_blank"
                className="rounded-full bg-sky-800 p-2 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/ProjectX_Labs?t=VK7f8vvb6OT6FO4C-ZLjKw&s=08"
                target="_blank"
                className="rounded-full bg-sky-800 p-2 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/projectx_labs?igsh=MTRqOTV5ZzJxdjFvOQ=="
                target="_blank"
                className="rounded-full bg-sky-800 p-2 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@ProjectX_Labs"
                target="_blank"
                className="rounded-full bg-sky-800 p-2 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Center card */}
          <div
            className="flex w-full flex-col gap-6 rounded-b-lg border border-sky-500 bg-black p-4 sm:w-[400px] sm:p-8 lg:h-fit lg:rounded-lg"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-semibold text-sky-500">Contact us</h1>
            <form className="flex flex-col gap-4" onSubmit={sendContactData}>
              <input
                type="text"
                className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-sky-500"
                placeholder="Name*"
                required
                maxLength={50}
              />
              <input
                type="email"
                required
                className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-sky-500"
                placeholder="Email*"
                maxLength={100}
              />
              <div className="block w-full">
                <label className="block p-2 text-sky-500">
                  <span className="cursor-text">Message*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  maxLength={MAX_CHAR_LENGTH}
                  onChange={(e) => {
                    setCharLength(e.target.textLength);
                  }}
                  className="w-full resize-none rounded-lg border border-sky-500 bg-black p-2 text-white caret-sky-500 outline-none placeholder:text-sm"
                  aria-label="message"
                  placeholder="write your message here..."
                ></textarea>
                <span className="mr-2 block text-end text-xs text-[#9CA3AF]">
                  {`${charLength}/${MAX_CHAR_LENGTH}`}
                </span>
              </div>
              <div>
                <p className="mb-2 text-sm text-[#9CA3AF]">
                  We take privacy very seriously and will only use your
                  information to send e-mail
                </p>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="peer relative h-4 w-4 cursor-pointer appearance-none rounded border-gray-300 bg-gray-100 checked:bg-sky-500"
                    onChange={(e) => setIsConditionAccepted(e.target.checked)}
                    checked={isConditionAccepted}
                  />
                  <label className="ms-2 cursor-text text-sm text-[#9CA3AF]">
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-sky-500 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                  <svg
                    className="pointer-events-none absolute hidden h-4 w-4 peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <input
                type="submit"
                className="cursor-pointer rounded-md bg-sky-500 py-2 text-white transition-all duration-200 ease-in-out hover:bg-sky-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-sky-800 disabled:hover:bg-sky-800 disabled:active:scale-100"
                disabled={!isConditionAccepted}
              />
            </form>
          </div>
        </div>
        {/* Maps card */}
        <div
          className="h-[400px] w-full bg-cover bg-center sm:rounded-lg sm:bg-[url(../assets/images/xlabs_map-loader.gif)] sm:pb-3 sm:pl-3 sm:pr-3 sm:pt-3 lg:w-[60%] lg:rounded-e-lg lg:pl-0 xl:w-[500px]"
          data-aos="fade-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7963734017912!2d77.5117284!3d12.984872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df90f96bb95%3A0x103f1f3e73e9d586!2sProjectX%20Labs!5e0!3m2!1sen!2sin!4v1708717982426!5m2!1sen!2sin"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-none lg:rounded-r-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
