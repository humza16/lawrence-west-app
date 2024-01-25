import Cookies from "js-cookie";
// import { History } from "../index";
export const localstorageService = (() => {
  const _setToken = (value) => {
    Cookies.set("token", value);
  };

  const _setRefreshToken = (value) => {
    Cookies.set("refreshToken", value);
  };

  const _getToken = () =>
    typeof window !== "undefined" ? Cookies.get("token") : false;

  const _getRefreshToken = () =>
    typeof window !== "undefined" ? Cookies.get("refreshToken") : false;

  const _logout = (url) => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    // History.navigate(url || "/login");
  };

  const _removeToken = () => {
    Cookies.remove("token")
  }

  const _removeRefreshToken = () => {
    Cookies.remove("refreshToken");
  }

  return {
    setToken: _setToken,
    getToken: _getToken,
    logout: _logout,
    removeToken: _removeToken,
    setRefreshToken: _setRefreshToken,
    removeRefreshToken: _removeRefreshToken,
    getRefreshToken: _getRefreshToken,
  };
})();
