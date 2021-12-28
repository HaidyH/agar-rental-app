import Styles from './Logo.module.css';

export default function Logo() {
    return <span className={`${Styles.logo_container}`}>
        <i class="fas fa-car"></i>
        <span>AGAR</span>
    </span>
}