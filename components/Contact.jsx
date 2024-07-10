import React, { useState } from 'react';
import {Input, Textarea} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

function Contact() {
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
        <form className='h-1/2 w-full flex flex-col justify-around items-center' onSubmit={handleSubmit}>
            <Input
                isRequired
                type="text"
                label="name"
                labelPlacement="outside"
                defaultValue=""
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="max-w-xs"
            />
            <Input
                isRequired
                type="email"
                label="Email"
                labelPlacement="outside"
                defaultValue="email@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="max-w-xs"
            />
            <Textarea
                isRequired
                label="Message"
                labelPlacement="outside"
                placeholder="Ecrivez votre message"
                className="max-w-xs"
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            <input type="submit" value="Envoyer" />
        </form>
    )
}

export default Contact