import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
 
// Provide the server-side API with the request handlers.
const server = setupServer(
  http.get('/user', () => {
    return HttpResponse.json({
      id: '15d42a4d-1948-4de4-ba78-b8a893feaf45',
      firstName: 'John',
    })
  })
)
 
// Start the interception.
server.listen()