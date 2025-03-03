import React from 'react'
import Title from '../Title'
import Wrapper from '../Wrapper'

const FinancialInformation = () => {
    return (
        <section>
            <Title>
                Sallery Information
            </Title>

            <Wrapper>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="sallery">Sallery</label><br />
                        <input id="sallery" type="text" placeholder="Write your phone number" className="border rounded px-2 h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="bank">Bank</label><br />
                        <input id="bank" type="text" placeholder="City name" className="border rounded px-2 h-10 w-full" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default FinancialInformation