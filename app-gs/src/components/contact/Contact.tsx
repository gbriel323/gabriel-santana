import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PratileirasImage from '../../assets/pratileiras.svg';

import { sendEmail } from '../../services/emailService';

const Contact: React.FC = () => {

    const {
        contactTitlePage,
        contactTextEmail,
        contactTextPhone,
        contactFeedbackEmail,
        contactNomeEmail,
        contactEmailEmail,
        contactMessageEmail,
        contactButtonEmail
    } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        setIsLoading(true);
        setError('');

        try {

            await sendEmail({
                client_name: formData.name,
                recipient_email: formData.email,
                message: formData.message
            });

            console.log('E-mail enviado com sucesso!');

            setIsSubmitted(true);

            setFormData({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {

            console.error(
                'Erro ao enviar e-mail:',
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : 'Erro ao enviar mensagem.'
            );

        } finally {

            setIsLoading(false);

        }
    };

    return (
        <div className="bg-[#C7B8A6] min-h-screen flex flex-col md:flex-row items-center justify-center p-6">

            {/* Left Half: Form */}

            <div className="w-full md:w-1/2 flex flex-col items-center">

                <h2 className="text-4xl font-bold text-[#2F2F2F] mb-8">
                    {contactTitlePage}
                </h2>

                <div className="text-center text-[#2F2F2F] mb-8">

                    <p>
                        {contactTextEmail}
                        <strong>
                            gabriel.sfc323@gmail.com
                        </strong>
                    </p>

                    <p>
                        {contactTextPhone}

                        <strong>
                            <a
                                href="https://wa.me/5511941049094?text=Hello!%20I%20want%20to%20learn%20more%20about%20your%20work."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#BFF7E1] hover:bg-[#A1E0D2] text-[#2F2F2F] font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline transition duration-300"
                            >
                                +55 11 94104 9094
                            </a>
                        </strong>
                    </p>

                </div>

                {isSubmitted ? (

                    <div className="text-center text-lg text-[#2F2F2F]">

                        <p>
                            {contactFeedbackEmail}
                        </p>

                    </div>

                ) : (

                    <form
                        className="w-full max-w-lg"
                        onSubmit={handleSubmit}
                    >

                        {/* Nome */}

                        <div className="mb-4">

                            <label
                                className="block text-[#2F2F2F] text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                {contactNomeEmail}
                            </label>

                            <input
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-[#2F2F2F] leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />

                        </div>

                        {/* E-mail */}

                        <div className="mb-4">

                            <label
                                className="block text-[#2F2F2F] text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                {contactEmailEmail}
                            </label>

                            <input
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-[#2F2F2F] leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />

                        </div>

                        {/* Mensagem */}

                        <div className="mb-4">

                            <label
                                className="block text-[#2F2F2F] text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                {contactMessageEmail}
                            </label>

                            <textarea
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-[#2F2F2F] leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />

                        </div>

                        {/* Erro */}

                        {error && (

                            <div className="mb-4 text-red-700 text-sm">
                                {error}
                            </div>

                        )}

                        {/* Botão */}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-[#BFF7E1] hover:bg-[#A1E0D2] disabled:opacity-50 disabled:cursor-not-allowed text-[#2F2F2F] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            {isLoading
                                ? 'Enviando...'
                                : contactButtonEmail
                            }
                        </button>

                    </form>

                )}

            </div>

            {/* Right Half: Image */}

            <div className="w-full p-7 md:w-1/2 flex justify-center items-center">

                <img
                    src={PratileirasImage}
                    alt="Pratileiras"
                    className="object-contain max-h-full animate-fade-in-up"
                />

            </div>

        </div>
    );
};

export default Contact;