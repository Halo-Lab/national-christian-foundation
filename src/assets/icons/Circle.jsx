const Circle = ({ className }) => {
    return (
        <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="10" cy="9.5" r="9" stroke="white" strokeOpacity="1" />
        </svg>
    );
};

export default Circle;
