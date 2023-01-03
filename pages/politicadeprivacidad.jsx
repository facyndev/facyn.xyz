import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import documentSetTitle from '../components/documentSetTitle';

export default function Posts() {
    documentSetTitle('Política De Privacidad • Facyn')
    return (
        <Layout>
            <div className={styles.card}>
                <b className={styles.cardTitle}>POLÍTICA DE PRIVACIDAD</b>
                <br />
                <br />
                El presente Política de Privacidad establece los términos en la web y protege la información que es proporcionada por usted al momento de utilizarla. Estoy comprometido con la seguridad de los datos que usted proporciona. Cuando pido llenar campos de información personal con la cual usted pueda ser identificado, lo hago con el simple seguro que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que recomiendo revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
                <br /> 
                <br />
                <b className={styles.cardTitle}>INFORMACIÓN QUE ES RECOGIDA</b>
                <br />
                <br />
                Nuestro sitio web recoge información personal por ejemplo:
                <br />
                <br />
                <p>&bull; Información de contacto como correo electrónico e información demografica.</p>
                <p>&bull; Nombre.</p>
                <br />
                <br />
                <b className={styles.cardTitle}>USO DE INFORMACIÓN RECOGIDA</b>
                <br />
                <br />
                Empleo la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un Newlestter (Boletin informativo), si es que usted se encuentra suscripto a el es posible que reciba correos electrónicos, los cuales tienen el simple objetivo de comunicar lo mas nuevo de la web u otra información publicitaria que considere relevante para usted o que pueda brindarle algún beneficio.
                <br />
                <br />
                <b className={styles.cardTitle}>ENLACES A TERCEROS</b>
                <br /> 
                <br />
                Cuento con enlaces a otros sitios que pudieran ser de su interés. Una vez que usted haga click (o pulse) en estos enlaces y abandone la página, ya no tengo control sobre al sitio al que es redirigido y por lo tanto no soy responsable de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
                <br />
                <br />
                <b className={styles.cardTitle}>CONTROL DE SU INFORMACIÓN PERSONAL</b>
                <br />
                <br />
                No vendere, no cedere, no distribuire  la información personal que haya sido recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
                <br />
                <br />
                <div className={styles.pageLineDivisor}></div>
                <br />
                Como Facyn de la página facyn.xyz me reservo el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                <br />
                <br />
                Este documento llamado Politica de Privacidad fue modificado el 18/7/2022 (Dieciocho De Julio Del Dos Mil Veintidós) por Facyn.
            </div>
        </Layout>
    )
}
