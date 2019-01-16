import api from "./api";

export function getIndex() {
  return api.get({
    url: 'index'
  })
}
