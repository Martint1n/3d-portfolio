import React from 'react';
import { Scroll } from "@react-three/drei";
import Section from './Section';


function Overlay() {
    return (
        <Scroll html>
        <div class="w-screen">
          <Section>
            <h1 className="font-semibold font-serif text-2xl">
              Hello, I'm Wawa Sensei
            </h1>
            <p className="text-gray-500">Welcome to my beautiful portfolio</p>
            <p className="mt-3">I know:</p>
            <ul className="leading-9">
              <li>🧑‍💻 How to code</li>
              <li>🧑‍🏫 How to learn</li>
              <li>📦 How to deliver</li>
            </ul>
            <p className="animate-bounce  mt-6">↓</p>
          </Section>
          <Section right>
            <h1 className="font-semibold font-serif text-2xl">
              Here are my skillsets 🔥
            </h1>
            <p className="text-gray-500">PS: I never test</p>
            <p className="mt-3">
              <b>Frontend 🚀</b>
            </p>
            <ul className="leading-9">
              <li>ReactJS</li>
              <li>React Native</li>
              <li>VueJS</li>
              <li>Tailwind</li>
            </ul>
            <p className="mt-3">
              <b>Backend 🔬</b>
            </p>
            <ul className="leading-9">
              <li>NodeJS</li>
              <li>tRPC</li>
              <li>NestJS</li>
              <li>PostgreSQL</li>
            </ul>
            <p className="animate-bounce  mt-6">↓</p>
          </Section>
          <Section>
            <h1 className="font-semibold font-serif text-2xl">
              🤙 Call me maybe?
            </h1>
            <p className="text-gray-500">
              I'm very expensive but you won't regret it
            </p>
            <p className="mt-6 p-3 bg-slate-200 rounded-lg">
              📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
            </p>
          </Section>
        </div>
      </Scroll>
    );
}

export default Overlay;