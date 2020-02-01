export const loadClientToken = () => {
    return localStorage.getItem('clientToken');
};

export const saveClientToken = clientToken => {
    try {
        localStorage.setItem('clientToken', clientToken);
    } catch (error) {}
};

export const clearClientToken = () => {
    try {
        localStorage.removeItem('clientToken');
    } catch (error) {}
};
