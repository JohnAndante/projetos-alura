import styles from "./Button.module.scss";

const Button = ({ className = "", type, onClick, children }) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
