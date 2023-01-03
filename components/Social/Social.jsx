import styles from '../../styles/all.module.css';

export default function Social() {
    return (
        <div className={styles.cardSocial}>
            <a href="https://www.facyn.xyz/social/instagram" target="_blank">
                <img src="/svg/icons/instagram.svg" alt="Instragram Icon" />
            </a>
            <a href="https://www.facyn.xyz/social/youtube" target="_blank">
                <img src="/svg/icons/youtube.svg" alt="YouTube Icon" />
            </a>
            <a href="https://www.facyn.xyz/social/github" target="_blank">
                <img src="/svg/icons/github.svg" alt="GitHub Icon" />
            </a>
            <a href="https://www.facyn.xyz/social/discord" target="_blank">
                <img src="/svg/icons/discord.svg" alt="Discord Icon" />
            </a>
        </div>
    )
}
