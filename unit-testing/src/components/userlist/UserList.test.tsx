import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./UserList";

const mockFetch = jest.fn();
global.fetch = mockFetch as jest.Mock;

describe('User List',()=>{
    beforeEach(() =>{
        mockFetch.mockClear();
        mockFetch.mockResolvedValue({
            json:async () =>[]
        });
    });

    test('renders the component',()=>{
        render(<UserList/>);
        const h1 = screen.getByRole('heading');
        expect(h1).toBeInTheDocument();
    });

    test('display users after successful fetch', async () =>{
        mockFetch.mockResolvedValueOnce({
            json: async () =>[
                {name:'Amar Singh'},
                {name:'Kekti Joshi'}
            ]
        });
        render(<UserList/>);
        await waitFor(() => {
            expect(screen.getByText('Amar Singh')).toBeInTheDocument();
                // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByText('Kekti Joshi')).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.queryAllByRole('listitem')).toHaveLength(2);
        })
    });

    test('display error message if fetch fails', async() =>{
        mockFetch.mockRejectedValueOnce(new Error('Error fetching users'));
        render(<UserList/>);
        await waitFor(() => {
            expect(screen.getByText('Error fetching users')).toBeInTheDocument();
        });
    });

    test('renders an empty user list initially', async () => {
        render(<UserList />);
 
        await waitFor(() => {
            expect(screen.queryAllByRole('listitem')).toHaveLength(0);
        });
    });
})