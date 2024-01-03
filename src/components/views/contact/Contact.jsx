import Info from './info/Info';
import Form from './form/Form';
import style from './Contact.module.css';

const Contact = () => {
    return (
        <div className={style.div}>
            <h2 className={style.heading}>VIVIENDAS PLATENSE</h2>
            <div className={style.content}>
                {/* Cambio de orden en pantallas menores a 721px */}
                {window.innerWidth <= 721 ? (
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
