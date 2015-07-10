describe("portfolio home page nav bar",function(){
    it('Should have a title of Home Page',function(){
        browser.get('http://localhost:3000/#/homePage');
        expect(browser.getTitle()).toEqual('Home Page');
    });
});