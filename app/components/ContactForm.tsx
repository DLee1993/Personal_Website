"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
    name: string;
    email: string;
    company: string;
    message: string;
};

export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [fieldErrors, setFieldErrors] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const hasEmptyFields = Object.values(formData).some((val) => !val.trim());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFieldErrors((prev) => ({
            ...prev,
            [name]: value.trim().length === 0 ? "error" : "",
        }));
        if (hasEmptyFields) {
            setFormError("Please fill in all fields.");
            return;
        }
    };

    const SendForm = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Validate fields
        const errors = Object.entries(formData).reduce(
            (acc, [key, value]) => {
                acc[key as keyof FormData] = value.trim() === "" ? "error" : "";
                return acc;
            },
            { name: "", email: "", company: "", message: "" } as FormData
        );

        setFieldErrors(errors);

        if (hasEmptyFields) {
            setFormError("Please fill in all fields.");
            return;
        }

        setIsSending(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current!,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
                    limitRate: {
                        throttle: 60000,
                    },
                }
            )
            .then(
                (result) => {
                    console.log("Success:", result.status);
                    setIsSending(false);
                    setIsSubmitted(true);
                },
                (error) => {
                    console.error("Failed:", error.text);
                    if (error.status === 429) {
                        // Handle rate limit exceeded
                        alert("You have exceeded the rate limit. Please try again later.");
                    }
                }
            );
    };

    return isSubmitted ? (
        <section className="flex flex-col justify-center items-center space-y-10">
            <h2 className="text-lg">Message sent!</h2>
            <button
                onClick={() => setIsSubmitted(false)}
                className="bg-dark text-light px-5 py-2.5 rounded-sm cursor-pointer"
            >
                Send another message
            </button>
        </section>
    ) : (
        <form ref={form} className="space-y-5" onSubmit={SendForm}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
                <fieldset>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=""
                        onChange={handleChange}
                        className={fieldErrors.name}
                        autoComplete="name"
                    />
                    <label
                        htmlFor="name"
                        className={fieldErrors.name ? "text-red-500" : "text-dark/50"}
                    >
                        {fieldErrors.name ? formError : "What's your name?"}
                    </label>
                </fieldset>
                <fieldset>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                        onChange={handleChange}
                        className={fieldErrors.email}
                        autoComplete="email"
                    />
                    <label
                        htmlFor="email"
                        className={fieldErrors.email ? "text-red-500" : "text-dark/50"}
                    >
                        {fieldErrors.email ? formError : "How can I get in touch?"}
                    </label>
                </fieldset>
                <fieldset>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder=""
                        onChange={handleChange}
                        className={fieldErrors.company}
                    />
                    <label
                        htmlFor="company"
                        className={fieldErrors.company ? "text-red-500" : "text-dark/50"}
                    >
                        {fieldErrors.company ? formError : "Who do you work for?"}
                    </label>
                </fieldset>
            </div>
            <fieldset>
                <textarea
                    name="message"
                    id="message"
                    placeholder=""
                    onChange={handleChange}
                    className={fieldErrors.message}
                ></textarea>
                <label
                    htmlFor="message"
                    className={fieldErrors.message ? "text-red-500" : "text-dark/50"}
                >
                    {fieldErrors.message ? formError : "What would you like to discuss?"}
                </label>
            </fieldset>
            <div className="text-right">
                <button className="bg-dark text-light px-5 py-2.5 rounded-sm cursor-pointer">
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
}
