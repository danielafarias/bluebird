import styles from '../styles/login.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function login() {
    return(
        <section>
            <Head>
                <title>Entrar no BlueBird / BlueBird </title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"/>
            </Head>

            <body className={styles.body}>
                <form className={styles.login} method='get'>
                    <div className={styles.formHeader}>
                        <img className={styles.logo} src='img/twitterWhiteLogo.png' alt="twitter logo"/>
                        <h2 className={styles.loginTitle}>Entrar no BlueBird</h2>
                    </div>
                    <input className={styles.input} type="text" placeholder="Celular, e-mail ou nome de usuário"/>
                    <input className={styles.input} type="password" placeholder="Senha"/>
                    <button type="submit" className={styles.loginBtn}>Entrar</button>
                    <div className="others-options">
                        <Link href='/password-recover'>Esqueceu sua senha?</Link>
                        <span> . </span>
                        <Link href='/signup'>Inscrever-se no BlueBird</Link>
                    </div>
                </form>
            </body>
        </section>
        
    );
}