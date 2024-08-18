import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Naman</h1>
                <p className={styles.description}>I am a full-stack developer with knowledge of NodeJS and ReactJS. Reach out if you'd like to learn more.</p>
                <a href="mailto:namantsoni@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/me.png")} alt="Image of me" className={styles.heroImg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}

export default Hero