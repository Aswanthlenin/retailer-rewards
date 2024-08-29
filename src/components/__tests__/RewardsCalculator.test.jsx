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
          json:() => Promise.resolve([]),
        })
        );
      render(<RewardsCalculator />) ;
      expect (screen.getByText(/Loading.../)).toBeInTheDocument()
    });
    it('Should render rewards data correctly', async ()=> {
        const mockData = [
            {
                customerId:'123', 
                date:"2024-08-16",
                transactionAmount:130,
            }
        ];

        fetch.mockImplementation(() =>
         Promise.resolve({
            ok:true,
            jsonr: () =>Promise.resolve(mockData)
         })
        );

        render(<RewardsCalculator/>);
        await waitFor (()=> {
            expect(screen.getByText(/Customer:123/)).toBeInTheDocument();
            expect(screen.getByText(/Transaction \(Last 3 Months1\):/)).toBeInTheDocument();
        })
    })
})