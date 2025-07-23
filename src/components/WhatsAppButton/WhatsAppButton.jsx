import styles from './WhatsAppButton.module.scss';

const WhatsAppButton = ({text, className}) => {
  const phoneNumber = "818048322975"; 

  return (
    <a 
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={`${styles.button} ${className || ''}`}>{text}</button>
    </a>
  );
};

export default WhatsAppButton;
