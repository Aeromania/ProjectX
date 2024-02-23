import { FormEvent } from "react";
const ContactUs: React.FC = (): React.JSX.Element => {
  const sendContactData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="flex min-h-dvh items-center justify-center bg-black text-white">
      <div className="flex items-center lg:w-[90%] xl:w-[90%] 2xl:w-[80%]">
        {/* Left card */}
        <div
          className="flex items-center justify-center rounded-s-lg bg-sky-500 pb-3 pl-3 pt-3 lg:h-[400px] lg:w-[350px] xl:w-[400px]"
          data-aos="fade-right"
        >
          <div className="flex h-full w-full flex-col items-center gap-6 divide-y-2 divide-sky-500 bg-black p-2">
            <h1 className="text-3xl font-semibold text-white">Get in touch</h1>
            <ul className="flex flex-1 flex-col justify-center" role="list">
              <div className="mt-2 flex flex-1 flex-col justify-center">
                <label className="mb-1">Address:</label>
                <li>
                  472/6 Ground floor, Nagarbhavi, 3rd Cross Rd, 2nd Stage,
                  Kottigepalya, Bengaluru, Karnataka 560091
                </li>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <label className="mb-1">Email:</label>
                <li>projectxlabs@gmail.com</li>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <label className="mb-1">Number:</label>
                <li>+91 1234567890</li>
                <li>+91 7894561230</li>
              </div>
            </ul>
          </div>
        </div>
        {/* Center card */}
        <div
          className="flex flex-col gap-6 rounded-lg border border-sky-500 bg-black p-8 lg:h-[600px] lg:w-[450px] xl:w-[400px]"
          data-aos="fade-up"
        >
          <h1 className="text-3xl font-semibold text-sky-500">Contact us</h1>
          <form className="flex flex-col gap-6" onSubmit={sendContactData}>
            <input
              type="text"
              className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-sky-500"
              placeholder="Name"
              required
            />
            <input
              type="email"
              required
              className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-sky-500"
              placeholder="Email"
            />
            <div className="block w-full">
              <label className="block p-2 text-sky-500">
                <span className="cursor-text">Message</span>
              </label>
              <textarea
                rows={6}
                required
                className="w-full resize-none rounded-lg border border-sky-500 bg-black p-2 text-white caret-sky-500 outline-none placeholder:text-sm"
                aria-label="message"
                placeholder="write your message here..."
              ></textarea>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              We take privacy very seriously and will only use your information
              to send e-mail
            </p>
            <input
              type="submit"
              className="cursor-pointer rounded-md bg-sky-500 py-2 text-white transition-all duration-200 ease-in-out hover:bg-sky-600 active:scale-95"
            />
          </form>
        </div>
        {/* Maps card */}
        <div
          className="rounded-e-lg bg-sky-500 pb-3 pr-3 pt-3 lg:h-[400px] lg:w-[500px] xl:w-[600px]"
          data-aos="fade-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7963734017912!2d77.5117284!3d12.984872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df90f96bb95%3A0x103f1f3e73e9d586!2sProjectX%20Labs!5e0!3m2!1sen!2sin!4v1708717982426!5m2!1sen!2sin"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full rounded-r-md border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
