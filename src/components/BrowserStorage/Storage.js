const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser;
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser);
        return newUser;
    }
};
const getDataKey = () => {
    const userId = getUser();
    return `volunteer/${userId}`;
};
const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || '{}';
    return JSON.parse(data);
};

const removeFromDatabaseCart = (name) => {
    const currentCart = getDatabaseCart();
    delete currentCart[name];
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
};

export { getDataKey, getDatabaseCart, getUser, removeFromDatabaseCart };
