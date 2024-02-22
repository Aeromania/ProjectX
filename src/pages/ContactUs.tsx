import { FormEvent } from "react";

const ContactUs: React.FC = (): React.JSX.Element => {
  const sendContactData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // try {
    //   const response = await axios.post(
    //     `${process.env.URL}/${process.env.CONTACT_US_ENDPOINT}`
    //   );
    //   if (response.status === STATUS_CODES.OK) {
    //     console.log("Message delivered successfully");
    //   }
    // } catch (error) {
    //   console.log("Error sending message:", error);
    // }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  //bg-[#fafafe]
  return (
    <div className="flex min-h-dvh items-center justify-center bg-black text-white">
      <div className="flex items-center">
        {/* Left card */}
        <div className="flex h-[450px] w-[400px] items-center justify-center rounded-s-lg bg-sky-500 pb-3 pl-3 pt-3">
          <div className="h-full w-full bg-black p-2">
            <h1 className="text-center text-3xl font-semibold text-white">
              Get in touch
            </h1>
          </div>
        </div>
        {/* Center card */}
        <div className="flex h-[650px] w-[400px] flex-col gap-6 rounded-lg border border-sky-500 bg-black p-10">
          <h1 className="text-3xl font-semibold text-sky-500">Contact us</h1>
          <form className="flex flex-col gap-8" onSubmit={sendContactData}>
            <input
              type="text"
              className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-sky-500"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-sky-500"
              placeholder="Email"
            />
            <div className="block w-full">
              <label className="block p-2 text-sky-500">Message</label>
              <textarea
                rows={6}
                className="w-full resize-none rounded-lg border border-input bg-black p-2 text-white caret-sky-500 outline-none placeholder:text-sm"
                aria-label="message"
                placeholder="write your message here..."
              ></textarea>
            </div>
            <p className="text-sm text-gray-500">
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
        <div className="h-[450px] w-[600px] rounded-e-lg bg-sky-500 pb-3 pr-3 pt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.796201486719!2d77.50919007507666!3d12.984882987331664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzA1LjYiTiA3N8KwMzAnNDIuNCJF!5e0!3m2!1sen!2sin!4v1708629806658!5m2!1sen!2sin"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full rounded-r-md border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
