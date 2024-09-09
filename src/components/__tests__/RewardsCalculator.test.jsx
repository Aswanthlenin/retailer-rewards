import React from "react";
import {render, screen, waitFor} from '@testing-library/react'
import RewardsCalculator from "../RewardsCalculator";

describe('RewardsCalculator Componet',() =>{
    beforeEach(() => {
        global.fetch = jest.fn();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('Should display loading state initially', ()=> {
        fetch.mockImplementation(()=>
        Promise.resolve({
          ok:true,
          json:() => Promise.resolve({data: [] }),
        })
        );
      render(<RewardsCalculator />) ;
      expect (screen.getByText(/Loading.../)).toBeInTheDocument()
    });

    it('should display error message on fetch failure', async()=>{
        fetch.mockImplementation(() =>
        Promise.reject(new Error('Failed to load data'))
        );
        render(<RewardsCalculator />);
        expect(await screen.findByText(/Failed to load data/)).toBeInTheDocument();
    })
    // it('Should render rewards data correctly', async ()=> {
    //     const mockTransactions= {
    //         data:[
    //         { "customerId":100, "date":"2024-08-16","transactionAmount":130},
    //         { "customerId":101, "date":"2024-07-03","transactionAmount":110},
         
    //      ]
    //     }
    
    //     console.log("mockData==",mockTransactions)

          
    //     fetch.mockImplementation(() =>
    //      Promise.resolve({
    //         ok:true,
    //         json: async() =>Promise.resolve(mockTransactions),
    //      })
    //     );

    //      const {container} =   render(<RewardsCalculator />);
    //     // render(<RewardsCalculator />);
    //     await waitFor (()=> {

    //         console.log(container.innerHTML)


    //         // expect(screen.getByText((content, element) =>content.includes('Customer: 100'))).toBeInTheDocument();
    //         expect(screen.getByText(/Customer: 100/)).toBeInTheDocument();
    //         expect(screen.getByText(/\$130/)).toBeInTheDocument();
    //         expect(screen.getByText(/2024-03-16/)).toBeInTheDocument();
    //     })
    // })


})