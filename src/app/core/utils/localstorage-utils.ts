
export class LocalStorageUtils {

    static setUserData(value: any) {
        localStorage.setItem('userinfo', JSON.stringify(value));
    }

    static getUserData() {
        return (localStorage.getItem('userinfo') && JSON.parse(localStorage.getItem('userinfo') || ''));
    }

    static logout() {
        localStorage.removeItem('userinfo');
    }
}