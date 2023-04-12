"use client";
import {
    ChangeEvent,
    DetailedHTMLProps,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useState,
} from "react";

export interface FieldProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    num: number;
    labeltext: string;
    inputtext: string;
    type: HTMLInputTypeAttribute | "textarea";
    criteria?: string;
    regexPattern?: RegExp;
}

export default function Field({
    num,
    name,
    labeltext,
    inputtext,
    required = true,
    type = "text",
    defaultValue,
    regexPattern,
    criteria,
}: FieldProps) {
    const [error, setError] = useState("");

    const validateWithRegex = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (!regexPattern) return;

        const value = e.target.value;
        if (!regexPattern?.test(value)) {
            if (!criteria) criteria = `Please enter valid ${name}`;
            setError(criteria);
        } else {
            setError("");
        }
    };

    return (
        <div className="group relative flex flex-col gap-0 w-full ">
            <div className="hidden sm:block text-sm rounded-full border-2 group-even:bg-gray-900 group-even:text-white border-gray-900 opacity-10 tracking-widest text-center w-fit px-2 py-1 absolute right-full">
                {num.toString().padStart(2, "0")}
            </div>
            <label className="text-base px-3 py-1" htmlFor={name}>
                {labeltext}
                {required ? (
                    <span className="absolute text-red-400">*</span>
                ) : (
                    ""
                )}
            </label>

            {type == "textarea" ? (
                <textarea
                    onBlur={validateWithRegex}
                    className=" rounded-t-xl outline-none bg-transparent p-3"
                    id={name}
                    name={name}
                    placeholder={inputtext}
                    required={required}
                    defaultValue={defaultValue}
                    minLength={20}
                    rows={5}
                ></textarea>
            ) : (
                <input
                    onBlur={validateWithRegex}
                    className="rounded-t-xl outline-none bg-transparent p-3"
                    id={name}
                    name={name}
                    // {inputType == "number" ?  : }
                    min="0"
                    type={type}
                    placeholder={inputtext}
                    required={required}
                    aria-required={required}
                    defaultValue={defaultValue}
                    pattern={regexPattern?.source}
                />
            )}

            <hr className="w-full border border-gray-900" />
            <p className="px-2 py-1 text-xs italic text-red-500 absolute top-full left-0">
                {error ? "*" + error : ""}
            </p>
        </div>
    );
}
