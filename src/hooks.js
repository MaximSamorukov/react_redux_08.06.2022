import links from './links';

const usePath = (path) => {
  let target = '/';
  if (path === '/') {
    target = links.total;
  } else {
    target = path;
  };
  return [target]
};

export {
  usePath
}