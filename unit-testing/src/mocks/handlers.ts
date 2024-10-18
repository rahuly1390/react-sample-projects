import { HttpResponse, http } from 'msw';
 
export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([
            { name: 'John Doe' },
            { name: 'Jane Doe' },
        ])
    }),
];
 