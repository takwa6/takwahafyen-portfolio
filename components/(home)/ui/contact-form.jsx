"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactForm() {
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        emailjs
            .send(
                "service_cgt3f6o",
                "template_qnvqb1k",
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.msg,
                },
                "w9ZBf1nKfArcRxsNB"
            )
            .then(() => {
                setSuccess("✅ Message envoyé avec succès !");
                reset();
            })
            .catch(() => {
                setSuccess("❌ Erreur lors de l'envoi !");
            });
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-form mt-45">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-info pt-20">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12">
                                <input
                                    className="name w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="text"
                                    placeholder="Your Name"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <span className="ui-error">{errors.name.message}</span>}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12">
                                <input
                                    className="email w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        validate: () => {
                                            const email = watch("email");
                                            return email.includes("@") || "Invalid email";
                                        },
                                    })}
                                />
                                {errors.email && <span className="ui-error">{errors.email.message}</span>}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12">
                                <input
                                    className="phone w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="text"
                                    placeholder="Your Phone"
                                    {...register("phone", { required: "Phone is required" })}
                                />
                                {errors.phone && <span className="ui-error">{errors.phone.message}</span>}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12">
                                <input
                                    className="subject w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="text"
                                    placeholder="Your Subject"
                                    {...register("subject", { required: "Subject is required" })}
                                />
                                {errors.subject && <span className="ui-error">{errors.subject.message}</span>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mb-12">
                                <textarea
                                    className="message w-100 theme-border form-color pl-20 pt-15 pr-10 border-radius5"
                                    placeholder="Start writing message here"
                                    {...register("msg", {
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Minimum length is 10 characters" },
                                    })}
                                />
                                {errors.msg && <span className="ui-error">{errors.msg.message}</span>}
                            </div>
                        </div>

                        <button
                            className="btn theme-bg text-white text-uppercase"
                            type="submit"
                        >
                            Submit Now
                        </button>
                    </div>
                </form>

                {success && (
                    <p className="form-message mt-20" style={{ color: success.includes("✅") ? "green" : "red" }}>
                        {success}
                    </p>
                )}
            </div>
        </div>
    );
}
