import Info from './info/Info';
import Form from './form/Form';
import style from './Contact.module.css';

const Contact = () => {

    const isMobile = window.innerWidth <= 720;

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
