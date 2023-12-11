import Info from './info/Info';
import Form from './form/Form';
import style from './Contact.module.css';

const Contact = () => {
    return(
        <div className={style.div}>
            <h2 className={style.heading}>VIVIENDAS PLATENSE</h2>
            <div className={style.content}>            
                <div className={style.article}><Info/></div>
                <div className={style.article}><Form/></div>
            </div>
        </div>
    );
}

export default Contact;