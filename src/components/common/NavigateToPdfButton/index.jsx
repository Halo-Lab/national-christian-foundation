import ButtonLink from "../ButtonLink";

const NavigateToPdfButton = ({ pdfFile }) => {
    return (
        <a href={pdfFile} target="_blank" rel="noreferrer">
            <ButtonLink text="Learn more" />
        </a>
    );
};

export default NavigateToPdfButton;
