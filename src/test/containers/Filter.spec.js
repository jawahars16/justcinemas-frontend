import Filter from "../../app/containers/Filter";

describe("Filter Container", ()=>{
    it("Should able to construct new object", ()=>{
        const props = {};
        const filter = new Filter(props);
        expect(filter).not().toBeNull();
    })
})