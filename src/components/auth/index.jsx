export default class Auth {

    isAuthenticated = () => this.hasValidAccessToken() && this.hasValidIdToken();

    getAccessToken = () => sessionStorage.getItem('access_token');
    getIdToken = () => sessionStorage.getItem('id_token');

    logout = () => {
        sessionStorage.clear();
    }

    hasValidAccessToken() {
        if (this.getAccessToken()) {
            const expiresAt = sessionStorage.getItem("expires_at");
            const now = new Date();
            const expired = expiresAt && parseInt(expiresAt) < now.getTime();
            return !expired;
        }
        return false;
    };

    hasValidIdToken() {
        if (this.getIdToken()) {
            const expiresAt = sessionStorage.getItem("id_token_expires_at");
            const now = new Date();
            const expired = expiresAt && parseInt(expiresAt) < now.getTime();
            return !expired;
        }
        return false;
    };
}
