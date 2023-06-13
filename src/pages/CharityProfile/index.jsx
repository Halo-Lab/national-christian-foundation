import { useLocation } from "react-router-dom";
import styles from "./CharityProfile.module.scss";

const CharityProfile = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className={styles.wrapper}>
            <h1>{state.name}</h1>
            <img src={state.logo} alt="" />
        </div>
    );
};

export default CharityProfile;
