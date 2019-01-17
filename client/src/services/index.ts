import api from "./api";

export function getIndex() {
  return api.get({
    url: 'index'
  })
}

export function getFindRecommend() {
  return api.get({
    url: 'find-recommend'
  })
}
