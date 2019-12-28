export default class GalleryService {
    getPhotos = async(page, id) => {
        const typeUrl = id ? `collections/${id}/` : '';
        return await new Promise(resolve => {
            setTimeout(async() => {
                const res = await fetch(`https://api.unsplash.com/${typeUrl}photos?page=${page}&per_page=20`, {
                    method: 'get',
                    headers: {
                        Authorization: 'Client-ID e08eb72107a92ce923e9ab3125406b4a1bfc022c74000202b6e54ae7e1f12a70',
                    },
                });
                const result = await res.json();
                resolve(result);
            }, 1000);
        });
    };

    getRandomPhotos = async() => {
        const res = await fetch('https://api.unsplash.com/photos/random', {
            method: 'get',
            headers: {
                Authorization: 'Client-ID e08eb72107a92ce923e9ab3125406b4a1bfc022c74000202b6e54ae7e1f12a70',
            },
        });
        const result = await res.json();
        return result;
    };
    getSearchPhoto = async(value, page) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}&page=${page}&per_page=20`, {
            method: 'GET',
            headers: {
                Authorization: 'Client-ID e08eb72107a92ce923e9ab3125406b4a1bfc022c74000202b6e54ae7e1f12a70',
            },
        });
        return await response.json();
    };
    getOnePhoto = async id => {
        const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
            method: 'get',
            headers: {
                Authorization: 'Client-ID c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40',
            },
        });
        const result = await res.json();
        return result;
    };
    getUser = async username => {
        const res = await fetch(`https://api.unsplash.com/users/${username}`, {
            method: 'get',
            headers: {
                Authorization: 'Client-ID c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40',
            },
        });
        const result = await res.json();
        return result;
    };
}