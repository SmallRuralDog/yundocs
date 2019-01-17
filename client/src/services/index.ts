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

export function getFindBooks() {
  return api.get({
    url: 'find-books'
  })
}

export function getFindDocs() {
  return api.get({
    url: 'find-docs'
  })
}

export function getFindCourses() {
  return api.get({
    url: 'find-course'
  })
}
export function getFindResources() {
  return api.get({
    url: 'find-resource'
  })
}
export function getFindVoices() {
  return api.get({
    url: 'find-voice'
  })
}

export function getDetail() {
  return api.get({
    url: 'detail'
  })
}
