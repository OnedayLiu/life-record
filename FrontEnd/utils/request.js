import * as axios from 'axios';
import * as Cookies from 'js-cookie';
function addCsrfTokenToUrl(url) {
  return url += `${(url.indexOf('?') >= 0 ? '&' : '?')}_csrf=${Cookies.get('csrfToken')}`;
}
export async function get(url) {
  return await axios.get(addCsrfTokenToUrl(url));
};

export async function post(url, data) {
  return await axios.post(addCsrfTokenToUrl(url), data);
};