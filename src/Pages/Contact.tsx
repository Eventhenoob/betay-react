import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <main className="overflow-hidden py-[40rem]  h-screen w-full flex items-center justify-center flex-col ">
      <ContactForm
        titleComponent={
          <h1 className="text-4xl font-semibold ">
            Want to connect? <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Contact Us
            </span>
          </h1>
        }
      />
    </main>
  );
};

export default Contact;
