import Info from './info/Info';
import Form from './form/Form';
import style from './Contact.module.css';
import { useState, useEffect } from 'react';

const Contact = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={style.div}>
            <h2 className={style.heading}>VIVIENDAS PLATENSE</h2>
            <div className={style.content}>
                {isMobile ? (
                    <>
                        <div className={`${style.article} ${style.form}`}><Form /></div>
                        <div className={`${style.article} ${style.info}`}><Info /></div>
                    </>
                ) : (
                    <>
                        <div className={`${style.article} ${style.info}`}><Info /></div>
                        <div className={`${style.article} ${style.form}`}><Form /></div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Contact;
