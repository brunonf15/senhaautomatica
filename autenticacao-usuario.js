describe('Autenticação usuário', function () {
    it('Um usuário ao inserir dados válidos, de autenticação, tem acesso ao sistema.', function () {

        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        browser.get('https://10.90.13.100/user/user_login_auth.jsp');
        browser.sleep(5000);
        element(by.id('username')).sendKeys('bruno.figueiredo');
		element(by.id('password')).sendKeys('typeyoupass');
		element(by.name('ok')).click();
		browser.sleep(10000);
		browser.get('http://google.com.br');
    });
});
