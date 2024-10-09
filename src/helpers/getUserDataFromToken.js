export const getUserData = async () => {
    const token = localStorage.getItem("kadirovdev-accessToken");
    const parts = token.split('.');

    return JSON.parse(atob(parts[1]));
}