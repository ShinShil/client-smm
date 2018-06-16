const buildUrl = (...args: any[]): string =>
    `https://jsonplaceholder.typicode.com/${args.join('/')}`
export const Urls = {
    FETCH_POSTS: buildUrl('posts'),
    FETCH_POST: (id: number) => buildUrl('posts', id)
};
