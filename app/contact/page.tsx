export default function Contact() {
    return (
        <section className="my-16 md:my-20 space-y-20 md:space-y-28 lg:space-y-32">
            <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
                    <fieldset>
                        <input type="text" id="name" name="name" placeholder="" />
                        <label htmlFor="name">What&apos;s your name?</label>
                    </fieldset>
                    <fieldset>
                        <input type="email" id="email" name="email" placeholder="" />
                        <label htmlFor="email">How can I get in touch?</label>
                    </fieldset>
                    <fieldset>
                        <input type="text" id="company" name="company" placeholder="" />
                        <label htmlFor="company">Who do you work for?</label>
                    </fieldset>
                </div>
                <fieldset>
                    <textarea name="message" id="message" placeholder=""></textarea>
                    <label htmlFor="message">What would you like to discuss?</label>
                </fieldset>
                <div className="text-right">
                    <button className="bg-dark text-light px-5 py-2.5 rounded-sm cursor-pointer">
                        Send message
                    </button>
                </div>
            </form>
        </section>
    );
}
