import React from 'react';
import InfoText from "./InfoText";

const paragraphs = [
    "Welcome to Nephorion, where bespoke software development meets unparalleled expertise. At Nephorion, we specialize in crafting highly customized code tailored to meet the unique needs of individuals. Our dedication to quality ensures that each project we undertake is a seamless blend of innovation and precision. As a cloud-native company, we leverage the latest technologies to deliver scalable and efficient solutions, ensuring that your systems are not only cutting-edge but also robust and secure.",
    "Beyond our core software development services, Nephorion offers high-value consulting to help you navigate the complexities of the digital landscape. Our team of seasoned professionals brings a wealth of experience and insights, providing strategic guidance that empowers you to achieve your goals. Whether you're looking to optimize your existing infrastructure or embark on a new technological journey, Nephorion is your trusted partner in transforming ideas into reality.",
]
const AboutPage = () => (
    <InfoText paragraphs={paragraphs}/>
);

export default AboutPage;
