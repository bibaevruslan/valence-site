import style from './Button.module.css';

export default function Button({variant="default", icon, children, ...attributes}) {
    if (variant === "icon") {
        return <input type="image" src={icon} name="button" className={style.icon} {...attributes} id="button" alt="Button"/>
    }
    return (
        <button type="button" className={style[variant]} {...attributes}>{children}</button>
    );
}