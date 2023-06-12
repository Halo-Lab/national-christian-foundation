import RoundButton from "components/RoundButton";
import Heart from "assets/icons/Heart";
import { useOrganisationContext } from "context";
import styles from "./LikeButton.module.scss";

const LikeButton = ({ organisation }) => {
    const { favoritesList, setFavoritesList } = useOrganisationContext();

    const addToFavorites = (organisation) => {
        checkIsLiked(organisation)
            ? removeFromFavorites(organisation)
            : setFavoritesList([...favoritesList, organisation]);
    };
    const removeFromFavorites = (organisation) => {
        const updatedFavorites = favoritesList.filter(
            (favorite) => favorite.id !== organisation.id
        );
        setFavoritesList(updatedFavorites);
    };
    const checkIsLiked = (organisation) =>
        favoritesList.some((el) => el.id === organisation.id);

    return (
        <RoundButton
            size="small"
            icon={<Heart />}
            type="like"
            className={checkIsLiked(organisation) && styles.filled}
            onClick={() => addToFavorites(organisation)}
        />
    );
};

export default LikeButton;
