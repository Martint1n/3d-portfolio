import React, { useState } from 'react';
import {Input, Textarea} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Contact() {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://3d-portfolio-backend-eta.vercel.app/users/send', formData)
            .then((response) => {
                alert('Message envoyé avec succès!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                alert('Erreur lors de l\'envoi du message.');
                console.error('There was an error!', error);
            });
    }

    return (
        <form className='min-h-[400px] w-full flex flex-col justify-around items-center lg:h-full' onSubmit={handleSubmit}>
            <Input
                isRequired
                type="text"
                label={t("contact.name")}
                labelPlacement="none"
                defaultValue=""
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="max-w-xs"
            />
            <Input
                isRequired
                type="email"
                label={t("contact.email")}
                labelPlacement="none"
                defaultValue="email@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="max-w-xs"
            />
            <Textarea
                isRequired
                label={t("contact.message")}
                labelPlacement="none"
                placeholder={t("contact.writeMessage")}
                className="max-w-xs"
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            <input type="submit" value={t("contact.send")} className='text-yellow cursor-pointer border-2 p-2 rounded border-neonPurple'/>
        </form>
    )
}

export default Contact