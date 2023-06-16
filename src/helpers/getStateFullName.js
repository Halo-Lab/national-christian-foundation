export const getStateFullName = (state) => {
    let stateFullName;
    switch (state.toLowerCase()) {
        case "ky":
            stateFullName = "Kentucky";
            break;
        case "mi":
            stateFullName = "Michigan";
            break;
        case "dc":
            stateFullName = "Columbia";
            break;

        default:
            stateFullName = "state";
    }
    return stateFullName;
};
