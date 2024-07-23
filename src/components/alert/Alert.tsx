import { X } from "lucide-react";
import styles from "./styles.module.css";
import { ReactNode } from "react";

interface Ialert {
  type: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, title, icon, description, children }: Ialert) => {
  return (
    <div className={`${styles[`alert-${type}`]} ${styles.alert}`}>
      <div className={styles.headerAlert}>
        <div>
          {/* <Bell /> */}
          {icon}
          <h4>{title}</h4>
        </div>

        <X size={25} />
      </div>
      <p>{description}</p>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
