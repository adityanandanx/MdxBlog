"use client";
import formRegex from "@/lib/formRegex";
import { FormEvent, HTMLAttributes, useState } from "react";
import { MdCheck, MdRefresh, MdSend } from "react-icons/md";
import Spinner from "@/components/ui/Spinner";
import Field from "./Field";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

export interface ContactFormProps extends HTMLAttributes<HTMLFormElement> {}

export default function ContactForm({
    className,
    onSubmit,
    ...props
}: ContactFormProps) {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<null | string>(null);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        const target = e.target as typeof e.target & {
            fname: { value: string };
            email: { value: string };
            price: { value: string };
            desc: { value: string };
        };
        const data = {
            fname: target.fname.value,
            email: target.email.value,
            price: target.price.value,
            desc: target.desc.value,
        };

        const endpoint = "/api/message";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch(endpoint, options)
            .then((res) => {
                if (!res.ok) {
                    setIsError(true);
                } else {
                    setIsError(false);
                    setHasSubmitted(true);
                }
                setIsSubmitting(false);
                return res.json();
            })
            .then((dataJson) => {
                setMessage(dataJson.message);
            });
    };

    return (
        <form
            className={cn(
                "flex flex-col items-center max-w-md w-full gap-10",
                className
            )}
            onSubmit={handleSubmit}
            {...props}
        >
            <Field
                num={1}
                value="Sample Name"
                name="fname"
                type="text"
                labeltext="What is your name?"
                inputtext="Enter your full name"
                criteria="Not a valid name"
                regexPattern={formRegex.fname}
            />

            <Field
                num={2}
                value="sample@data.com"
                name="email"
                type="email"
                labeltext="What is your email?"
                inputtext="abc@example.com"
                criteria="Not a valid email address"
                regexPattern={formRegex.email}
            />

            <Field
                num={3}
                value="50"
                name="price"
                type="number"
                labeltext="What have you budgeted for this project?"
                inputtext="Enter price in USD"
                criteria="Price must be greater than or equal to 0"
                regexPattern={formRegex.price}
            />

            <Field
                num={4}
                value="sample data which is very long"
                name="desc"
                type="textarea"
                labeltext="Tell me about your awesome project"
                inputtext="Write project description"
                criteria="Description must be longer than 20 characters"
                regexPattern={formRegex.desc}
            />

            <div className="flex justify-center items-start gap-6">
                {hasSubmitted && !isError ? (
                    <div className="flex justify-center items-center flex-col gap-2 self-center w-full flex-1 flex-grow text-base max-w-sm text-left">
                        {message ? (
                            <>
                                <span className="flex justify-center items-center gap-2 text-xl font-bold">
                                    Message Sent!
                                    <MdCheck className="transform scale-125" />
                                </span>
                                <p>I will send you an email within 24 hours.</p>
                                <Button
                                    onClick={() => {
                                        setHasSubmitted(false);
                                    }}
                                    type="reset"
                                    variant="secondary"
                                >
                                    Send Another <MdRefresh />
                                </Button>
                            </>
                        ) : null}
                    </div>
                ) : (
                    <Button
                        className="w-full flex-1 flex-grow"
                        type="submit"
                        variant={"primary"}
                    >
                        {isSubmitting ? (
                            <>
                                <Spinner />
                            </>
                        ) : (
                            <>
                                Send <MdSend />
                            </>
                        )}
                    </Button>
                )}
            </div>
        </form>
    );
}
