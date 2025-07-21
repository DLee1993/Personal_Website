import ContactForm from "@/app/components/ContactForm";

export default function Contact() {
    return (
        <section className="my-16 md:my-20 space-y-16 sm:space-y-20">
            <h1 className="text-base space-y-5 max-w-3xl">
                Thanks for taking the time to explore my portfolio. If you&apos;d like to
                collaborate, chat about a potential project, or simply learn more about what I do,
                feel free to fill out the form below. I&apos;d love to hear from you and see where
                our ideas could take us!
            </h1>
            <ContactForm />
        </section>
    );
}
